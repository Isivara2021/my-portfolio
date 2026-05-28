import type { Project } from "@/types/project";

const data: { projects: Project[] } = {
  projects: [
    {
      id: 1,
      name: "Chelinko Website",
      description:
        "Modern full-stack web platform built for Chelinko with responsive UI, scalable architecture, and optimized performance for real-world usage.",

      category: "client",
      collaboration: "individual",
      featured: true,

      techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],

      github: "https://github.com/Isivara2021/chelinko-frontend",
      live: "https://chelinko-frontend.vercel.app",
      image: "/projects/chelinko.png",
    },
    {
      id: 2,
      name: "ISIRO Steel Website",
      description:
        "Full-stack MERN platform with admin dashboard for managing products, gallery, and business operations.",

      category: "client",
      collaboration: "individual",
      featured: true,

      techStack: ["MongoDB", "Express", "React", "Node.js"],

      github: "https://github.com/Isivara2021/isiro-steel-frontend",
      live: "https://isiro-steel-frontend.onrender.com/",
      image: "/projects/isiro.png",
    },
    {
      id: 3,
      name: "Portfolio System",
      description:
        "Modern developer portfolio built with Next.js, featuring glassmorphism UI, smooth animations, and responsive design.",

      category: "personal",
      collaboration: "individual",
      featured: false,

      techStack: ["Typescript","Next.js", "Tailwind", "UI/UX"],

      github: "https://github.com/Isivara2021/my-portfolio",
      live: "#",
      image: "/projects/portfolio.png",
    },
    {
      id: 4,
      name: "Skill Finder Mobile App",
      description:
        "Mobile application for finding and connecting with skilled professionals, built with Flutter and Firebase.",

      category: "client",
      collaboration: "group",
      featured: false,

      techStack: ["Flutter","Firebase", "Dart"],

      github: "https://github.com/Isivara2021/skill_finder_mobile_app_for_a_client",
      live: "#",
      image: "/projects/skillfinder.jpeg",
    },
    {
      id: 5,
      name: "AI Enabled Trade Outcome Prediction Mobile App",
      description:
        "Mobile application for finding and connecting with skilled professionals, built with Flutter and Firebase.",

      category: "personal",
      collaboration: "individual",
      featured: false,

      techStack: ["Flutter","MySQL", "Dart"],

      github: "https://github.com/Isivara2021/trade_analyzer_demo",
      live: "#",
      image: "/projects/tradeanalyzer.png",
    },
  ],
};

export default data;