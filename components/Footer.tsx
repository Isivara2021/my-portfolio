import Container from "@/components/Container";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-14">
      <Container>
        {/* Neon divider */}
        <div
          className="mb-8 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,255,0.4), rgba(0,200,255,0.6), transparent)",
          }}
        />

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-base font-bold"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.8)]" />
              <span className="neon-text">isivara.dev</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              Full-stack developer focused on building clean, high-performance
              web apps with modern UI, reliable systems, and thoughtful UX.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              {"// quick links"}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 transition hover:text-cyan-200"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              {"// connect"}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              For collaborations, internships, or opportunities, reach out via
              email or connect on socials.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:isivara2021@gmail.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/15 bg-black/30 text-cyan-200 backdrop-blur transition hover:border-cyan-400/35 hover:bg-cyan-500/10"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/Isivara2021"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/15 bg-black/30 text-cyan-200 backdrop-blur transition hover:border-cyan-400/35 hover:bg-cyan-500/10"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/isivara-rajapakse-2b5278312/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/15 bg-black/30 text-cyan-200 backdrop-blur transition hover:border-cyan-400/35 hover:bg-cyan-500/10"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <div className="mt-5">
              <a
                href="/RajapakseRKIM_CV.pdf"
                download="RajapakseRKIM_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-black/30 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.10)]"
              >
                Download CV <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cyan-500/10 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          {/* Left */}
          <p>
            © {new Date().getFullYear()} Isivara Mahaushadha. All rights
            reserved.
          </p>

          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs text-cyan-400">
              v1.0 — system active
            </p>

            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/15 bg-black/30 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur transition hover:border-cyan-400/35 hover:bg-cyan-500/10"
            >
              <ArrowUp size={14} />
              Top
            </a>
          </div>
        </div>

        {/* Small glow accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-cyan-500 blur-sm opacity-60" />
        </div>
      </Container>
    </footer>
  );
}
