// /Users/oystein/nettsider/remoyventures-v2-feb-26/src/app/sections/Section7Investors.tsx

export default function Section7Investors() {
  return (
    <section id="muligheter" className="mt-12">
      <h2 className="h-font text-2xl font-extrabold text-white">Muligheter</h2>
      <p className="mt-2 text-sm text-white/70">
        Investering – både i SmerteFri og i nye digitale konsepter.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {/* Case 1: SmerteFri investorer */}
<div className="sec sec-orange p-6">
            <div className="pill pill-amber text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--amber), var(--orange))",
              }}
            />
            Investering
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            SmerteFri – vi søker investorer
          </h3>

<p className="mt-2 text-sm leading-relaxed text-slate-700">
  Etter mange års erfaring har vi hjulpet hundrevis av kunder nærmere en smertefri hverdag. Nå har vi bygget et eget
  arbeidsverktøy for rehab-trenere: en portal for oppfølging,
  tester/progresjon og et videobibliotek. Vi er et voksende miljø av rehab-trenere, og neste steg er å
  etablere et nasjonalt nettverk av SmerteFri-sentre. Derfor ønsker vi å komme i
  kontakt med én eller flere investorer i størrelsesorden ~100 MNOK for nasjonal
  utrulling – med ambisjon om at SmerteFri på sikt også kan bli en naturlig del av
  “trening på resept”.
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
                background:
                  "linear-gradient(135deg, var(--cyan), var(--sky))",
              }}
            />
            Venture
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Har du et konsept som kan bli stort på nett?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Vi ser etter utvalgte gründere og prosjekter der vi kan investere med
            kompetanse, kode og plattform – og være med å bygge fra tidlig fase.
            Prosessen dokumenteres, og vi kan filme fra første møte dersom det passer.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Vi investerer i nettside/app, UX, konvertering og drift.</li>
            <li>• Du sender en kort video + pitch (hvem du er, problemet, løsningen).</li>
            <li>• Teamet vurderer og inviterer videre til møte hvis det er match.</li>
          </ul>

          <div className="mt-5">
            <a className="btn btn-sky" href="#kontakt">
              Send video / pitch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}