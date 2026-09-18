"use client";

import { useRef, useState } from "react";
import Turnstile from "react-turnstile";

type FormState = "idle" | "sending" | "sent" | "error";

const DEFAULT_TOPICS = [
  "Nettside / nettbutikk",
  "Kundeportal / webapp / integrasjon",
  "Automatisering / KI i arbeidsprosess",
  "Annet",
];

const BUDGET_RANGES = [
  "Under 100 000 kr",
  "100 000–300 000 kr",
  "300 000–750 000 kr",
  "Over 750 000 kr",
  "Vet ikke ennå",
];

const START_OPTIONS = [
  "Så snart som mulig",
  "Innen 3 måneder",
  "Senere i år",
  "Ingen bestemt frist – vil bare ta en samtale",
];

export default function ContactForm({
  topics = DEFAULT_TOPICS,
}: {
  topics?: string[];
}) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [state, setState] = useState<FormState>("idle");
  const [msg, setMsg] = useState<string>("");

  const [cfToken, setCfToken] = useState<string | null>(null);
  const [cfError, setCfError] = useState<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = formRef.current;
    if (!form) {
      setState("error");
      setMsg("Skjemaet er ikke klart. Prøv igjen.");
      return;
    }

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
        body: JSON.stringify({ ...payload, cfToken }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Noe gikk galt.");

      setState("sent");
      setMsg("Takk! Forespørselen er sendt. Jeg svarer deg snart.");

      form.reset();
      setCfToken(null);
    } catch (err: unknown) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen.");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 min-w-0">
      {/* Honeypot: usynlig for mennesker (fjernet fra layout, ikke fra a11y-treet
          via display:none/visibility:hidden), men fylles ofte ut av bots. */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <label htmlFor="website">La stå tomt</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 min-w-0">
        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">Virksomhet</label>
          <input
            name="company"
            required
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            placeholder="Bedriftens navn"
          />
        </div>

        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">Kontaktperson</label>
          <input
            name="name"
            required
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            placeholder="Fornavn og etternavn"
          />
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 min-w-0">
        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">E-post</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            placeholder="navn@firma.no"
          />
        </div>

        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">Hva gjelder det?</label>
          <select
            name="topic"
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            defaultValue={topics[0]}
          >
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className="text-xs font-extrabold text-slate-600">Kort om behovet</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
          placeholder="Hva vil dere løse eller bygge? Gjerne litt om nåsituasjonen."
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-2 min-w-0">
        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">Budsjettramme</label>
          <select
            name="budget"
            required
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            defaultValue={BUDGET_RANGES[BUDGET_RANGES.length - 1]}
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="min-w-0">
          <label className="text-xs font-extrabold text-slate-600">Ønsket oppstart</label>
          <select
            name="startTime"
            required
            className="mt-1 w-full min-w-0 rounded-xl border border-[rgba(2,6,23,0.10)] bg-white/70 px-3 py-2 text-sm outline-none"
            defaultValue={START_OPTIONS[START_OPTIONS.length - 1]}
          >
            {START_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-1 overflow-hidden">
        {!siteKey ? (
          <div className="text-sm text-red-700">
            Mangler NEXT_PUBLIC_TURNSTILE_SITE_KEY i miljøvariabler.
          </div>
        ) : (
          <div className="w-full">
            <div className="origin-left scale-[0.92] sm:scale-100">
              <Turnstile
                sitekey={siteKey}
                onVerify={(token) => {
                  setCfToken(token);
                  setCfError(null);
                }}
                onExpire={() => setCfToken(null)}
                onError={(error) => {
                  setCfToken(null);
                  setCfError(error);
                  console.error("Turnstile error code:", error);
                }}
              />
            </div>
            {cfError && (
              <div className="mt-2 text-xs text-red-700">
                Turnstile feilkode: {cfError}
              </div>
            )}
          </div>
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
