export default function Section1Hero() {
  return (
    <section className="pt-10">
      {/* Bruk lyse hero-seksjon (fra globals.css) */}
      <div className="sec sec-hero p-7 sm:p-10">
        <div className="max-w-3xl">
          {/* Top pill – farget (mint) */}
          <div className="pill pill-mint text-xs font-extrabold">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--mint), var(--cyan))",
              }}
            />
            Bygger • Eier • Skalerer
          </div>

          <h1 className="mt-4 h-font h-tight text-4xl font-extrabold sm:text-5xl">
            Remøy Ventures
          </h1>

         <p className="mt-4 text-base leading-relaxed text-slate-900">
  Remøy Ventures eies av Øystein Solheim Remøy og bygger selskaper og konsepter innen helse, trening og teknologi. I dag eier jeg SmerteFri AS og PT Tjenester AS, og utvikler plattformer og merkevarer med fokus på ytelse og skalerbar drift. Jeg bygger også nettsider, nettbutikker og apper for utvalgte aktører – kodebasert for maksimal kontroll og kvalitet.
</p>

          {/* CTA – mer farge (mint + amber) */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn btn-mint" href="#prosjekter">
              Se prosjektene
            </a>
            <a className="btn btn-amber" href="#kontakt">
              Ta kontakt
            </a>
          </div>

          {/* Chips – SAMME farge (mint), som du ønsket */}
<div className="mt-6 flex flex-wrap gap-2 text-xs">
  <span className="pill pill-mint">Nettsider</span>
  <span className="pill pill-sky">Nettbutikker</span>
  <span className="pill pill-lav">Apper / portaler</span>
  <span className="pill pill-amber">SEO & konvertering</span>
  <span className="pill pill-mint">Automatisering</span>
</div>

        </div>
      </div>
    </section>
  );
}