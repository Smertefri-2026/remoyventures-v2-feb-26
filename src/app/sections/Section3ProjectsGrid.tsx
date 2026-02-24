// /Users/oystein/nettsider/remoyventures-v2-feb-26/src/app/sections/Section3ProjectsGrid.tsx

export default function Section3ProjectsGrid() {
  return (
    <section className="mt-12">
      <h2 className="h-font text-2xl font-extrabold text-white">Ventures</h2>
      <p className="mt-2 text-sm text-white/70">
        Kort forklart: hva betyr “ventures” og hvordan vi jobber.
      </p>

      <div className="mt-6 sec sec-orange p-6 sm:p-7 flex min-h-44 flex-col">
        <div className="pill pill-amber text-xs font-extrabold w-fit">
          <span
            className="h-2 w-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, var(--amber), var(--orange))",
            }}
          />
          Remøy Ventures
        </div>

        <h3 className="mt-3 h-font text-lg sm:text-xl font-extrabold text-slate-900">
          Hva betyr “Ventures”?
        </h3>

        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
          <li>• “Ventures” betyr å bygge og utvikle nye satsinger – ofte fra idé til selskap.</li>
          <li>• Vi jobber hands-on med produkt, teknologi, merkevare og markedsføring – ikke bare “rådgivning”.</li>
          <li>• Målet er skalerbare selskaper: enten langsiktig eierskap, eller samarbeid der vi bygger sammen med partnere.</li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="pill pill-mint text-xs font-extrabold">Bygge</span>
          <span className="pill pill-sky text-xs font-extrabold">Teste</span>
          <span className="pill pill-lav text-xs font-extrabold">Skalere</span>
          <span className="pill pill-amber text-xs font-extrabold">Investere</span>
        </div>

        <div className="mt-auto pt-4" />
      </div>
    </section>
  );
}