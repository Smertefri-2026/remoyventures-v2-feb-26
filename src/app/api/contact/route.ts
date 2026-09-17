import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, company, topic, message, budget, startTime, cfToken } =
      await req.json();

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
      body: new URLSearchParams({ secret: turnstileSecret, response: cfToken }),
    });

    const verifyData = (await verifyRes.json()) as { success?: boolean };
    if (!verifyData?.success) {
      return NextResponse.json({ error: "Turnstile-verifisering feilet. Prøv igjen." }, { status: 400 });
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