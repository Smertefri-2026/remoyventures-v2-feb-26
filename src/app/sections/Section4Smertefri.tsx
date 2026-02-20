import Image from "next/image";

export default function Section4Smertefri() {
  return (
    <section className="mt-12">
      <div className="sec sec-mint p-7 sm:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="pill pill-mint text-xs font-extrabold w-fit">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--mint), var(--cyan))",
                }}
              />
              SmerteFri AS • Health & Rehab
            </div>

            <h3 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
              SmerteFri
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Et rehab- og treningskonsept som kombinerer struktur, progresjon og
              teknologi – uten “støyen” fra tradisjonelle treningssentre. Målet
              er et nasjonalt nettverk av SmerteFri-sentre og en plattform som
              gjør oppfølging enklere for både kunder og trenere.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Smart oppfølging, tester og fremgang – tydelig progresjon.</li>
              <li>• Lav terskel, høy kvalitet – bygget for varig endring.</li>
              <li>• Kan skaleres: standardisert drift + lokale team.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="btn btn-mint"
                href="https://smertefri.no"
                target="_blank"
                rel="noreferrer"
              >
                Besøk smertefri.no ↗
              </a>
              <a className="btn btn-amber" href="#muligheter">
                Investor / team
              </a>
            </div>
          </div>

{/* Image (ramme rundt selve bildet) */}
<div className="flex justify-center md:justify-center">
  <div className="w-full max-w-40">
    <div className="rounded-2xl border border-[rgba(2,6,23,0.10)] bg-[#F3E8DA] p-3 shadow-sm">
      <div className="relative aspect-195/422 overflow-hidden rounded-xl bg-white">
        <Image
                  src="/SmerteFri.png"
                  alt="SmerteFri – mobilvisning"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 360px"
          priority={false}
        />
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}