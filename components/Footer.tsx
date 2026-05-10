import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="relative py-10">
      <Container>

        {/* Neon divider */}
        <div
          className="mb-8 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,255,0.4), rgba(0,200,255,0.6), transparent)",
          }}
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row sm:text-sm">

          {/* Left */}
          <p>
            © {new Date().getFullYear()} Isivara Mahaushadha. All rights reserved.
          </p>

          {/* Right */}
          <p className="font-mono text-xs text-cyan-400">
            v1.0 — system active
          </p>

        </div>

        {/* Small glow accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-cyan-500 blur-sm opacity-60" />
        </div>
      </Container>
    </footer>
  );
}
