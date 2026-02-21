// /src/app/sections/Section8Contact.tsx
import ContactForm from "@/components/ContactForm";

export default function Section8Contact() {
  return (
    <section id="kontakt" className="mt-12 pb-16">
      {/* ✅ Hvit tittel over kontaktseksjonen */}
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Kontakt</h2>
        <p className="mt-2 text-sm text-white/70">
          Send en kort forespørsel – så svarer vi raskt.
        </p>
      </div>

      <div className="sec sec-mint p-6 sm:p-10">
        {/* ✅ gjør innholdet bredere og sentrert */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="max-w-2xl">
            <div className="pill pill-mint text-xs font-extrabold w-fit">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--mint), var(--cyan))",
                }}
              />
              Send forespørsel
            </div>

            <h3 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
              Fortell kort hva du vil bygge
            </h3>

            <p className="mt-2 text-sm text-slate-700">
              Nettside, nettbutikk, app/portal, SEO eller investering – vi tar en rask vurdering
              og svarer deg.
            </p>
          </div>

          {/* ✅ card bredere + trygg mot overflow */}
          <div className="mt-6 paper p-5 sm:p-6 overflow-hidden">
            <ContactForm />
          </div>

          <div className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Remøy Ventures AS
          </div>
        </div>
      </div>
    </section>
  );
}