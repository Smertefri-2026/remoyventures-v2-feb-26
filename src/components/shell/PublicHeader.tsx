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

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
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
      <div className="border-b border-white/10 bg-[rgba(11,18,32,0.70)] backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <a href="#top" onClick={handleNav("#top")} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/10 ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-white">{brand}</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleNav(l.href)}
                className="rounded-full px-3 py-2 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold text-white ring-1 ring-white/15 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
          >
            <span className="text-base leading-none">{open ? "✕" : "≡"}</span>
            <span>{open ? "Lukk" : "Meny"}</span>
          </button>
        </div>

        <div
          id="mobile-menu"
          ref={panelRef}
          className={[
            "md:hidden overflow-hidden border-t border-white/10",
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
                  className="rounded-2xl px-4 py-3 text-center font-extrabold text-white/85 hover:bg-white/10 hover:text-white transition"
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