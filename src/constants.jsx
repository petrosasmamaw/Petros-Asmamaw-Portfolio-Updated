import React from 'react';
import { 
  Monitor, Server, Database, Globe, 
  Layout, Cpu, Settings, Github, 
  Terminal, Layers, Code, HardDrive,
  Shield, Zap, Chrome, Bot, Brain, Sparkles, Workflow, CreditCard, Smartphone
} from 'lucide-react';
// Cloudinary CDN Image URLs
const resume = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037778/portfolio/images/resume2.png';
const certificate1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037725/portfolio/images/Petros-Asmamaw-Udemy-Certificate.jpg';
const certificate2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037728/portfolio/images/PetrosAsmamawReact.jpg';
const HAdmin = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037591/portfolio/images/HAdmin.png';
const hotel = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037695/portfolio/images/hotel.png';
const client = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037422/portfolio/images/client.png';

const shopping = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037803/portfolio/images/shopping.png';
const admin = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037353/portfolio/images/admin.png';
const game = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037631/portfolio/images/game.png';
const notertk = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037707/portfolio/images/note-rtk.png';
const movieSearching = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037769/portfolio/images/movie.png';
const car = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037411/portfolio/images/car.png';
const notesApp = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037715/portfolio/images/notes.png';
const college = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037776/portfolio/images/college.png';
const quiz = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037763/portfolio/images/quiz.png';
const portfolio = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037749/portfolio/images/portfolio.png';
const hospitalAdmin = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037657/portfolio/images/hospitalAdmin.png';
const hospitalPatient = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037696/portfolio/images/hospitalPatient.png';
const hospitalDoctor = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037639/portfolio/images/hospitalDoctor.png';
const qandliai1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037756/portfolio/images/qandliai1.png';
const qandliai2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037751/portfolio/images/qandliai2.png';
const qandliai3 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037753/portfolio/images/qandliai3.png';
const qandliai4 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037772/portfolio/images/qandliai4.png';
const qandliai5 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037767/portfolio/images/qandliai5.png';
const ElectricErp1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037513/portfolio/images/ElectricErp1.jpg';
const ElectricErp2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037518/portfolio/images/ElectricErp2.jpg';
const ElectricErp3 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037524/portfolio/images/ElectricErp3.jpg';
const lms1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037650/portfolio/images/lms1.png';
const lms2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037657/portfolio/images/lms2.png';
const lms3 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037666/portfolio/images/lms3.png';
const addisElectric1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037315/portfolio/images/addis_electric_ecommrce_site.png';
const addisElectric2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037345/portfolio/images/adiss_electric_2.png';
const addisElectric3 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037347/portfolio/images/adiss_electric_3.png';
const tamagnCheck1 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037787/portfolio/images/tamagn_check.png';
const tamagnCheck2 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037783/portfolio/images/tamagn_check_3.png';
const tamagnCheck3 = 'https://res.cloudinary.com/asmiy35i/image/upload/f_auto,q_auto/v1787037783/portfolio/images/tamagn_check_3__2_.png';
const resumePdf = 'https://res.cloudinary.com/asmiy35i/raw/upload/v1787037795/portfolio/documents/resume_petros_asmamaw_2p.pdf';



export const EXPERTISE_CARDS = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    tech: "HTML, CSS, JavaScript, React,next.js, Tailwind CSS",
    description: "Craft pixel-perfect, responsive interfaces with accessible React and Tailwind workflows."
  },
  {
    title: "Backend Development",
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    tech: "Node.js, Express.js REST APIs, Authentication",
    description: "Build secure, scalable APIs and services using Node.js, Express, and best practices."
  },
  {
    title: "Database Management",
    icon: <HardDrive className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    tech: "MongoDB / SQL databases, Supabase, Airtable",
    description: "Design resilient, high-performance data models and queries for scalable applications."
  },
  {
    title: "Deployment & Hosting",
    icon: <Globe className="w-8 h-8 text-violet-600 dark:text-purple-400" />,
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
    icon: <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    title: 'Conversational Chat App',
    tech: 'Chatbot UX',
    description:
      'Designed context-aware chat interfaces with session memory, clear fallback flows, and user-friendly prompt handling.',
    icon: <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: 'AI Search & Insights',
    tech: 'Semantic Search',
    description:
      'Implemented intelligent retrieval patterns to surface relevant information quickly using embeddings and ranking strategies.',
    icon: <Brain className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: 'Automation Pipelines',
    tech: 'Agent Workflows',
    description:
      'Created AI-powered automation chains to connect tools, summarize outputs, and streamline repetitive product operations.',
    icon: <Workflow className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />,
  },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react", desc: "Component-driven UI library" },
      { name: "Next.js", icon: "nextdotjs", desc: "React framework & SSR" },
      { name: "JavaScript", icon: "javascript", desc: "Dynamic logic" },
      { name: "TypeScript", icon: "typescript", desc: "Typed JavaScript" },
      { name: "HTML5", icon: "html5", desc: "Semantic structure" },
      { name: "CSS3", icon: "css3", desc: "Styling & layout", iconComponent: <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" /> },
      { name: "Tailwind CSS", icon: "tailwindcss", desc: "Utility-first CSS framework" },
      { name: "shadcn/ui", icon: "shadcnui", desc: "Accessible UI components" },
      { name: "Material UI (MUI)", icon: "mui", desc: "React component library" },
      { name: "Framer Motion", icon: "framer", desc: "UI animation library" },
      { name: "Redux", icon: "redux", desc: "State management" },
      { name: "Mobile-first design", icon: "responsive", desc: "Responsive layouts" },
      { name: "Figma", icon: "figma", desc: "Design handoff" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs", desc: "Server-side JS", iconComponent: <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" /> },
      { name: "Express.js", icon: "express", desc: "Web application framework" },
      { name: "PHP", icon: "php", desc: "Server-side scripting" },
      { name: "Laravel", icon: "laravel", desc: "PHP web framework" },
      { name: "REST APIs", icon: "postman", desc: "RESTful architecture" },
      { name: "API Development", icon: "fastapi", desc: "Backend services" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb", desc: "NoSQL document database", iconComponent: <HardDrive className="w-6 h-6 text-green-600 dark:text-green-500" /> },
      { name: "PostgreSQL", icon: "postgresql", desc: "Relational database" },
      { name: "Neon", icon: "neon", desc: "Serverless Postgres" },
      { name: "Prisma ORM", icon: "prisma", desc: "Type-safe database ORM" },
      { name: "Supabase", icon: "supabase", desc: "Backend-as-a-service" },
      { name: "Airtable", icon: "airtable", desc: "Low-code database platform" }
    ]
  },
  {
    title: "Authentication & Security",
    skills: [
      { name: "Authentication & Authorization", icon: "auth0", desc: "User access control", iconComponent: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" /> },
      { name: "JSON Web Tokens (JWT)", icon: "jwt", desc: "Secure token-based auth" },
      { name: "Supabase Auth", icon: "supabase", desc: "Modern auth solution" },
      { name: "Better Auth", icon: "auth0", desc: "Flexible auth framework" }
    ]
  },
  {
    title: "AI / Modern Tech",
    skills: [
      { name: "AI Application Development", icon: "openai", desc: "AI integration", iconComponent: <Zap className="w-6 h-6 text-amber-500 dark:text-yellow-400" /> },
      { name: "Generative AI Integration", icon: "openai", desc: "AI-powered features" },
      { name: "LLM APIs (Gemini API)", icon: "google", desc: "Large language models" },
      { name: "Prompt Engineering", icon: "openai", desc: "AI optimization" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "git", desc: "Version control system" },
      { name: "GitHub", icon: "github", desc: "Code repository hosting" },
      { name: "Vercel", icon: "vercel", desc: "Deployment platform" },
      { name: "Netlify", icon: "netlify", desc: "Hosting & deployment" },
      { name: "Cloudinary", icon: "cloudinary", desc: "Media storage & CDN" },
      { name: "Google Cloud Platform", icon: "googlecloud", desc: "Cloud infrastructure" },
      { name: "Debugging", icon: "devto", desc: "Error resolution" },
      { name: "Chrome DevTools", icon: "googlechrome", desc: "Browser debugging", iconComponent: <Monitor className="w-6 h-6 text-slate-600 dark:text-slate-300" /> }
    ]
  },
  {
    title: "Payments",
    skills: [
      { name: "Stripe", icon: "stripe", desc: "Online payments" },
      { name: "Telebirr", icon: "telebirr", desc: "Ethiopian mobile money", iconComponent: <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> },
      { name: "Commercial Bank of Ethiopia", icon: "cbe", desc: "Bank payment integration", iconComponent: <CreditCard className="w-6 h-6 text-sky-600 dark:text-sky-400" /> }
    ]
  }
];

export const CERTIFICATES = [
  {
    title: "My Professional Resume",
    image: resume,
    fileUrl: resumePdf,
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
    category: 'E-commerce',
    image: { src: addisElectric1, alt: 'Addis Electric ecommerce homepage' },
    imageGallery: [
      { src: addisElectric1, alt: 'Addis Electric trusted electrical supplier homepage' },
      { src: addisElectric2, alt: 'Addis Electric product browsing and catalog' },
      { src: addisElectric3, alt: 'Addis Electric store and category experience' },
    ],
    title: 'Ecommerce site for Addis Electric',
    description:
      'Online marketplace for an Ethiopian electrical supplier with product search, category browsing, admin tools, and phone ordering for industrial and home customers.',
    tags: ['React', 'Tailwind', 'Node.js', 'Express', 'JWT', 'PostgreSQL', 'Neon'],
    liveLinks: [
      { label: 'View Live', url: 'https://addiselectricshop.online/' },
    ],
  },
  {
    id: 1,
    type: 'Web',
    category: 'FinTech / AI',
    image: { src: tamagnCheck1, alt: 'Tamagn Check receipt verification dashboard' },
    imageGallery: [
      { src: tamagnCheck1, alt: 'Tamagn Check receipt verification home' },
      { src: tamagnCheck2, alt: 'Tamagn Check verification workflow' },
      { src: tamagnCheck3, alt: 'Tamagn Check API and records management' },
    ],
    title: 'Tamagn Check',
    description:
      'Receipt verification platform for Telebirr, CBE, Dashen, and BOA payments using screenshots, QR codes, SMS, plus a free tier and paid Verify API.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Cloudinary', 'Gemini', 'OCR', 'QR Code', 'Better Auth', 'Tailwind'],
    liveLinks: [
      { label: 'View Live', url: 'http://tamagncheck.online/' },
    ],
  },
  {
    id: 2,
    type: 'Web',
    category: 'EdTech / AI',
    image: { src: qandliai1, alt: 'qandil ai platform' },
    imageGallery: [
      { src: qandliai1, alt: 'qandil ai home and features' },
      { src: qandliai2, alt: 'qandil ai personalized tools' },
      { src: qandliai3, alt: 'qandil ai learning workflow' },
      { src: qandliai4, alt: 'qandil ai dashboard and profile' },
      { src: qandliai5, alt: 'qandil ai ai-tools experience' },
    ],
    title: 'Qandil AI - Personalized Learning Assistant',
    description:
      'AI learning platform that personalizes study help from student profiles, with document-to-notes tools, chat history, bilingual UI, and scalable backend services.',
    tags: ['Next.js', 'React', 'Redux Toolkit', 'Supabase', 'Node.js', 'MongoDB', 'AI Integration', 'Prompt Engineering', 'Multilingual UX', 'Tailwind/CSS'],
    liveLinks: [
      { label: 'Live Demo', url: 'https://qandil-ai-dep.vercel.app/' },
    ],
    repoLinks: [
      { label: 'GitHub Repo', url: 'https://github.com/petrosasmamaw/Qandil_Ai.git' },
    ],
  },
  {
    id: 3,
    type: 'Web',
    category: 'ERP / Business',
    image: { src: ElectricErp1, alt: 'Electric ERP Dashboard' },
    imageGallery: [
      { src: ElectricErp1, alt: 'Electric ERP Sales and Stock Tracking' },
      { src: ElectricErp2, alt: 'Electric ERP Inventory Management' },
      { src: ElectricErp3, alt: 'Electric ERP Credit and Reporting' },
    ],
    title: 'Electric ERP - Local Supply Business System',
    description:
      'Lightweight PERN ERP for electrical suppliers with sales tracking, batch inventory, credit control, and daily reporting built for real local business workflows.',
    tags: ['PERN Stack', 'PostgreSQL', 'Express.js', 'React', 'Node.js', 'Inventory Management', 'Sales Tracking', 'Real-time Updates', 'Business Operations', 'Batch Management'],
    repoLinks: [
      { label: 'GitHub Repo', url: '#' },
    ],
  },
  {
    id: 4,
    type: 'Web',
    category: 'EdTech',
    image: { src: lms1, alt: 'LMS Learning Management System' },
    imageGallery: [
      { src: lms1, alt: 'LMS Admin Dashboard' },
      { src: lms2, alt: 'LMS Student Learning Portal' },
      { src: lms3, alt: 'LMS Courses and Exams' },
    ],
    title: 'LMS - Learning Platform for Ethiopian Schools',
    description:
      'School learning platform with courses, exams, video lessons, Chapa payments, AI content tools, QR attendance, and Cloudinary media for real classroom workflows.',
    tags: ['React', 'Express', 'Node.js', 'PostgreSQL', 'Neon', 'Chapa Payments', 'AI Generative', 'ML', 'Cloudinary', 'QR Parser', 'Redux Toolkit', 'Tailwind'],
    liveLinks: [
      { label: 'Live Demo', url: 'https://lms-three-lake-48.vercel.app' },
    ],
    repoLinks: [
      { label: 'GitHub Repo', url: '#' },
    ],
  },
  {
    id: 5,
    type: 'Web',
    category: 'Healthcare',
    image: { src: hospitalAdmin, alt: 'hospital ecosystem dashboard suite' },
    imageGallery: [
      { src: hospitalPatient, alt: 'hospital patient dashboard' },
      { src: hospitalDoctor, alt: 'hospital doctor dashboard' },
      { src: hospitalAdmin, alt: 'hospital admin dashboard' },
    ],
    title: 'Hospital Management Ecosystem',
    description:
      'Three-portal MERN healthcare suite for patients, doctors, and admins with shared auth, appointments, clinical updates, inventory control, and synchronized APIs.',
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
    id: 6,
    type: 'Web',
    category: 'Booking Platform',
    image: { src: HAdmin, alt: 'bahiroom suite dashboard' },
    imageGallery: [
      { src: client, alt: 'bahiroom client dashboard' },
      { src: hotel, alt: 'bahiroom hotel dashboard' },
      { src: HAdmin, alt: 'bahiroom admin dashboard' },
    ],
    title: 'BahiRoom Booking Ecosystem',
    description:
      'Multi-portal room booking platform for clients, hotels, and admins with listings, reservations, moderation tools, shared auth, and scalable Redux state flows.',
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
