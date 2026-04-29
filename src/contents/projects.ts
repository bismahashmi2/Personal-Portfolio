import { Project } from "@/types";

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Physical AI & Humanoid Robotics Textbook",
    description:
      "A spec-driven digital textbook built using Claude Code to structure Physical AI & Humanoid Robotics education.",

    technologies: ["Claude Code", "Docusaurus", "Spec-Kit Plus"],
    githublink: "https://github.com/bismahashmi2/Hackathon-3.git",
    image: "/projects/book project.png",
    liveLink: "https://bismahashmi2.github.io/Hackathon-3"
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built using Next.js and Tailwind CSS to showcase my projects, skills, and development journey.",
    technologies: ["Typescript", "Next.js", "Tailwind CSS"],
    githublink: "https://github.com/bismahashmi2/personal-portfolio.git",
    image: "/projects/personal portfolio.png",
  },

  {
    id: 3,
    title: "Unit Convertor",
    description:
      "Interactive Streamlit app that provides real-time conversions across categories (length, temperature, time, etc.) in a clean and simple interface",
    technologies: ["Python", "Streamlit"],
    githublink: "https://github.com/bismahashmi2/unit_convertor_project.git",
    image: "/projects/unit convertor.png",
    liveLink: "https://hashmi-hashmi-unit-convertor-project.streamlit.app/"
  },
];
