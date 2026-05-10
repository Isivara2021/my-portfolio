export type Project = {
  id: number;
  name: string;
  description: string;

  category: "client" | "personal";
  collaboration: "group" | "individual";
  featured: boolean;

  techStack: string[];

  github: string;
  live: string;
  image: string;
};