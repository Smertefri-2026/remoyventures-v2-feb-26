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

  const headerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const pendingHashRef = useRef<string | null>(null);

  const getHeaderOffset = () => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 56;
    return Math.round(h + 10); // litt luft under header
  };

  const scrollToId = (id: string) => {
    if (!id || id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const go = (href: string) => {
    if (href === "#top") {
      scrollToId("top");
      return;
    }
    if (!href.startsWith("#")) return;

    const id = href.slice(1);
    // Oppdater URL hash (så “delbar” lenke funker)
    window.history.pushState(null, "", href);
    scrollToId(id);
  };

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    // Hvis menyen er åpen på mobil: lukk først, scroll etterpå
    if (open) {
      pendingHashRef.current = href;
      setOpen(false);
      return;
    }

    go(href);
  };

  // Etter at mobilmeny er lukket: scroll (etter animasjon/layout)
  useEffect(() => {
    if (open) return;

    const href = pendingHashRef.current;
    if (!href) return;

    pendingHashRef.current = null;

    // vent litt så max-height/opacity animasjonen er ferdig og header-høyden er stabil
    const t = window.setTimeout(() => go(href), 220);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Close on outside click + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;

      if (btnRef.current && btnRef.current.contains(t)) return;
      if (panelRef.current && panelRef.current.contains(t)) return;

      setOpen(false);
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

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Grønn header bakgrunn */}
      <div className="border-b border-white/15 backdrop-blur bg-[linear-gradient(135deg,var(--mint),var(--cyan))]">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.history.pushState(null, "", "#top");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
            aria-label="Gå til toppen"
          >
            <div className="leading-tight">
<div className="font-brand text-lg sm:text-xl font-bold tracking-wide text-slate-900">
  {brand}
</div>            </div>
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

        {/* Mobile menu */}
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
    </header>
  );
}