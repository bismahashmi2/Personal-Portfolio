import { Project } from "@/types";

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Unit Convertor",
    description:
      "Interactive Streamlit app that provides real-time conversions across categories (length, temperature, time, etc.) in a clean and simple interface",
    technologies: ["Python", "Streamlit"],
    githublink: "https://github.com/bismahashmi2/unit_convertor_project.git",
    image: "/projects/unit convertor.png",
    liveLink: "https://hashmi-hashmi-unit-convertor-project.streamlit.app/"
  },

  {
    id: 2,
    title: "Library Manager",
    description: "A command-line tool to help you manage your books like a pro",
    technologies: ["Python"],
    githublink: "https://github.com/bismahashmi2/library_manager-project.git",
    image: "/projects/library manager.png",
  },

  {
    id: 3,
    title: "CLI Number Guessing Game",
    description:
      "A fantastic number guessing game",
    technologies: ["Typescript", "Node.js"],
    githublink: "https://github.com/bismahashmi2/cli-number-guessing.git",
    image: "/projects/cli-number-guessing game.png",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills",
    technologies: ["Typescript", "Next.js", "Tailwind CSS"],
    githublink: "https://github.com/bismahashmi2/personal-portfolio.git",
    image: "/projects/personal portfolio.png",
  },
];
