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
    image: "/ai-meal.png",
    title: "AI Meal Generator",
    description:
      "An AI Meal Generator that allows users to generate meals based on their preferences.",
    linkURL: "https://ai-meal-maker.vercel.app/",
    githubURL: "https://github.com/devchawla04/AI-Meal-Maker",
    skills: ["REACT JS", "TypeScript", "Tailwind", "Node JS", "PostgressSQL", "Express JS"],
    status: "running",
  },
    {
    id: 3,
    image: "/netflix-clone.png",
    title: "Netflix Clone",
    description:
      "A Netflix Clone that allows users to browse and watch movies Trials and TV shows.",
    linkURL: "https://netflix-clone-c47a8.web.app/",
    githubURL: "https://github.com/devchawla04/Netflix-clone",
    skills: ["REACT JS", "TypeScript", "Tailwind"],
    status: "running",
  },
   {
    id: 3,
    image: "/google-clone.png",
    title: "Google Clone",
    description:
      "A Google Clone that allows users to search and browse the web.",
    linkURL: "https://dev-chawla-google-clone-project.netlify.app/",
    githubURL: "https://github.com/devchawla04/google-clone",
    skills: ["REACT JS", "TypeScript", "Tailwind",],
    status: "running",
  },
  


];

export default projects;
