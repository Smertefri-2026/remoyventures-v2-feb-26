// /src/app/sections/Section8Contact.tsx
import ContactForm from "@/components/ContactForm";

export default function Section8Contact() {
  return (
    <section id="kontakt" className="mt-12 pb-16">
      <div className="sec sec-mint p-7 sm:p-10">
        <div className="max-w-2xl">
          <div className="pill pill-mint text-xs font-extrabold w-fit">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(135deg, var(--mint), var(--cyan))" }}
            />
            Kontakt
          </div>

          <h2 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
            Send en forespørsel
          </h2>

          <p className="mt-2 text-sm text-slate-700">
            Fortell kort hva vi kan hjelpe deg med – så svarer jeg raskt. (Nettside, nettbutikk, app/portal, SEO eller investering.)
          </p>
        </div>

        <div className="mt-6 paper p-5 sm:p-6">
          <ContactForm />
        </div>

        <div className="mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} Remøy Ventures AS
        </div>
      </div>
    </section>
  );
}