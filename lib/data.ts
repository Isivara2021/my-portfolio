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

      github: "#",
      live: "#",
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

      github: "#",
      live: "#",
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

      github: "#",
      live: "#",
      image: "/projects/portfolio.png",
    },
  ],
};

export default data;