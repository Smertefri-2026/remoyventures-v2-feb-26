import Image from "next/image";

export default function Section6PTCrew() {
  return (
    <section className="mt-8">
      <div className="sec sec-violet p-7 sm:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="pill pill-lav text-xs font-extrabold w-fit">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--lav), var(--sky))",
                }}
              />
              PT Tjenester AS • Platform
            </div>

            <h3 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
              PTCrew
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              En plattform som gjør PT-oppfølging enklere å selge, levere og
              dokumentere. Fokus på struktur, flyt og tydelige “bevis på fremgang”
              – både for trenere og kunde.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Onboarding, mål, tester og oppfølging – samlet.</li>
              <li>• Videobibliotek + progresjon – mindre admin, mer coaching.</li>
              <li>• Bygget for konvertering og profesjonell leveranse.</li>
            </ul>

            <div className="mt-6">
              <a
                className="btn btn-lav"
                href="https://ptcrew.no"
                target="_blank"
                rel="noreferrer"
              >
                Besøk ptcrew.no ↗
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
          src="/PTCrew2.png"
          alt="PTCrew – mobilvisning"
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