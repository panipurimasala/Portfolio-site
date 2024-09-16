import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate programmer who loves building new applications with more of a niche in integrating AI and ML to these apps.`;

export const ABOUT_TEXT = `I am dedicated coder who loves tinkering with different idease by coding them to life! I enjoy learning new technologies and how different technologies connect together. Outside of coding, I enjoy playing and watching basketball and tennis, working out and playing the piano!`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Software Engineering Intern",
    company: "Optum",
    description: `Worked with team to create an application that mainly classifies and provides reasonings for the classifications using generative AI. Tested, containerized and deployed into production. `,
    technologies: ["React.js", "Azure OpenAI", "Langchain", 'GCP', "SQL", "Docker"],
  },
  {
    year: "June 2023 - August 2023",
    role: "Software Engineering Intern",
    company: "Optum",
    description: `Created an computer vision application that solves a big problem in document segmentation. `,
    technologies: ["Yolov8", "pytorch", 'tensorflow', 'Azure', "swagger"],
  },

];

export const PROJECTS = [
  {
    title: "Black Scholes Calculator",
    image: project1,
    description:
      "A fully functional black scholes options pricing calculator with a simple effective UI.",
    technologies: ["Python", "Streamlit", "Pandas"],
    link: "https://blackscholesapp-665ubc4oyfeewtm6p8txlk.streamlit.app/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link: ""
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link:"",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link: "",
  },
];

