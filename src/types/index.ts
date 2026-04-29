export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githublink: string;
    image: string;
    liveLink?: string;
} 

export interface Blog {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    readingTime: number;
    content: string;
}

export interface Skill {
  name: string;
  icon: string; // Will store the string name of the FaIcon component
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}