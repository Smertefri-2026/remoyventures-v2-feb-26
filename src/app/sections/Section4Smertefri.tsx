import Image from "next/image";

export default function Section4Smertefri() {
  return (
    <section id="prosjekter" className="mt-12">
      {/* ✅ Hvit overskrift over prosjekt-seksjon */}
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Egne prosjekter</h2>
        <p className="mt-2 text-sm text-white/70">
          Konsepter og plattformer vi bygger og eier.
        </p>
      </div>

      <div className="sec sec-mint p-7 sm:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          {/* ✅ Text (mobil: øverst, md+: venstre) */}
          <div className="order-1 md:order-1 max-w-2xl">
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

          {/* ✅ Image (mobil: nederst, md+: høyre) */}
          <div className="order-2 md:order-2 flex justify-center">
            <div className="w-full max-w-40">
              <div
                className="relative aspect-740/1508 overflow-hidden"
                style={{
                  borderRadius: 20,
                  WebkitMaskImage: "radial-gradient(white 96%, transparent 100%)",
                  maskImage: "radial-gradient(white 96%, transparent 100%)",
                }}
              >
                <Image
                  src="/SmerteFri2.png"
                  alt="SmerteFri – mobilvisning"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(2,6,23,0.25)]"
                  sizes="(max-width: 768px) 85vw, 360px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}