"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!detailsRef.current) return;
    detailsRef.current.open = open;
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-cyan-500/20 shadow-[0_0_40px_rgba(0,245,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-lg font-bold"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.8)]" />
          <span className="neon-text">isivara.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-gray-400 transition-colors hover:text-cyan-200"
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA (desktop only) */}
        <a
          href="/RajapakseRKIM_CV.pdf"
          download
          className="group hidden min-w-[180px] items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-black/30 px-7 py-3 text-sm font-semibold text-cyan-200 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] active:scale-95 md:inline-flex"
        >
          <Download size={16} />
          Download CV
        </a>

        {/* Mobile menu (details provides a no-JS fallback) */}
        <details
          ref={detailsRef}
          className="relative md:hidden"
          onToggle={(e) =>
            setOpen((e.currentTarget as HTMLDetailsElement).open)
          }
        >
          <summary
            aria-label="Toggle menu"
            className="list-none rounded-md p-2 text-cyan-300 [&::-webkit-details-marker]:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </summary>

          <div className="absolute right-0 top-[calc(100%+14px)] w-[min(92vw,420px)] overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/80 backdrop-blur-xl shadow-[0_0_40px_rgba(0,245,255,0.06)]">
            <ul className="flex flex-col gap-1 p-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      if (detailsRef.current) detailsRef.current.open = false;
                    }}
                    className="block rounded-md px-3 py-2.5 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/RajapakseRKIM_CV.pdf"
                  download="RajapakseRKIM_CV.pdf"
                  onClick={() => {
                    setOpen(false);
                    if (detailsRef.current) detailsRef.current.open = false;
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-black/30 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-500/10 active:scale-[0.99]"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
