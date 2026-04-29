import { Skill, Education } from "@/types";

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: "FaCode",
    items: ["Next.js", "Typescript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: "AI & Development Workflows",
    icon: "FaLaptopCode",
    items: ["Generative AI", "Prompt Engineering", "AI-Powered Development", "Specification-Driven Development", "OpenAI Agents-SDK"],
  },
  {
    name: "Tools & Others",
    icon: "FaGraduationCap",
    items: ["Claude Code", "Gemini CLI", "Docusaurus", "Git / Github", "Streamlit"],
  },
];

export const education: Education[] = [
  {
    degree: "Certified Agentic & Robotics AI Engineering",
    institution: "Governor's Initiative for AI",
    duration: "2024 - Present",
    description: "Focused on Agentic AI systems, prompt engineering and AI-assisted software development workflows with hands-on project experience in building structured AI-driven applications.",
  },
];
