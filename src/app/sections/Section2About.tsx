export default function Section2About() {
  return (
    <section id="om" className="mt-12">
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Hvorfor Remøy Ventures</h2>
        <p className="mt-2 text-sm text-white/70">
          Erfaring fra virksomhetsdrift, ikke bare fra koding.
        </p>
      </div>

      <div className="sec sec-sky p-7 sm:p-10">
        <div className="max-w-3xl">
          <div className="pill pill-sky text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--sky), var(--cyan))",
              }}
            />
            Øystein Solheim Remøy
          </div>

          <h3 className="mt-3 h-font text-xl sm:text-2xl font-extrabold text-slate-900">
            Over 30 års bransjeerfaring
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Jeg har drevet virksomhet, ledet ansatte og hatt ansvar for store kunder,
            prosjektledelse og leveranser i over 30 år. De siste årene har jeg bygget
            videre på den erfaringen med moderne, KI-støttet utvikling – med samme krav
            til struktur, testing og oppfølging som jeg alltid har stilt til eget arbeid.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Med Remøy Ventures får du én fast kontakt med ansvar for fremdrift og
            leveranse gjennom hele samarbeidet. Der et prosjekt krever spesialkompetanse
            utover dette, trekker jeg inn det som er nødvendig for at leveransen skal
            holde mål.
          </p>

          <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li className="pill pill-chip w-fit">Virksomhetsdrift og ledelse</li>
            <li className="pill pill-chip w-fit">Kundeansvar og prosjektledelse</li>
            <li className="pill pill-chip w-fit">Større, sammensatte prosjekter</li>
            <li className="pill pill-chip w-fit">KI-støttet utvikling og testing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
