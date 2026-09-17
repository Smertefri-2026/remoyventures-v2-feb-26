export default function Section4Collaboration() {
  return (
    <section id="samarbeid" className="mt-12">
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Hvordan vi samarbeider</h2>
        <p className="mt-2 text-sm text-white/70">
          Fra første samtale til et langsiktig partnerskap.
        </p>
      </div>

      <div className="sec sec-mint p-7 sm:p-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="pill pill-mint text-xs font-extrabold w-fit">Kartlegging</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Når behovet er sammensatt eller uklart, starter vi med en avgrenset,
              betalt kartlegging av nåsituasjon og løsningsretning. Der behovet
              allerede er tydelig avgrenset, går vi rett til etablering.
            </p>
          </div>
          <div>
            <div className="pill pill-sky text-xs font-extrabold w-fit">Etablering</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Første leveranse, med tydelig avtalt omfang – grunnlaget for det videre
              samarbeidet.
            </p>
          </div>
          <div>
            <div className="pill pill-lav text-xs font-extrabold w-fit">Årsavtale</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Kontinuitet og kjennskap til virksomheten gjør videreutvikling raskere og
              tryggere. Prioriteringer legges sammen gjennom året, med planlagt
              utvikling fremfor å starte på nytt med en ny leverandør hver gang.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(15,23,42,0.10)] pt-6">
          <p className="text-base font-extrabold text-slate-900">
            Utviklingsprosjekter fra 100 000 kr eks. mva. Langsiktige avtaler etter
            behov og omfang.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Kapasitet, prioritering, responstid og eventuelt vedlikehold eller
            beredskap avklares konkret i tilbudet for hver kunde.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Relevante prosjekter og en demonstrasjon av arbeidsmåten kan presenteres
            privat, etter avtale.
          </p>
        </div>
      </div>
    </section>
  );
}
