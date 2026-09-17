export default function Section3Services() {
  return (
    <section id="leveranser" className="mt-12">
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Hva vi kan hjelpe deg med</h2>
        <p className="mt-2 text-sm text-white/70">
          Tre leveranseområder – teknologien velges etter behovet, ikke etter mal.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* 1 */}
        <div className="sec sec-mint p-6 sm:p-7 flex min-h-56 flex-col equal-card">
          <div className="pill pill-mint text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--mint), var(--cyan))" }}
            />
            01
          </div>
          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Nettsider og nettbutikker
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Profesjonelle nettsider og nettbutikker som følger virksomheten når den
            vokser – fra første lansering til videreutvikling år etter år.
          </p>
        </div>

        {/* 2 */}
        <div className="sec sec-sky p-6 sm:p-7 flex min-h-56 flex-col equal-card">
          <div className="pill pill-sky text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--sky), var(--cyan))" }}
            />
            02
          </div>
          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Kundeportaler, webapper og integrasjoner
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Skreddersydde løsninger der standardsystemer ikke strekker til: bestilling,
            kundeoppfølging og koblinger mellom systemer som i dag ikke snakker sammen.
          </p>
        </div>

        {/* 3 */}
        <div className="sec sec-violet p-6 sm:p-7 flex min-h-56 flex-col equal-card">
          <div className="pill pill-lav text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--lav), var(--sky))" }}
            />
            03
          </div>
          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Automatisering og KI i arbeidsprosesser
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Automatisering av hele, sammenhengende arbeidsprosesser på tvers av
            avdelinger eller systemer – planlagt og videreutviklet over tid, ikke en
            enkeltstående småfiks.
          </p>
        </div>
      </div>
    </section>
  );
}
