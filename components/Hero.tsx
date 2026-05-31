"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20 sm:pt-24"
    >
      {/* ================= BACKGROUND LAYERS ================= */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute left-[10%] top-[25%] h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full bg-cyan-400/20 sm:bg-cyan-400/30 blur-2xl"
        />

        <motion.div
          animate={{ x: [0, -100, 60, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute right-[8%] bottom-[15%] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-purple-400/20 sm:bg-purple-400/30 blur-2xl"
        />
      </div>

      {/* grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-15 sm:opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "120px 120px"],
            rotateX: [60, 65, 60],
            rotateZ: [0, 2, -2, 0],
          }}
          transition={{
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformPerspective: 800,
            transformOrigin: "center",
          }}
          className="h-full w-full 
      bg-[linear-gradient(#00ffff55_1px,transparent_1px),linear-gradient(90deg,#00ffff55_1px,transparent_1px)] 
      bg-[size:40px_40px]"
        />
      </div>

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[
          { left: "10%", size: 3, duration: 4 },
          { left: "25%", size: 2, duration: 5 },
          { left: "40%", size: 4, duration: 3.5 },
          { left: "60%", size: 2, duration: 4.5 },
          { left: "75%", size: 3, duration: 3.8 },
          { left: "88%", size: 2, duration: 5 },
        ].map((p, i) => (
          <motion.span
            key={i}
            animate={{
              y: ["0%", "-120%"],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              scale: [0.7, 1.1, 0.8],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-30px] rounded-full bg-cyan-300"
            style={{
              left: p.left,
              width: `${p.size * 4}px`,
              height: `${p.size * 4}px`,
              boxShadow: "0 0 14px #22d3ee",
              filter: "blur(0.3px)",
            }}
          />
        ))}
      </div>

      {/* ================= 3D SCENE ================= */}
      <div className="absolute inset-0 z-10">
        <HeroScene />
      </div>

      {/* ================= CONTENT ================= */}
      <Container className="relative z-20">
        <div className="mx-auto max-w-5xl text-center px-4 sm:px-0">
          <div
            className="absolute left-1/2 top-[38%] sm:top-[40%] h-[320px] w-[320px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.06), transparent 65%)",
            }}
          />

          {/* badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-black/50 px-4 py-1.5 text-[11px] sm:text-xs text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for internships & projects
          </div>

          {/* name */}
          <div className="relative mb-5 sm:mb-6 overflow-hidden">
            <h1 className="text-3xl sm:text-7xl md:text-8xl font-bold leading-[1.05] sm:leading-[0.95] tracking-tight text-white">
              Isivara <br />
              <span className="text-cyan-400">Mahaushadha</span>
            </h1>
          </div>

          {/* subtitle */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-sm sm:text-lg text-gray-300">
            Software Engineer <span className="text-cyan-400">|</span> Full-Stack Developer <span className="text-purple-400">|</span> AI Enthusiast
          </p>

          {/* ================= BUTTONS (FIXED) ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* PRIMARY BUTTON */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl sm:rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-black transition active:scale-95 sm:hover:-translate-y-1 sm:hover:scale-110"
            >
              {/* shine effect (fixed version) */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-full transition-transform duration-700" />
              </span>

              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowDown size={16} />
              </span>
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-cyan-500/30 bg-black/40 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur transition active:scale-95 sm:hover:scale-110 sm:hover:bg-cyan-500/10"
            >
              Let’s Talk
            </a>
          </div>

          {/* scroll hint */}
          <div className="mt-10 sm:mt-14 text-xs text-gray-500">
            Scroll to explore ↓
          </div>
        </div>
      </Container>
    </section>
  );
}
