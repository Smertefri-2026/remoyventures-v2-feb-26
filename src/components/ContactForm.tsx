// /Users/oystein/nettsider/remoyventures-v2-feb-26/src/components/ContactForm.tsx
"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ✅ Ta vare på form-referansen før await (e.currentTarget kan bli null etter await)
    const form = e.currentTarget;

    setState("sending");
    setMsg("");

    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Noe gikk galt.");

      setState("sent");
      setMsg("Takk! Meldingen er sendt. Jeg svarer deg snart.");

      // ✅ reset funker stabilt nå
      form.reset();
    } catch (err: any) {
      setState("error");
      setMsg(err?.message || "Noe gikk galt. Prøv igjen.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
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
        <label className="text-xs font-extrabold text-slate-600">Hva gjelder det?</label>
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

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-mint" disabled={state === "sending"}>
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