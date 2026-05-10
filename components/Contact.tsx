"use client";

import { Github as GitHub, Linkedin as LinkedinIcon, Mail, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/25 to-transparent" />
      <Container>

        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {"// contact"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let’s build <span className="text-cyan-400">something impactful</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base lg:mx-0">
            Open to collaborations, internships, and software opportunities. Let’s connect and create something meaningful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-5 lg:grid-cols-12 lg:gap-10">

          {/* Left Links */}
          <Reveal className="md:col-span-2 lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-24">

              <a
                href="mailto:isivara2021@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_22px_rgba(0,245,255,0.14)]"
              >
                <Mail size={18} className="text-cyan-400" />
                <span className="break-all text-sm text-gray-300">isivara2021@gmail.com</span>
              </a>

              <a
                href="https://github.com/Isivara2021"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_22px_rgba(0,245,255,0.14)]"
              >
                <GitHub size={18} className="text-cyan-400" />
                <span className="text-sm text-gray-300">GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/isivara-rajapakse-2b5278312/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-[0_0_22px_rgba(0,245,255,0.14)]"
              >
                <LinkedinIcon size={18} className="text-cyan-400" />
                <span className="text-sm text-gray-300">LinkedIn Profile</span>
              </a>

            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08} className="md:col-span-3 lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="space-y-4 rounded-2xl border border-cyan-500/20 bg-black/40 p-6 backdrop-blur-xl transition hover:shadow-[0_0_34px_rgba(0,245,255,0.10)] lg:p-8"
            >

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-cyan-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />

              <input
                required
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-cyan-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-cyan-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              {sent ? "Message sent ✓" : "Send message"}
              <Send size={14} />
            </button>

            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
