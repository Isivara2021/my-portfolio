"use client";

import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;

  category: "client" | "personal";
  collaboration: "group" | "individual";
  featured?: boolean;

  techStack: string[];

  github?: string;
  live?: string;
  image?: string;
};

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-500/10 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_46px_rgba(0,245,255,0.14)]">

      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* COVER IMAGE */}
      {project.image && (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 lg:p-7">

        {/* TOP BAR */}
        <div className="mb-5 flex items-start justify-between">
          <span className="font-mono text-xs text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500/20 p-2 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Github size={14} />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-500/20 p-2 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {/* TITLE */}
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-300">
          {project.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-5 flex-1 text-sm text-gray-400">
          {project.description}
        </p>

        {/* PROJECT TYPE BADGES */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-300 capitalize">
            {project.category}
          </span>

          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-300 capitalize">
            {project.collaboration}
          </span>

          {project.featured && (
            <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-300">
              featured
            </span>
          )}
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-1 text-[11px] text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}