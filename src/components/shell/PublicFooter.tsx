// /Users/oystein/nettsider/remoyventures-v2-feb-26/src/components/shell/PublicFooter.tsx

export default function PublicFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 w-full">
      {/* Full width bakgrunn – lik header */}
      <div className="w-full border-t border-white/15 bg-[linear-gradient(135deg,var(--mint),var(--cyan))]">
        {/* Innhold: max width */}
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6">
            {/* Top */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="font-brand text-sm font-bold tracking-wide text-slate-900">
                  REMØY VENTURES AS
                </div>
                <div className="mt-1 text-sm text-slate-900/80">
                  Holding og venture builder – helse, trening og teknologi.
                </div>

                <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/25 px-4 py-2 text-xs font-extrabold text-slate-900 ring-1 ring-white/25">
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                  © {year}
                </div>
              </div>

              {/* Quick buttons */}
              <div className="flex flex-col gap-3 md:items-end">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://app.smertefri.no"
                    className="rounded-full bg-white/25 px-4 py-2 text-xs font-extrabold text-slate-900 ring-1 ring-white/25 hover:bg-white/35 transition"
                  >
                    SmerteFri
                  </a>
                  <a
                    href="https://ptcrew.no"
                    className="rounded-full bg-white/25 px-4 py-2 text-xs font-extrabold text-slate-900 ring-1 ring-white/25 hover:bg-white/35 transition"
                  >
                    PTCrew
                  </a>
                  <a
                    href="https://smood.day"
                    className="rounded-full bg-white/25 px-4 py-2 text-xs font-extrabold text-slate-900 ring-1 ring-white/25 hover:bg-white/35 transition"
                  >
                    Smood.day
                  </a>
                </div>
              </div>
            </div>

            {/* Divider + links */}
            <div className="border-t border-white/15 pt-5">
              <div className="flex flex-col gap-3 text-xs font-bold text-slate-900/80 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-5">
                  <a href="#kontakt" className="hover:text-slate-900 transition">
                    Kontakt
                  </a>

                  <a
                    href="https://www.linkedin.com/in/%C3%B8ystein-solheim-rem%C3%B8y-a226703b1/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900 transition"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* Ingen JS – bare normal anchor */}
                <a href="#top" className="inline-flex w-fit items-center gap-2 hover:text-slate-900 transition">
                  Til toppen ↑
                </a>
              </div>

              <div className="mt-4 text-xs text-slate-900/70">
                Org.nr 936 156 851
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}