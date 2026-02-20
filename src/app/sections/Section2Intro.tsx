export default function Section2Intro() {
  return (
    <section className="mt-10">
      <div className="grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="sec sec-mint p-6 flex min-h-44 flex-col">
          <div className="pill pill-mint text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--mint), var(--cyan))",
              }}
            />
            Platform Studio
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Produkter som faktisk fungerer
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Vi bygger raske, stabile og skalerbare løsninger: nettsider, nettbutikker,
            portaler og apper – med fokus på flyt, konvertering og drift.
          </p>

          <div className="mt-auto pt-4" />
        </div>

        {/* Card 2 */}
        <div className="sec sec-cyan p-6 flex min-h-44 flex-col">
          <div className="pill pill-sky text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--cyan), var(--sky))",
              }}
            />
            Venture Builder
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Fra idé til lansering
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Vi tar konsepter fra null til marked: posisjonering, produkt, systemer,
            innhold og struktur – bygget for å kunne skaleres.
          </p>

          <div className="mt-auto pt-4" />
        </div>

        {/* Card 3 */}
        <div className="sec sec-violet p-6 flex min-h-44 flex-col">
          <div className="pill pill-lav text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, var(--lav), var(--sky))",
              }}
            />
            Partnerskap
          </div>

          <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
            Team, investorer og vekst
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            RV kobler sammen folk, kapital og gjennomføring. Når modellen sitter,
            bygger vi videre med riktig team, tempo og finansiering.
          </p>

          <div className="mt-auto pt-4" />
        </div>
      </div>
    </section>
  );
}