"use client";

import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export default function PublicHeader({
  brand = "Remøy Ventures",
  links = [
    { href: "#prosjekter", label: "Prosjekter" },
    { href: "#muligheter", label: "Muligheter" },
    { href: "#kontakt", label: "Kontakt" },
  ],
}: {
  brand?: string;
  links?: Item[];
}) {
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // 🔧 viktig: må matche css scroll-padding-top (vi bruker 80px)
  const HEADER_OFFSET = 80;

  // Når du klikker i mobilmenyen: lukk først, scroll etterpå
  const pendingHrefRef = useRef<string | null>(null);

  const scrollToHash = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    // Oppdater URL uten å trigge native "jump"
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", href);
    }

    // På mobil: lukk meny først, scroll etter at layout har oppdatert seg
    if (open) {
      pendingHrefRef.current = href;
      setOpen(false);
      return;
    }

    // Desktop / når menyen allerede er lukket
    scrollToHash(href);
  };

  // ✅ Etter at mobilmenyen har lukket seg: scroll (stabilt på mobil)
  useEffect(() => {
    if (open) return;
    const href = pendingHrefRef.current;
    if (!href) return;

    pendingHrefRef.current = null;

    // Vent 1-2 frames så DOM/layout er oppdatert etter at menyen har kollapset
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(href);
      });
    });
  }, [open]);

  // ✅ Hvis du lander direkte på /#kontakt etc.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // gi siden litt tid til å mounte seksjoner før vi scroller
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToHash(hash));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Close on outside click + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;

      if (btnRef.current && btnRef.current.contains(t)) return;
      if (panelRef.current && !panelRef.current.contains(t)) setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* ✅ Grønn header (match resten av uttrykket) */}
      <div className="border-b border-white/15 backdrop-blur bg-[linear-gradient(135deg,var(--mint),var(--cyan))]">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" onClick={handleNav("#top")} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/25 ring-1 ring-white/25" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900">{brand}</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleNav(l.href)}
                className="rounded-full px-3 py-2 text-sm font-extrabold text-slate-900/90 hover:bg-white/25 hover:text-slate-900 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            ref={btnRef}
            className="md:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold text-slate-900 bg-white/25 ring-1 ring-white/25 hover:bg-white/35 transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
          >
            <span className="text-base leading-none">{open ? "✕" : "≡"}</span>
            <span>{open ? "Lukk" : "Meny"}</span>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          ref={panelRef}
          className={[
            "md:hidden overflow-hidden border-t border-white/15",
            "transition-[max-height,opacity] duration-200",
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-3">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleNav(l.href)}
                  className="rounded-2xl px-4 py-3 text-center font-extrabold text-slate-900 bg-white/25 ring-1 ring-white/25 hover:bg-white/35 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="top" />
    </header>
  );
}