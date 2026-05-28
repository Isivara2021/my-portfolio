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

      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute left-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-cyan-400/30 blur-2xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute right-[10%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-purple-400/30 blur-2xl"
        />
      </div>

      {/* animated grid */}
      {/* 3D animated grid (faster + depth) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
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
            rotateX: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
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

      {/* 3D fast floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[
          { left: "8%", size: 3, duration: 4 },
          { left: "18%", size: 2, duration: 5 },
          { left: "30%", size: 4, duration: 3.5 },
          { left: "45%", size: 2, duration: 4.5 },
          { left: "60%", size: 3, duration: 3.8 },
          { left: "75%", size: 2, duration: 5 },
          { left: "88%", size: 4, duration: 3.2 },
        ].map((p, i) => (
          <motion.span
            key={i}
            animate={{
              y: ["0%", "-140%"],
              x: [0, i % 2 === 0 ? 20 : -20, 0], // slight drift
              scale: [0.6, 1.2, 0.8], // depth illusion
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
              boxShadow: "0 0 14px #22d3ee, 0 0 30px #22d3ee",
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
        <div className="mx-auto max-w-5xl text-center">
          {/* soft aura (static background only) */}
          <div
            className="absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.06), transparent 65%)",
            }}
          />

          {/* badge (STATIC) */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-black/40 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for internships & projects
          </div>

          {/* NAME (STATIC) */}
          <div className="relative mb-6 overflow-hidden">
            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
              Isivara <br />
              <span className="text-cyan-400">Mahaushadha</span>
            </h1>
          </div>

          {/* subtitle (STATIC) */}
          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-300 sm:text-lg">
            Full-Stack Developer <span className="text-cyan-400">|</span> AI
            Enthusiast <span className="text-purple-400">|</span> System Builder
          </p>
          {/* buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 active:scale-95 sm:min-w-[180px] sm:w-auto sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
            >
              {/* animated shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {/* text */}
              <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:tracking-wide">
                View Projects
              </span>

              {/* icon */}
              <ArrowDown
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-12"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-black/30 px-7 py-3 text-sm font-semibold text-cyan-200 backdrop-blur transition-all duration-300 active:scale-95 sm:min-w-[180px] sm:w-auto sm:hover:scale-110 sm:hover:border-cyan-400 sm:hover:bg-cyan-500/10 sm:hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            >
              <span className="transition-all duration-300 group-hover:tracking-wide">
                Let’s Talk
              </span>
            </a>
          </div>

          {/* scroll hint (STATIC) */}
          <div className="mt-14 text-xs text-gray-500">Scroll to explore ↓</div>
        </div>
      </Container>
    </section>
  );
}
