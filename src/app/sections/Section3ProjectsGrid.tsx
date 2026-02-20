type Project = {
  name: string;
  url: string;
  desc: string;
  tag: string;
  theme: "mint" | "cyan" | "violet";
};

const projects: Project[] = [
  {
    name: "SmerteFri",
    url: "https://smertefri.no",
    desc: "Rehab, trening og oppfølging – teknologi og lav støy.",
    tag: "Health & Rehab",
    theme: "mint",
  },
  {
    name: "Smooday",
    url: "https://smooday.com",
    desc: "Kosttilskudd og ernæring – enkelt, funksjonelt og skalerbart.",
    tag: "Nutrition",
    theme: "cyan",
  },
  {
    name: "PTCrew",
    url: "https://ptcrew.no",
    desc: "Portal og system for PT-tjenester, team og oppfølging.",
    tag: "Platform",
    theme: "violet",
  },
];

const themeClass: Record<Project["theme"], string> = {
  mint: "sec sec-mint",
  cyan: "sec sec-cyan",
  violet: "sec sec-violet",
};

const pillClass: Record<Project["theme"], string> = {
  mint: "pill pill-mint",
  cyan: "pill pill-sky",
  violet: "pill pill-lav",
};

const dotStyle: Record<Project["theme"], React.CSSProperties> = {
  mint: { background: "linear-gradient(135deg, var(--mint), var(--cyan))" },
  cyan: { background: "linear-gradient(135deg, var(--cyan), var(--sky))" },
  violet: { background: "linear-gradient(135deg, var(--lav), var(--sky))" },
};

export default function Section3ProjectsGrid() {
  return (
    <section id="prosjekter" className="mt-12">
      <h2 className="h-font text-2xl font-extrabold text-white">Prosjekter</h2>
      <p className="mt-2 text-sm text-white/70">Klikk for å besøke.</p>

      <div className="mt-6 grid gap-4 sm:gap-5 lg:gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`${themeClass[p.theme]} p-6 flex min-h-44 flex-col transition hover:shadow-sm`}
          >
            {/* “Section2-style” pill header */}
            <div className={`${pillClass[p.theme]} text-xs font-extrabold w-fit`}>
              <span className="h-2 w-2 rounded-full" style={dotStyle[p.theme]} />
              {p.tag}
            </div>

            <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
              {p.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.desc}</p>

            <div className="mt-auto pt-4 flex items-end justify-between gap-3">
              <div className="text-xs font-bold text-slate-600">
                {p.url.replace("https://", "")}
              </div>

              {/* “Åpne ↗” – gjør den mørk så den popper */}
              <span className="pill pill-dark text-xs font-extrabold">
                Åpne ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Kort om RV – også samme “card style” */}
      <div className="mt-6 sec sec-orange p-6 flex min-h-44 flex-col">
        <div className="pill pill-amber text-xs font-extrabold w-fit">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--amber), var(--orange))" }}
          />
          Remøy Ventures
        </div>

        <h3 className="mt-3 h-font text-lg font-extrabold text-slate-900">
          Hva betyr “Ventures”?
        </h3>

       <ul className="mt-2 space-y-2 text-sm text-slate-700">
  <li>• “Ventures” betyr å bygge og utvikle nye satsinger (ventures) – ofte fra idé til selskap.</li>
  <li>• En venture builder jobber hands-on med produkt, teknologi, marked og drift.</li>
  <li>• Målet er å skape skalerbare selskaper – og eie dem langsiktig eller sammen med partnere.</li>
</ul>

        <div className="mt-auto pt-4" />
      </div>
    </section>
  );
}