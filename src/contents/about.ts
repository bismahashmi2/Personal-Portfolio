import { Skill, Education } from "@/types";

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: "FaCode",
    items: ["Next.js", "Typescript", "Tailwind CSS", "HTML5 / CSS3", "Node.js"],
  },
  {
    name: "Machine Learning",
    icon: "FaLaptopCode",
    items: ["Python", "OpenAI Agents-SDK", "Prompt Engineering"],
  },
  {
    name: "Tools & Others",
    icon: "FaGraduationCap",
    items: ["Git / Github", "Streamlit", "Chainlit"],
  },
];

export const education: Education[] = [
  {
    degree: "Certified Agentic & Robotics AI Engineering",
    institution: "Governor's Initiative for AI",
    duration: "2024 - Present",
    description: "Currently pursuing. Focusing Prompt & Context Engineering along with latest AI trends.",
  },
];
