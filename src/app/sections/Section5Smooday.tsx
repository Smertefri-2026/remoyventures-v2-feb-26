import Image from "next/image";

export default function Section5Smooday() {
  return (
    <section className="mt-8">
      <div className="sec sec-cyan p-7 sm:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          {/* Text (mobil: øverst, md+: høyre) */}
          <div className="order-1 md:order-2 max-w-2xl">
            <div className="pill pill-sky text-xs font-extrabold w-fit">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--cyan), var(--sky))",
                }}
              />
              PT Tjenester AS • Nutrition
            </div>

            <h3 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
              Smooday
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Et ernærings- og kosttilskuddskonsept som er bygget for enkelhet:
              “riktig drivstoff – uten unødvendig friksjon”. Fokus på premium
              formuleringer, tydelig brukeropplevelse og skalerbar distribusjon.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Produkter som er lette å forstå – og lette å bruke daglig.</li>
              <li>• Plattform + nettbutikk som kan skaleres internasjonalt.</li>
              <li>• Sterk merkevare: tech + natur i samme uttrykk.</li>
            </ul>

            <div className="mt-6">
              <a
                className="btn btn-sky"
                href="https://smooday.com"
                target="_blank"
                rel="noreferrer"
              >
                Besøk smooday.com ↗
              </a>
            </div>
          </div>


{/* Image (med telefonramme fra PNG) */}
<div className="order-2 md:order-1 flex justify-center">
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
        src="/Smood.day2.png"
        alt="Smood.day – mobilvisning"
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