import React from 'react';
import { 
  Monitor, Server, Database, Globe, 
  Layout, Cpu, Settings, Github, 
  Terminal, Layers, Code, HardDrive,
  Shield, Zap, Chrome, Bot, Brain, Sparkles, Workflow
} from 'lucide-react';
import resume from './assets/images-all/resume2.png';
import certificate1 from './assets/images-all/Petros-Asmamaw-Udemy-Certificate.jpg';
import certificate2 from './assets/images-all/PetrosAsmamawReact.jpg';
import HAdmin from './assets/images-all/HAdmin.png';
import hotel from './assets/images-all/hotel.png';
import client from './assets/images-all/client.png';
import foodweb from './assets/images-all/foodweb.png';
import foodadmin from './assets/images-all/foodadmin.png';

import shopping from './assets/images-all/shopping.png';
import admin from './assets/images-all/admin.png';
import game from './assets/images-all/game.png';
import notertk from './assets/images-all/note-rtk.png';
import movieSearching from './assets/images-all/movie.png';
import car from './assets/images-all/car.png';
import notesApp from './assets/images-all/notes.png';
import college from './assets/images-all/college.png';
import quiz from './assets/images-all/quiz.png';
import portfolio from './assets/images-all/portfolio.png';
import hospitalAdmin from './assets/images-all/hospitalAdmin.png';
import hospitalPatient from './assets/images-all/hospitalPatient.png';
import hospitalDoctor from './assets/images-all/hospitalDoctor.png';
import qandliai1 from './assets/images-all/qandliai1.png';
import qandliai2 from './assets/images-all/qandliai2.png';
import qandliai3 from './assets/images-all/qandliai3.png';
import qandliai4 from './assets/images-all/qandliai4.png';
import qandliai5 from './assets/images-all/qandliai5.png';


export const EXPERTISE_CARDS = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
    tech: "HTML, CSS, JavaScript, React,next.js, Tailwind CSS",
    description: "Craft pixel-perfect, responsive interfaces with accessible React and Tailwind workflows."
  },
  {
    title: "Backend Development",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    tech: "Node.js, Express.js REST APIs, Authentication",
    description: "Build secure, scalable APIs and services using Node.js, Express, and best practices."
  },
  {
    title: "Database Management",
    icon: <HardDrive className="w-8 h-8 text-emerald-400" />,
    tech: "MongoDB / SQL databases, Supabase, Airtable",
    description: "Design resilient, high-performance data models and queries for scalable applications."
  },
  {
    title: "Deployment & Hosting",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    tech: "Vercel, Netlify, Render, Cloud services",
    description: "Optimize CI/CD, deployments, and performance for fast, reliable production experiences."
  }
];

export const AI_POWERED_APPLICATIONS = [
  {
    title: 'AI Content Assistant',
    tech: 'LLM Integration',
    description:
      'Built smart writing workflows with prompt engineering, response refinement, and reusable templates for faster content production.',
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: 'Conversational Chat App',
    tech: 'Chatbot UX',
    description:
      'Designed context-aware chat interfaces with session memory, clear fallback flows, and user-friendly prompt handling.',
    icon: <Bot className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'AI Search & Insights',
    tech: 'Semantic Search',
    description:
      'Implemented intelligent retrieval patterns to surface relevant information quickly using embeddings and ranking strategies.',
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: 'Automation Pipelines',
    tech: 'Agent Workflows',
    description:
      'Created AI-powered automation chains to connect tools, summarize outputs, and streamline repetitive product operations.',
    icon: <Workflow className="w-6 h-6 text-fuchsia-400" />,
  },
];

export const SKILL_GROUPS = [
  {
    title: "💻 Frontend",
    skills: [
      { name: "HTML5", icon: "html5", desc: "Semantic structure" },
      { name: "CSS3", icon: "css3", desc: "Styling & layout", iconComponent: <Code className="w-6 h-6 text-indigo-400" /> },
      { name: "Responsive Web Design", icon: "responsive", desc: "Mobile-first approach" },
      { name: "Tailwind CSS", icon: "tailwindcss", desc: "Utility-first CSS framework" },
      { name: "JavaScript", icon: "javascript", desc: "Dynamic logic" },
      { name: "React.js", icon: "react", desc: "Component-driven UI library" },
      { name: "Redux", icon: "redux", desc: "State management" },
      { name: "Next.js", icon: "nextdotjs", desc: "React framework & SSR" }
    ]
  },
  {
    title: "⚙️ Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs", desc: "Server-side JS", iconComponent: <Cpu className="w-6 h-6 text-green-400" /> },
      { name: "Express.js", icon: "express", desc: "Web application framework" },
      { name: "REST APIs", icon: "postman", desc: "RESTful architecture" },
      { name: "API Development", icon: "fastapi", desc: "Backend services" }
    ]
  },
  {
    title: "🗄️ Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", desc: "NoSQL document database", iconComponent: <HardDrive className="w-6 h-6 text-green-500" /> },
      { name: "PostgreSQL", icon: "postgresql", desc: "Relational database" },
      { name: "Supabase", icon: "supabase", desc: "Backend-as-a-service" },
      { name: "Airtable", icon: "airtable", desc: "Low-code database platform" }
    ]
  },
  {
    title: "🔐 Authentication & Security",
    skills: [
      { name: "Authentication & Authorization", icon: "auth0", desc: "User access control", iconComponent: <Shield className="w-6 h-6 text-blue-400" /> },
      { name: "JSON Web Tokens (JWT)", icon: "jwt", desc: "Secure token-based auth" },
      { name: "Supabase Auth", icon: "supabase", desc: "Modern auth solution" },
      { name: "Better Auth", icon: "auth0", desc: "Flexible auth framework" }
    ]
  },
  {
    title: "🧠 AI / Modern Tech",
    skills: [
      { name: "AI Application Development", icon: "openai", desc: "AI integration", iconComponent: <Zap className="w-6 h-6 text-yellow-400" /> },
      { name: "Generative AI Integration", icon: "openai", desc: "AI-powered features" },
      { name: "LLM APIs (Gemini API)", icon: "google", desc: "Large language models" },
      { name: "Prompt Engineering", icon: "openai", desc: "AI optimization" }
    ]
  },
  {
    title: "🛠 DevOps & Tools",
    skills: [
      { name: "Git", icon: "git", desc: "Version control system" },
      { name: "GitHub", icon: "github", desc: "Code repository hosting" },
      { name: "Vercel", icon: "vercel", desc: "Deployment platform" },
      { name: "Netlify", icon: "netlify", desc: "Hosting & deployment" },
      { name: "Debugging", icon: "devto", desc: "Error resolution" },
      { name: "Chrome DevTools", icon: "googlechrome", desc: "Browser debugging", iconComponent: <Monitor className="w-6 h-6 text-slate-300" /> }
    ]
  }
];

export const CERTIFICATES = [
  {
    title: "My Professional Resume",
    image: resume,
    desc: "A comprehensive look at my professional journey.",
    url: "#"
  },
  {
    title: "Full-Stack Web Certification",
    image: certificate1,
    desc: "Advanced mastery in modern web architectures.",
    url: "#"
  },
  {
    title: "React Specialist Certificate",
    image: certificate2,
    desc: "Certification for deep expertise in React ecosystem.",
    url: "#"
  }
];

export const FULLSTACK_PROJECTS = [
  {
    id: 0,
    type: 'Web',
    image: { src: qandliai1, alt: 'qandil ai platform' },
    imageGallery: [
      { src: qandliai1, alt: 'qandil ai home and features' },
      { src: qandliai2, alt: 'qandil ai personalized tools' },
      { src: qandliai3, alt: 'qandil ai learning workflow' },
      { src: qandliai4, alt: 'qandil ai dashboard and profile' },
      { src: qandliai5, alt: 'qandil ai ai-tools experience' },
    ],
    title: 'Qandil AI - Personalized Learning Assistant Platform',
    description:
      'Qandil AI is a full-stack educational platform designed to personalize how students learn based on profile data, study goals, and current understanding level. The product combines AI Assistance, document-to-notes generation, assignment guidance, and image/document analysis in one guided learning environment. It uses dynamic profile-driven prompting, bilingual/translated UI flows, and persistent chat history so learners can track progress over time. Built with modern React/Next architecture, Redux-powered state management, and integrated backend services for scalable, real-world student support.',
    tags: ['Next.js', 'React', 'Redux Toolkit', 'Supabase', 'Node.js', 'MongoDB', 'AI Integration', 'Prompt Engineering', 'Multilingual UX', 'Tailwind/CSS'],
    liveLinks: [
      { label: 'Live Demo', url: 'https://qandil-ai-dep.vercel.app/' },
    ],
    repoLinks: [
      { label: 'GitHub Repo', url: 'https://github.com/petrosasmamaw/Qandil_Ai.git' },
    ],
  },
  {
    id: 1,
    type: 'Web',
    image: { src: hospitalAdmin, alt: 'hospital ecosystem dashboard suite' },
    imageGallery: [
      { src: hospitalPatient, alt: 'hospital patient dashboard' },
      { src: hospitalDoctor, alt: 'hospital doctor dashboard' },
      { src: hospitalAdmin, alt: 'hospital admin dashboard' },
    ],
    title: 'Hospital Management Ecosystem (Patient, Doctor, Admin)',
    description:
      'A complete healthcare product ecosystem built with MERN and delivered through three connected applications. The Patient app focuses on appointments, reservations, and personal follow-up workflows; the Doctor app supports day-to-day clinical flow, patient updates, and reporting; and the Admin app manages staff, inventory, system operations, and platform governance. Shared authentication, protected routes, centralized Redux state, and reusable APIs keep all portals synchronized and production-ready.',
    tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS'],
    liveLinks: [
      { label: 'Patient', url: 'https://hospital-system-patients.vercel.app/' },
      { label: 'Doctor', url: 'https://hospital-system-doctors.vercel.app/' },
      { label: 'Admin', url: 'https://hospital-system-admin.vercel.app/' },
    ],
    repoLinks: [
      { label: 'Patient Repo', url: 'https://github.com/petrosasmamaw/Hospital-System-Patients.git' },
      { label: 'Doctor Repo', url: 'https://github.com/petrosasmamaw/Hospital-System-Doctors.git' },
      { label: 'Admin Repo', url: 'https://github.com/petrosasmamaw/Hospital-System-Admin.git' },
    ],
  },
  {
    id: 2,
    type: 'Web',
    image: { src: HAdmin, alt: 'bahiroom suite dashboard' },
    imageGallery: [
      { src: client, alt: 'bahiroom client dashboard' },
      { src: hotel, alt: 'bahiroom hotel dashboard' },
      { src: HAdmin, alt: 'bahiroom admin dashboard' },
    ],
    title: 'BahiRoom Booking Ecosystem (Client, Hotel, Admin)',
    description:
      'A multi-portal room-booking ecosystem composed of three focused applications that work as one platform. The Client app provides property discovery, booking, and reservation tracking; the Hotel app gives each property team tools for managing listings, availability, and operational insights; and the Admin app handles global moderation, user controls, and system-wide management. The stack is powered by MERN architecture, shared authentication, modular APIs, and scalable Redux state flows for reliable performance across roles.',
    tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS'],
    liveLinks: [
      { label: 'Client', url: 'https://bahi-room-client-frontend.vercel.app/' },
      { label: 'Hotel', url: 'https://bahi-room-hotel-frontend.vercel.app/' },
      { label: 'Admin', url: 'https://bahi-room-admin-frontend.vercel.app/' },
    ],
    repoLinks: [
      { label: 'Client Repo', url: 'https://github.com/petrosasmamaw/BahiRoom-Client-Frontend.git' },
      { label: 'Hotel Repo', url: 'https://github.com/petrosasmamaw/BahiRoom-Hotel-Frontend.git' },
      { label: 'Admin Repo', url: 'https://github.com/petrosasmamaw/BahiRoom-Admin-Frontend.git' },
    ],
  },
  {
    id: 3,
    type: 'Web',
    image: { src: foodweb, alt: 'food delivery client and admin' },
    imageGallery: [
      { src: foodweb, alt: 'food delivery client view' },
      { src: foodadmin, alt: 'food delivery admin dashboard' },
      { src: foodweb, alt: 'food ordering experience' },
    ],
    title: 'Food Delivery Platform (Client + Admin)',
    description:
      'A full food-delivery platform implemented as two coordinated experiences: a client-facing ordering application and an admin operations dashboard. Customers can browse restaurants, manage carts, and place orders through a responsive interface, while the admin side handles menu CRUD, order flow oversight, and operational control. Built with secure authentication, React Router navigation, Redux Toolkit state management, and REST-driven APIs to support real-world product workflows.',
    tags: ['MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Stripe', 'Axios', 'Responsive', 'Tailwind/CSS'],
    liveLinks: [
      { label: 'Client', url: 'https://food-delivering-client-frontend-9jd.vercel.app/' },
      { label: 'Admin', url: 'https://food-delivery-admin-frontend-beta.vercel.app/' },
    ],
    repoLinks: [
      { label: 'Client Repo', url: 'https://github.com/petrosasmamaw/Food-Delivering-Client-Frontend.git' },
      { label: 'Admin Repo', url: 'https://github.com/petrosasmamaw/Food-Delivery-Admin-Frontend.git' },
    ],
  }
];

export const REACT_PROJECTS = [
  {   
    id: 1,
    type: 'Web',
    image: { src: shopping, alt: 'petershop' },
    title: 'Shopping -site',
    description: 'Peter-Shop is a modern React e-commerce experience where users can browse products, explore details, add items to cart, and interact through comments. The interface is built for speed and clarity with clean navigation and responsive layouts across devices. Guests can discover and explore freely, while authenticated users get personalized cart behavior and richer account-aware interactions that make the shopping flow more practical and engaging.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
    viewDetailsLink: 'https://peteshopping-web-fully-structured-new.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Shopping-Web-Fully-Structured-new.git',
  },
  {   
    id: 2,
    type: 'Web',
    image: { src: admin, alt: 'petershop' },
    title: 'Shopping-admin-dashboard',
    description: 'Peter-Shop Admin Dashboard is a React-based control center designed to run day-to-day store operations efficiently. It supports product CRUD workflows, comment moderation, and visibility into user and cart behavior through a clean, task-focused UI. Data remains synchronized via Supabase and Airtable integrations, giving administrators reliable control, faster decision-making, and a smoother operational process for managing the full storefront lifecycle.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
    viewDetailsLink: 'https://peter-shopping-web-admin-dashboar.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/shopping-web-admin-dashboard-fully-structured.git',
  },
  {
    id: 3,
    type: 'Web',
    image: { src: game, alt: 'game discover' },
    title: 'Game-Discover',
    description: 'Game-Discover is a React gaming hub that helps users browse titles, view details, leave feedback, and curate favorites in one streamlined interface. The product emphasizes discoverability, smooth transitions, and clear interaction patterns so users can quickly move from exploration to engagement. With a clean visual system and responsive behavior, it provides an enjoyable experience for both casual browsing and deeper game tracking.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit', 'axios','react router'],
    viewDetailsLink: 'https://petros-game-discovery.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Game-discovery-.git',
  },
  {
    id: 4,
    type: 'Web',
    image: { src: notertk, alt: 'note taking app' },
    title: 'Updated Create Note',
    description: 'Updated Create Note is a modernized note application that was upgraded with Supabase authentication and persistent database capabilities, then migrated from Context API to Redux Toolkit for more scalable state management. The refactor improves performance, maintainability, and feature growth by centralizing key app logic and user state. The result is a cleaner developer architecture and a more reliable user experience for secure, personalized note management.',
    tags: ['HTML5', 'CSS',  'React', 'Redux-toolkit','supabase auth','supabase db'],
    viewDetailsLink: 'https://create-note-authentication.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Create-note-with-supbase-authentication.git',
  },
  {
    id: 5,
    type: 'Web',
    image: { src: movieSearching, alt: 'Movie Searching' },
    title: 'Movie-searching',
    description: 'Movie Searching is a responsive React application focused on fast title discovery and clean content browsing. Users can search and review movie information through an intuitive layout designed for both desktop and mobile usage. The product highlights simplicity, visual clarity, and speed, making it easy to explore content without friction.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React' ,'API' ,'context'],
    viewDetailsLink: 'https://petros-asmamaw-projects-1.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/petros-asmamaw-movie-searching.git',
  },
  {
    id: 6,
    type: 'Web',
    image: { src: car, alt: 'car slider app' },
    title: 'The-car-slider',
    description: 'The Car Slider is a responsive React + Vite project focused on interactive image navigation with smooth transition behavior. It demonstrates polished carousel mechanics, clean component structure, and user-friendly controls for browsing visual content. The interface is intentionally simple, highlighting motion quality, usability, and strong responsiveness across different screen sizes.',
    tags: ['HTML5', 'CSS', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-car-slider.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/The-Car-Slide.git',
  },
  {
    id: 8,
    type: 'Web',
    image: { src: college, alt: 'college app' },
    title: 'College-web',
    description: 'College Web is a fully responsive React website designed to serve students, faculty, and visitors with a clear and structured digital experience. It provides modern section layouts, fast navigation patterns, and device-optimized performance to make information easy to find and consume. The project emphasizes readability, organized content presentation, and reliable UX across mobile, tablet, and desktop screens.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-college-web.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/petros-college.git'
  },
];
