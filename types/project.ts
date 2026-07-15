export type Project = {
  id: number;
  name: string;
  description: string;

  category: "client" | "personal" | "Assignment";
  collaboration: "group" | "individual";
  featured?: boolean;

  techStack: string[];

  github?: string;
  live?: string;
  image?: string;
};