export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  BOOTSTRAP = "bootstrap",
  GIT = "git",
  GITHUB = "github",
  FIGMA = "figma",
  JAVA = "java",
  CSHARP = "csharp",
  SQL = "sql",
  FIREBASE = "firebase",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: {
    id: 1,
    name: "html",
    label: "HTML5",
    shortDescription:
      "I use HTML to build the structure and semantic foundation of web pages.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 2,
    name: "css",
    label: "CSS3",
    shortDescription:
      "I use CSS to create responsive layouts, animations, and clean user interfaces.",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "I use JavaScript to add interactivity, DOM manipulation, and dynamic behavior to websites.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 4,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "I use TypeScript to write safer, clearer, and more maintainable JavaScript code.",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription:
      "I use React to build reusable components and modern frontend user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "I use Next.js to build fast React applications with routing, pages, and optimized performance.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "I use Tailwind CSS to quickly create modern, responsive, and consistent interfaces.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.BOOTSTRAP]: {
    id: 8,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription:
      "I use Bootstrap to build responsive layouts and common UI components efficiently.",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },

  [SkillNames.GIT]: {
    id: 9,
    name: "git",
    label: "Git",
    shortDescription:
      "I use Git to manage source code versions and track project changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 10,
    name: "github",
    label: "GitHub",
    shortDescription:
      "I use GitHub to store projects, manage repositories, and collaborate with teammates.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.FIGMA]: {
    id: 11,
    name: "figma",
    label: "Figma",
    shortDescription:
      "I use Figma to design UI layouts, wireframes, and web app prototypes before coding.",
    color: "#a259ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  [SkillNames.JAVA]: {
    id: 12,
    name: "java",
    label: "Java",
    shortDescription:
      "I use Java to practice object-oriented programming and build school projects.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  [SkillNames.CSHARP]: {
    id: 13,
    name: "csharp",
    label: "C#",
    shortDescription:
      "I use C# to practice OOP concepts and build management system exercises.",
    color: "#68217a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },

  [SkillNames.SQL]: {
    id: 14,
    name: "sql",
    label: "SQL",
    shortDescription:
      "I use SQL to design databases, query data, and work with relational database systems.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 15,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "I use Firebase for simple authentication, database, and hosting features in web apps.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.VERCEL]: {
    id: 16,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "I use Vercel to deploy frontend projects and Next.js applications quickly.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Light mode is on. Clean, bright, and ready to build.",
    "Switching to light mode for a clearer workspace.",
    "Light mode activated. Keep your UI clean and focused.",
    "Bright mode enabled. Good for reading and reviewing details.",
    "Light mode is ready. Simple, minimal, and productive.",
  ],
  dark: [
    "Dark mode activated. Perfect for coding sessions.",
    "Back to dark mode. Cleaner focus, less eye strain.",
    "Dark mode is on. Time to build something cool.",
    "Welcome back to the dark side of development.",
    "Dark mode enabled. Your portfolio looks sharper now.",
  ],
};