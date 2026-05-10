"use client";

import { Cpu, Sparkles, Zap, Briefcase, GraduationCap, Layers, Smartphone, Database } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import Image from "next/image";

const highlights = [
  {
    icon: Cpu,
    title: "Full-Stack Development",
    text: "Building scalable web applications using React, Next.js, Node.js, and modern backend systems.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Systems",
    text: "Developing AI-powered systems and integrating machine learning into real products.",
  },
  {
    icon: Zap,
    title: "Performance & UX Focus",
    text: "Focused on fast, responsive, and clean user experiences with modern UI/UX principles.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Creating cross-platform mobile applications with Flutter and modern mobile technologies.",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    text: "Designing secure APIs, managing databases, and building reliable backend infrastructures.",
  },
  {
    icon: Layers,
    title: "Modern Software Architecture",
    text: "Building scalable systems with reusable components and clean code practices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <Container>
        {/* HEADER */}
        <div className="mb-12 text-center lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {"// about me"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building <span className="text-cyan-400">smart systems</span> with
            code & AI
          </h2>
        </div>

        {/* TOP GRID */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="h-56 w-56 overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,245,255,0.4)] sm:h-72 sm:w-72">
                <Image
                  alt="Profile"
                  src="/profile.jpg"
                  fill
                  sizes="(min-width: 640px) 288px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-cyan-500/10 blur-2xl" />
            </div>
          </div>

          {/* ABOUT TEXT */}
          <Reveal className="lg:col-span-8">
            <div className="rounded-2xl border border-cyan-500/20 bg-black/40 p-7 backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                I’m a passionate software developer focused on building modern
                digital experiences through{" "}
                <span className="text-white">full-stack web development</span>,{" "}
                <span className="text-white">AI-powered solutions</span>, and{" "}
                <span className="text-white">
                  mobile application development
                </span>
                .
                <br />
                <br />
                I enjoy creating scalable, user-focused systems with clean
                design, efficient architecture, and modern technologies across
                both frontend and backend development.
                <br />
                <br />
                Currently exploring{" "}
                <span className="text-cyan-400">
                  machine learning, intelligent systems, and modern software
                  architectures
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* EXPERIENCE */}
          <Reveal>
            <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Work Experience
                </h3>
              </div>

              {/* TIMELINE */}
              <div className="space-y-10">
                {/* ITEM 1 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <div className="flex-1 w-px bg-cyan-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2025 - Present</p>
                    <h4 className="text-white font-semibold mt-1">
                      Full Stack Developer
                    </h4>
                    <p className="text-gray-400 text-sm">InventX Solutions</p>

                    <ul className="mt-2 text-sm text-gray-400 list-disc ml-4 space-y-1">
                      <li>Full-stack web & mobile development</li>
                      <li>Implementing DevOps & scalable cloud systems</li>
                    </ul>
                  </div>
                </div>

                {/* ITEM 2 (FIXED) */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />
                    <div className="flex-1 w-px bg-cyan-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2025 - 2026</p>

                    <h4 className="text-white font-semibold mt-1 flex items-center gap-2">
                      Editor
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                        Volunteer
                      </span>
                    </h4>

                    <p className="text-gray-400 text-sm">Flair Club USJ</p>

                    <ul className="mt-2 text-sm text-gray-400 list-disc ml-4 space-y-1">
                      <li>Managed editorial content and publications</li>
                      <li>
                        Supported event coordination and team collaboration
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2022 - 2023</p>
                    <h4 className="text-white font-semibold mt-1">
                      Lead Student Instructor
                    </h4>
                    <p className="text-gray-400 text-sm">SASIP Institute</p>

                    <ul className="mt-2 text-sm text-gray-400 list-disc ml-4 space-y-1">
                      <li>Worked in teaching and student coordination</li>
                      <li>Developed leadership and communication skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* EDUCATION */}
          <Reveal>
            <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>

              {/* TIMELINE */}
              <div className="space-y-10">
                {/* UNI */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <div className="flex-1 w-px bg-cyan-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2023 - Present</p>
                    <h4 className="text-white font-semibold mt-1">
                      BComp (Hons) Software Engineering
                    </h4>
                    <p className="text-gray-400 text-sm">
                      University of Sri Jayewardenepura
                    </p>
                    <div className="mt-2">
                      {" "}
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                        {" "}
                        Faculty of Computing{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>

                {/* A/L */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />
                    <div className="flex-1 w-px bg-cyan-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2021</p>
                    <h4 className="text-white font-semibold mt-1">
                      G.C.E Advanced Level
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Bandaranayake College Gampaha
                    </p>
                    <div className="mt-2">
                      {" "}
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                        {" "}
                        Results: ABC{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>

                {/* O/L */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-400 bg-black" />
                  </div>

                  <div>
                    <p className="text-sm text-cyan-400">2019</p>
                    <h4 className="text-white font-semibold mt-1">
                      G.C.E Ordinary Level
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Bandaranayake College Gampaha
                    </p>
                    <div className="mt-2">
                      {" "}
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                        {" "}
                        Results: 8As & 1S{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h, idx) => (
            <Reveal key={h.title} delay={0.08 * idx}>
              <div className="rounded-2xl border border-cyan-500/20 bg-black/30 p-6 backdrop-blur-xl transition hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_28px_rgba(0,245,255,0.10)] lg:p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400">
                  <h.icon size={20} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {h.title}
                </h3>

                <p className="text-sm text-gray-400">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
