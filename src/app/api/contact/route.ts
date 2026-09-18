import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Enkel rate-begrensning per IP (best-effort: tilbakestilles ved kald start
// på serverless hosting, men begrenser innsendinger fra samme varme instans).
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "For mange forespørsler. Prøv igjen om litt." },
        { status: 429 }
      );
    }

    const { name, email, company, topic, message, budget, startTime, cfToken, website } =
      await req.json();

    // Honeypot: skal alltid være tomt for ekte besøkende.
    if (website) {
      return NextResponse.json({ error: "Ugyldig innsending." }, { status: 400 });
    }

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: "Mangler felter." }, { status: 400 });
    }

    // Turnstile
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json({ error: "Server mangler TURNSTILE_SECRET_KEY." }, { status: 500 });
    }
    if (!cfToken) {
      return NextResponse.json({ error: "Mangler Turnstile token." }, { status: 400 });
    }

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: turnstileSecret, response: cfToken, remoteip: ip }),
    });

    const verifyData = (await verifyRes.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };
    if (!verifyData?.success) {
      console.error("Turnstile siteverify failed:", verifyData?.["error-codes"]);
      // MIDLERTIDIG DIAGNOSTIKK: bevis at siteverify faktisk kalles ved å
      // sende Cloudflares egne (ikke-hemmelige) feilkoder tilbake. Fjernes
      // rett etter verifisering - se commit-historikk.
      return NextResponse.json(
        {
          error: "Turnstile-verifisering feilet. Prøv igjen.",
          _diag_cloudflare_error_codes: verifyData?.["error-codes"] ?? null,
        },
        { status: 400 }
      );
    }

    // Resend
    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Remøy Ventures <onboarding@resend.dev>";

    if (!resendKey || !to) {
      return NextResponse.json(
        { error: "Server mangler RESEND_API_KEY eller CONTACT_TO_EMAIL." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Remøy Ventures] ${topic || "Forespørsel"} — ${company}`,
      text: `Virksomhet: ${company}\nKontaktperson: ${name}\nE-post: ${email}\nHva gjelder det: ${topic}\nBudsjettramme: ${budget}\nØnsket oppstart: ${startTime}\n\nBehov:\n${message}\n`,
    });

    console.log("Resend result:", result);

    // Resend returnerer { data: null, error: {...} } ved feil (f.eks. uverifisert
    // sender-domene) UTEN å kaste en exception - må sjekkes eksplisitt, ellers
    // rapporterer vi "sendt" til brukeren selv om e-posten aldri ble levert.
    if (result.error) {
      return NextResponse.json(
        { error: `E-posttjenesten avviste meldingen: ${result.error.message}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (e: unknown) {
    console.error("Contact error:", e);
    const message = e instanceof Error ? e.message : "Ukjent feil.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}