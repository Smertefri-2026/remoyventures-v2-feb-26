import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, topic, message, cfToken } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Mangler felter." }, { status: 400 });
    }

    // ✅ Turnstile verify (server-side)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return NextResponse.json(
        { error: "Server mangler TURNSTILE_SECRET_KEY." },
        { status: 500 }
      );
    }

    if (!cfToken) {
      return NextResponse.json(
        { error: "Mangler Turnstile token." },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: cfToken,
        }),
      }
    );

    const verifyData = (await verifyRes.json()) as { success?: boolean };
    if (!verifyData?.success) {
      return NextResponse.json(
        { error: "Turnstile-verifisering feilet. Prøv igjen." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!resendKey || !to) {
      return NextResponse.json(
        { error: "Server mangler RESEND_API_KEY eller CONTACT_TO_EMAIL." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Remøy Ventures <onboarding@resend.dev>", // bytt når domenet er verifisert i Resend
      to,
      replyTo: email,
      subject: `[Remøy Ventures] ${topic || "Forespørsel"} — ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\nTema: ${topic}\n\nMelding:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Ukjent feil." },
      { status: 500 }
    );
  }
}