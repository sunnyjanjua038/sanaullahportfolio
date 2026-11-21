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
  projects: string[];
  tech: string[];
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "a1f9c2d",
    company: "Zie Pie",
    role: "Frontend Developer",
    period: "Dec 2025 — Oct 2026",
    location: "Remote",
    current: false,
    summary:
      "Built production frontends for a bookkeeping product, an education platform and a hotel booking project.",
    projects: ["Bookkeeping App", "FreeTaleem", "HotelOTA"],
    tech: ["React", "Tailwind CSS", "TanStack Query", "REST APIs"],
    points: [
      "Built and shipped features for a bookkeeping web application using React and Tailwind CSS, keeping the UI responsive and consistent across screens",
      "Managed API data fetching, caching and loading/error states with TanStack Query, making frontend logic cleaner and easier to maintain",
      "Developed FreeTaleem, an education web app giving students free access to books (PDFs) and video lessons for all Pakistani boards",
      "Applied the same data-fetching approach on the HotelOTA project using modular, reusable API hooks",
      "Created a library of reusable UI components that sped up development across the product",
    ],
  },
  {
    id: "7be40a1",
    company: "K9 Technologies",
    role: "Frontend Developer Intern",
    period: "Sep 2023 — Jun 2024",
    current: false,
    summary: "Internship focused on React.js and e-commerce interfaces built from Figma designs.",
    projects: ["E-commerce Website"],
    tech: ["React.js", "Tailwind CSS", "Figma", "Git"],
    points: [
      "Led development of an e-commerce website in React.js and Tailwind CSS, implemented pixel-accurate from a Figma design",
      "Independently built and published multiple React projects on GitHub",
      "Strengthened skills in component architecture, responsive layouts and Git workflow",
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
    id: "hotelota",
    name: "HotelOTA",
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

export type LiveProject = {
  id: string;
  name: string;
  kind: string;
  description: string;
  highlights: string[];
  url: string;
  image: string;
};

// Deployed client & personal projects (screenshots in /public/projects).
export const liveProjects: LiveProject[] = [
  {
    id: "careerai",
    name: "CareerAI",
    kind: "AI SaaS Platform",
    description:
      "AI-powered career platform that helps job seekers build ATS-friendly CVs, match with relevant jobs, generate cover letters and practise interviews.",
    highlights: ["AI CV Builder", "Job Matching", "Interview Coach", "Application Tracker"],
    url: "https://careerai-virid.vercel.app/",
    image: "/projects/careerai-virid.webp",
  },
  {
    id: "digitech",
    name: "DigiTech Learning Institute",
    kind: "Education Website",
    description:
      "Website for a coding institute in Kamalia teaching HTML/CSS through React, C#, .NET and SQL — plus a services arm building websites and custom software.",
    highlights: ["Course Catalogue", "Admissions", "Services", "Dark UI"],
    url: "https://digitechlearninginstitute.vercel.app/",
    image: "/projects/digitechlearninginstitute.webp",
  },
  {
    id: "kamalia-business",
    name: "Kamalia Business",
    kind: "Local Business Directory",
    description:
      "A city directory where people discover local shops, restaurants and services, and owners list their business for free with verified profiles.",
    highlights: ["Search & Categories", "Verified Profiles", "Free Listings", "Reviews"],
    url: "https://kamaliabusiness.vercel.app/",
    image: "/projects/kamaliabusiness.webp",
  },
  {
    id: "ittefaq",
    name: "Ittefaq Cooling Centre",
    kind: "Business Website",
    description:
      "Website for an AC, fridge and appliance repair business in Kamalia — services, warranty, branches and one-tap call / repair-request actions.",
    highlights: ["Services", "Warranty", "Branches", "Repair Booking"],
    url: "https://ittefaq-cooling-centre.vercel.app/",
    image: "/projects/ittefaq-cooling-centre.webp",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI/ML", href: "#ai-ml" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
