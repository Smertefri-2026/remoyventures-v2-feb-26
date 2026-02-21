export default function Section7Investors() {
  return (
    <section id="muligheter" className="mt-12">
      <h2 className="h-font text-2xl font-extrabold text-white">Muligheter</h2>
      <p className="mt-2 text-sm text-white/70">
        Investering – både i SmerteFri og i utvalgte digitale konsepter.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {/* Case 1: SmerteFri investorer */}
        <div className="sec sec-orange p-6">
          <div className="pill pill-amber text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--amber), var(--orange))",
              }}
            />
            Investering
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            SmerteFri – vi søker investorer
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Etter mange års erfaring har vi hjulpet hundrevis av kunder nærmere en smertefri hverdag.
            Nå er neste steg å etablere et nasjonalt nettverk av SmerteFri-sentre – støttet av en
            digital plattform for rehab-trenere (oppfølging, tester/progresjon og videobibliotek).
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Mål: nasjonal utrulling med standardisert drift + lokale team.</li>
            <li>• Plattformen gir struktur, dokumentasjon og bedre kundeopplevelse.</li>
            <li>• Ambisjon: på sikt en naturlig del av “trening på resept”.</li>
          </ul>

          <p className="mt-4 text-sm font-extrabold text-slate-900">
            Vi ønsker dialog med én eller flere investorer i størrelsesorden ~100 MNOK.
          </p>

          <div className="mt-5">
            <a className="btn btn-amber" href="#kontakt">
              Kontakt for pitch / datarom
            </a>
          </div>
        </div>

        {/* Case 2: Vi investerer i digitale konsepter */}
        <div className="sec sec-cyan p-6">
          <div className="pill pill-sky text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--cyan), var(--sky))",
              }}
            />
            Venture
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Har du et konsept som kan bli stort på nett?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Vi vurderer et fåtall gründere og prosjekter der vi kan investere med kompetanse og
            gjennomføring – ikke bare kapital. Vi kan bidra med design/UX, kode, SEO og konvertering,
            og bygge et solid fundament for skalerbar drift.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Du sender en kort video + pitch (hvem du er, problemet, løsningen, marked).</li>
            <li>• Vi vurderer raskt og inviterer videre hvis det er match.</li>
            <li>• Dersom begge vil: vi kan dokumentere reisen fra første møte.</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn btn-sky" href="#kontakt">
              Send video / pitch
            </a>
            <a className="btn btn-ghost" href="#kontakt">
              Be om intro-møte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}