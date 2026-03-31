interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  linkURL?: string;
  githubURL: string;
  status: "building" | "running" | "discontinued";
  skills: string[];
}

const projects: Project[] = [
  {
    id: 1,
    image: "/code-arena.png",
    title: "Code Arena",
    description:
      "A Coding platform that allows users to Code and Practice Coding Problems.",
    linkURL: "https://codearena-sepia.vercel.app/",
    githubURL: "https://github.com/devchawla04/Code-Arena",
    skills: ["REACT JS", "TypeScript", "Tailwind", "Node JS", "MongoDB", "Express JS"],
    status: "running",
  },
    {
    id: 2,
    image: "/netflix-clone.png",
    title: "Netflix Clone",
    description:
      "A Netflix Clone that allows users to browse and watch movies Trials and TV shows.",
    linkURL: "https://netflix-clone-c47a8.web.app/",
    githubURL: "https://github.com/devchawla04/Netflix-clone",
    skills: ["REACT JS", "TypeScript", "Tailwind"],
    status: "running",
  },


];

export default projects;
