export default function Section1Hero() {
  return (
    <section className="pt-10">
      <div className="sec sec-hero p-7 sm:p-10">
        <div className="max-w-3xl">
          <div className="pill pill-mint text-xs font-extrabold">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--mint), var(--cyan))",
              }}
            />
            Fast partner for digital utvikling
          </div>

          <h1 className="mt-4 h-font h-tight text-4xl font-extrabold sm:text-5xl">
            Fast partner for digital utvikling
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-900">
            Remøy Ventures hjelper etablerte virksomheter med nettsider og nettbutikker,
            kundeportaler og webapper, og automatisering av arbeidsprosesser – som et
            langsiktig samarbeid, ikke enkeltstående oppdrag. Du får én fast kontakt med
            ansvar for fremdrift og leveranse, bygget på over 30 års erfaring med
            virksomhetsdrift, kundeansvar og større prosjekter.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn btn-mint" href="#kontakt">
              Ta kontakt
            </a>
            <a className="btn btn-ghost" href="#samarbeid">
              Se hvordan vi samarbeider
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="pill pill-mint">Nettsider &amp; nettbutikker</span>
            <span className="pill pill-sky">Kundeportaler &amp; webapper</span>
            <span className="pill pill-lav">Automatisering &amp; KI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
