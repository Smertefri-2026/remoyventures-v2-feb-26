"use client";

import { useRef, useState } from "react";
import Turnstile from "react-turnstile";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, setState] = useState<FormState>("idle");
  const [msg, setMsg] = useState<string>("");

  // Turnstile token
  const [cfToken, setCfToken] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = formRef.current; // ✅ aldri null så lenge form finnes i DOM
    if (!form) {
      setState("error");
      setMsg("Skjemaet er ikke klart. Prøv igjen.");
      return;
    }

    // (Valgfritt) krav om Turnstile
    if (!cfToken) {
      setState("error");
      setMsg("Bekreft at du er et menneske (Turnstile).");
      return;
    }

    setState("sending");
    setMsg("");

    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, cfToken }), // ✅ send token til server
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Noe gikk galt.");

      setState("sent");
      setMsg("Takk! Meldingen er sendt. Jeg svarer deg snart.");

      // ✅ reset
      form.reset();
      setCfToken(null); // tøm token etter send
    } catch (err: any) {
      setState("error");
      setMsg(err?.message || "Noe gikk galt. Prøv igjen.");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <div>
          <label className="text-xs font-extrabold text-slate-600">Navn</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            placeholder="Fornavn og etternavn"
          />
        </div>

        <div>
          <label className="text-xs font-extrabold text-slate-600">E-post</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            placeholder="navn@firma.no"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-extrabold text-slate-600">
          Hva gjelder det?
        </label>
        <select
          name="topic"
          className="mt-1 w-full rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
          defaultValue="Nettside"
        >
          <option>Nettside</option>
          <option>Nettbutikk</option>
          <option>App / portal</option>
          <option>SEO / konvertering</option>
          <option>Automatisering</option>
          <option>Investering / pitch</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-extrabold text-slate-600">Melding</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
          placeholder="Fortell kort om hva du vil bygge, mål, tidslinje og ev. budsjett."
        />
      </div>

      {/* ✅ Cloudflare Turnstile */}
      <div className="pt-1">
        {!siteKey ? (
          <div className="text-sm text-red-700">
            Mangler NEXT_PUBLIC_TURNSTILE_SITE_KEY i miljøvariabler.
          </div>
        ) : (
          <Turnstile
            sitekey={siteKey}
            onVerify={(token) => setCfToken(token)}
            onExpire={() => setCfToken(null)}
            onError={() => setCfToken(null)}
          />
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="btn btn-mint"
          disabled={state === "sending"}
        >
          {state === "sending" ? "Sender…" : "Send forespørsel"}
        </button>

        {msg && (
          <div
            className={`text-sm ${
              state === "sent"
                ? "text-emerald-700"
                : state === "error"
                  ? "text-red-700"
                  : "text-slate-700"
            }`}
          >
            {msg}
          </div>
        )}
      </div>
    </form>
  );
}