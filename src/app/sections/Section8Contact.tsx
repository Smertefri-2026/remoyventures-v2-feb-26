// /src/app/sections/Section8Contact.tsx
//
// Kontaktskjemaet (ContactForm.tsx + /api/contact) er midlertidig ute av
// bruk her: verken remoyventures.no eller send.remoyventures.no er
// verifisert som sender-domene i Resend, og Turnstile-nøkkelens
// domenetillatelse for produksjon er ikke bekreftet. Fremfor å publisere et
// skjema som ikke kan sende, viser vi en direkte e-postlenke til den
// eksisterende, fungerende kontaktadressen. Sett ContactForm tilbake inn her
// når domenet er verifisert i Resend og Turnstile-domenet er bekreftet.
const CONTACT_EMAIL = "post@remoyventures.no";

export default function Section8Contact() {
  return (
    <section id="kontakt" className="mt-12 pb-16">
      <div className="mb-6">
        <h2 className="h-font text-2xl font-extrabold text-white">Kontakt</h2>
        <p className="mt-2 text-sm text-white/70">
          Fortell kort om virksomheten og behovet – vi tar en kort samtale om det er
          en match.
        </p>
      </div>

      <div className="sec sec-mint p-6 sm:p-10">
        <div className="mx-auto w-full max-w-4xl">
          <div className="max-w-2xl">
            <div className="pill pill-mint text-xs font-extrabold w-fit">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--mint), var(--cyan))",
                }}
              />
              Ta kontakt
            </div>

            <h3 className="mt-3 h-font text-2xl font-extrabold text-slate-900">
              Ta en første samtale
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Send en kort e-post om virksomheten og behovet – gjerne med
              omtrentlig budsjettramme og ønsket oppstart – så svarer jeg med
              forslag til en kort samtale.
            </p>
          </div>

          <div className="mt-6 paper p-5 sm:p-6 overflow-hidden">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                "Digital utvikling - forespørsel"
              )}`}
              className="btn btn-mint text-base"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Remøy Ventures AS
          </div>
        </div>
      </div>
    </section>
  );
}
