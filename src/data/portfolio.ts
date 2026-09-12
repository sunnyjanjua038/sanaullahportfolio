// ─────────────────────────────────────────────────────────
// Portfolio content — single source of truth.
// Every field here is drawn directly from information the
// user provided (resume: Sana_Ullah_CV.pdf). Nothing invented:
// no fake stats, no fake links, no fake certifications.
// ─────────────────────────────────────────────────────────

export const personal = {
  name: "Sana Ullah",
  title: "Frontend Developer",
  subtitles: ["React.js / Next.js Developer", "AI/ML Enthusiast"],
  tagline:
    "Frontend developer skilled in React.js and Next.js, with hands-on experience building responsive, user-friendly web interfaces using Tailwind CSS and TypeScript. Currently expanding into backend development to grow into a full-stack role, alongside practical experience fine-tuning LLMs and building RAG systems.",
  email: "sanaullah027027@gmail.com",
  phone: "+92 301 7919027",
  phoneHref: "tel:+923017919027",
  emailHref: "mailto:sanaullah027027@gmail.com",
  location: "Lahore, Pakistan",
  cvPath: "/Sanaullah-CV.pdf",
  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/sana-ullah-4a82b01gb",
  },
};

export const focusAreas = {
  primary: {
    label: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI development",
      "API integration",
      "Modern web application development",
    ],
  },
  secondary: {
    label: "AI/ML & LLM Development",
    items: [
      "LLM fine-tuning (Qwen2.5, Mistral-7B)",
      "Unsloth & Hugging Face",
      "RAG systems",
      "Ollama local deployment",
    ],
  },
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Bootstrap", "SASS", "Responsive Web Design"],
  },
  {
    title: "Frontend Tools & Workflow",
    skills: ["React Hooks", "Axios", "TanStack React Query", "Git / GitHub", "Figma-to-Code"],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      "LLM Fine-tuning",
      "Qwen2.5",
      "Mistral-7B",
      "Unsloth",
      "Hugging Face",
      "RAG (Retrieval-Augmented Generation)",
      "Ollama (Local Deployment)",
    ],
  },
];

export const aiMl = {
  title: "AI & Machine Learning",
  summary:
    "Alongside frontend development, I have hands-on, practical experience fine-tuning large language models and building retrieval-augmented systems — including an offline AI tutoring platform built by fine-tuning open-source models for local deployment.",
  capabilities: [
    "LLM fine-tuning (Qwen2.5, Mistral-7B)",
    "Unsloth training workflows",
    "Hugging Face ecosystem",
    "RAG (Retrieval-Augmented Generation) systems",
    "Ollama for local model deployment",
    "Dataset preparation for fine-tuning",
  ],
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  current: boolean;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "a1f9c2d",
    company: "Zie Pie",
    role: "Frontend Developer",
    period: "Dec 2025 — Present",
    location: "Remote",
    current: true,
    summary: "Building the frontend of the Zie Pie bookkeeping application.",
    points: [
      "Developed features for the Zie Pie bookkeeping application using React and JavaScript, focusing on responsive, user-friendly interfaces",
      "Implemented layouts and styling with Tailwind CSS, ensuring consistent design and modern UI components across the product",
      "Used TanStack React Query to manage client-side data fetching and state, improving the clarity and maintainability of frontend logic",
      "Applied TanStack React Query on the HotalOTA project to handle API interactions and asynchronous data, contributing to cleaner, more modular code",
    ],
  },
  {
    id: "7be40a1",
    company: "K9 Technologies",
    role: "Frontend Developer Intern",
    period: "Sep 2023 — Jun 2024",
    current: false,
    summary: "Eight-month internship focused on React.js and e-commerce interfaces.",
    points: [
      "Completed an eight-month internship specializing in React.js development",
      "Led development of an e-commerce website using React.js and Tailwind CSS, from a design meticulously built in Figma",
      "Independently designed and built multiple React.js projects, pushing them to GitHub for collaboration and portfolio showcase",
      "Strengthened proficiency in React.js and broadened overall frontend development expertise",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  category: "frontend" | "ai";
};

export const projects: Project[] = [
  {
    id: "zie-pie",
    name: "Zie Pie",
    description:
      "Bookkeeping web application. Built responsive frontend features and reusable UI components with React.js, Tailwind CSS, and TanStack React Query for API data flows.",
    tags: ["React.js", "Tailwind CSS", "TanStack React Query"],
    category: "frontend",
  },
  {
    id: "hotalota",
    name: "HotalOTA",
    description:
      "Applied TanStack React Query to handle API interactions and asynchronous data, contributing cleaner and more modular frontend code to the project.",
    tags: ["React.js", "TanStack React Query"],
    category: "frontend",
  },
  {
    id: "k9-ecommerce",
    name: "E-Commerce Platform — K9 Technologies",
    description:
      "E-commerce website built during an internship, converting Figma designs into responsive React.js interfaces styled with Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "Figma"],
    category: "frontend",
  },
  {
    id: "pet-gallery",
    name: "Pet Gallery — Final Year Project",
    description:
      "University final year project: a fully responsive website built using React.js.",
    tags: ["React.js"],
    category: "frontend",
  },
  {
    id: "personal-practice",
    name: "Personal Practice Projects",
    description:
      "A set of independent React.js projects built to sharpen frontend skills: a Shopping App, World News App, Image Gallery, Cooling Center website, and Weather App.",
    tags: ["React.js"],
    category: "frontend",
  },
  {
    id: "math-ai-teacher",
    name: "Offline AI Tutoring Platform",
    description:
      "Offline AI tutoring platform for 9th-grade physics (Punjab Board curriculum), built by fine-tuning Qwen2.5 and Mistral-7B with Unsloth and Hugging Face on Google Colab.",
    tags: ["Qwen2.5", "Mistral-7B", "Unsloth", "Hugging Face"],
    category: "ai",
  },
];

export type EducationItem = {
  degree: string;
  institution?: string;
  year: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    degree: "BS Software Engineering",
    institution: "Minhaj University Lahore",
    year: "2023",
    details:
      "Object-Oriented Programming, Programming Fundamentals, Visual Programming, Web Development, Cloud Computing, ICT",
  },
  {
    degree: "ICS — Intermediate in Computer Science",
    year: "2019",
    details: "Computer Science, Physics, Mathematics",
  },
  {
    degree: "Matriculation",
    year: "2016",
    details: "Computer Science, Physics, Chemistry, Mathematics",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI/ML", href: "#ai-ml" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
