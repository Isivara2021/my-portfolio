import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFigma,

  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDotnet,

  SiFlutter,
  SiDart,
  SiAndroidstudio,

  SiPython,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiJupyter,
  SiAnaconda,

  SiMongodb,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiCloudinary,
  SiRailway,
  SiRender,
  SiVercel,
  SiNetlify,

  SiGit,
  SiGithub,
  SiDocker,
  SiJetbrains,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const groups = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Figma", icon: SiFigma },
    ],
  },

  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: ".NET", icon: SiDotnet },
      { name: "REST APIs", icon: SiPostman },
    ],
  },

  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },

  {
    title: "AI / Machine Learning",
    items: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Anaconda", icon: SiAnaconda },
    ],
  },

  {
    title: "Databases & Cloud",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Supabase", icon: SiSupabase },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Railway", icon: SiRailway },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },

  {
    title: "Developer Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "VS Code", icon: VscCode },
      { name: "IntelliJ IDEA", icon: SiJetbrains },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

      <Container>
        {/* Header */}
        <div className="mb-14 text-center lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {"// skills"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-cyan-400">Tech Stack</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5">
                <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-cyan-400">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                      >
                        <Icon size={14} className="text-cyan-300" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}