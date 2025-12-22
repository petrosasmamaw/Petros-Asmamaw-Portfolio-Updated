import React from 'react';
import { 
  Monitor, Server, Database, Globe, 
  Layout, Cpu, Settings, Github, 
  Terminal, Layers, Code, HardDrive
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


export const EXPERTISE_CARDS = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
    tech: "HTML, CSS, JavaScript, React",
    description: "Craft pixel-perfect, responsive interfaces with accessible React and Tailwind workflows."
  },
  {
    title: "Backend Development",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    tech: "Node.js, Express.js",
    description: "Build secure, scalable APIs and services using Node.js, Express, and best practices."
  },
  {
    title: "Database Management",
    icon: <HardDrive className="w-8 h-8 text-emerald-400" />,
    tech: "MongoDB / SQL",
    description: "Design resilient, high-performance data models and queries for scalable applications."
  },
  {
    title: "Deployment & Hosting",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    tech: "Vercel, Netlify, Render, Cloud services",
    description: "Optimize CI/CD, deployments, and performance for fast, reliable production experiences."
  }
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "html5", desc: "Semantic structure" },
      { name: "CSS", icon: "css3", desc: "Responsive design", iconComponent: <Code className="w-6 h-6 text-indigo-400" /> },
      { name: "Tailwind CSS", icon: "tailwindcss", desc: "Utility-first CSS framework" },
      { name: "JavaScript", icon: "javascript", desc: "Dynamic logic" },
      { name: "React", icon: "react", desc: "Component-driven UI library" },
      { name: "Redux", icon: "redux", desc: "State management" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs", desc: "Server-side JS", iconComponent: <Cpu className="w-6 h-6 text-green-400" /> },
      { name: "Express", icon: "express", desc: "Fast, unopinionated Node.js web framework" },
      { name: "MongoDB", icon: "mongodb", desc: "NoSQL document database" },
      { name: "API Development", icon: "postman", desc: "RESTful services" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "GitHub", icon: "github", desc: "Version control" },
      { name: "Deployment", icon: "vercel", desc: "Cloud hosting" },
      { name: "Developer Tools", icon: "visualstudiocode", desc: "IDE & Debugging", iconComponent: <Monitor className="w-6 h-6 text-slate-300" /> }
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
    id: 1,
    type: 'Web',
    image: { src: HAdmin, alt: 'hotel admin' },
    title: 'BahiRoom Admin Dashboard',
    description:
      'MERN admin console with Supabase Auth, Redux Toolkit state, and MERN product/content management. Secure routes with React Router, real-time updates, and ops tools for inventory, users, and reviews.',
    tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS'],
    viewDetailsLink: 'https://bahi-room-admin-frontend.vercel.app/',
    githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Admin-Frontend.git',
  },
  {
    id: 2,
    type: 'Web',
    image: { src: hotel, alt: 'hotel' },
    title: 'BahiRoom Hotel Dashboard',
    description:
      'Hotel ops dashboard on MERN with Supabase Auth, protected routes via React Router, and Redux Toolkit for bookings, guests, and analytics. Integrates mern + REST APIs for live property insights.',
    tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS'],
    viewDetailsLink: 'https://bahi-room-hotel-frontend.vercel.app/',
    githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Hotel-Frontend.git',
  },
  {
    id: 3,
    type: 'Web',
    image: { src: client, alt: 'client' },
    title: 'BahiRoom Client Dashboard',
    description:
      'Client-facing MERN app with Supabase Auth, React Router navigation, and Redux Toolkit for bookings, favorites, and reviews. Fast, responsive UI with Axios-powered API calls and shared state.',
    tags: ['node.js','express.js','mongodb','MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Airtable', 'Axios', 'Tailwind/CSS'],
    viewDetailsLink: 'https://bahi-room-client-frontend.vercel.app/',
    githubLink: 'https://github.com/petrosasmamaw/BahiRoom-Client-Frontend.git',
  },
  {
    id: 4,
    type: 'Web',
    image: { src: foodweb, alt: 'food delivery' },
    title: 'Food Delivery Website',
    description:
      'Full-stack MERN food delivery app with Supabase Auth for user accounts, React Router for smooth navigation and Redux Toolkit for cart & order state, REST APIs for restaurants/menus, and responsive UI for mobile-first ordering.',
    tags: ['MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Stripe', 'Axios', 'Responsive', 'Tailwind/CSS'],
    viewDetailsLink: 'https://food-delivering-client-frontend-9jd.vercel.app/',
    githubLink: 'https://github.com/petrosasmamaw/Food-Delivering-Client-Frontend.git',
  },
  {
    id: 5,
    type: 'Web',
    image: { src: foodadmin, alt: 'food admin' },
    title: 'Food Admin Dashboard',
    description:
      'Admin portal for the food delivery system built on MERN. Uses Supabase Auth + role-based access, Redux Toolkit for centralized state, real-time order management, menu CRUD, analytics charts, and Cloudinary for media uploads.',
    tags: ['MERN', 'React', 'Redux Toolkit', 'React Router', 'Supabase Auth', 'Real-time', 'Cloudinary', 'Charts', 'Admin UI'],
    viewDetailsLink: 'https://food-delivery-admin-frontend-beta.vercel.app/',
    githubLink: 'https://github.com/petrosasmamaw/Food-Delivery-Admin-Frontend.git',
  }
];

export const REACT_PROJECTS = [
  {   
    id: 1,
    type: 'Web',
    image: { src: shopping, alt: 'petershop' },
    title: 'Shopping -site',
    description: 'Peter-Shop is a modern React-based shopping app where users can browse products, add items to their cart, and leave comments. Built with sleek design and smooth UI, it delivers an interactive shopping experience. Guests can explore products freely, while registered users enjoy personalized carts and comment features, keeping their shopping organized and engaging.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
    viewDetailsLink: 'https://peteshopping-web-fully-structured-new.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Shopping-Web-Fully-Structured-new.git',
  },
  {   
    id: 2,
    type: 'Web',
    image: { src: admin, alt: 'petershop' },
    title: 'Shopping-admin-dashboard',
    description: 'Peter-Shop Admin Dashboard is a powerful React-based management panel designed for smooth control over the shopping platform. Admins can easily add, edit, and delete products, manage user comments, and monitor cart activity in real time. With a clean interface and fast performance, it simplifies store operations while keeping data synchronized with Supabase and Airtable, ensuring full visibility and control over the shopping experience.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit','supabase auth','airtable database','axios','react router'],
    viewDetailsLink: 'https://peter-shopping-web-admin-dashboar.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/shopping-web-admin-dashboard-fully-structured.git',
  },
  {
    id: 3,
    type: 'Web',
    image: { src: game, alt: 'game discover' },
    title: 'Game-Discover',
    description: 'Game-Discover is a modern React-based gaming hub where users can browse, review, and favorite their top games. Built with clean design and smooth UI, it delivers a fun and interactive experience for every gamer. Whether you’re exploring new adventures or showing love to classics, this site keeps your gaming world organized and stylishly presented.',
    tags: ['HTML5', 'CSS3',  'React' ,'API' ,'Redux-toolkit', 'axios','react router'],
    viewDetailsLink: 'https://petros-game-discovery.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Game-discovery-.git',
  },
  {
    id: 4,
    type: 'Web',
    image: { src: notertk, alt: 'note taking app' },
    title: 'Updated Create Note',
    description: 'I’ve upgraded my game website by integrating Supabase authentication and database support, alongside migrating from React Context API to Redux Toolkit (RTK) for state management. This update enhances performance, scalability, and maintainability, enabling efficient handling of global states like user favorites, game details, reviews, and secure user authentication. The result is a more dynamic, interactive, and personalized gaming experience.',
    tags: ['HTML5', 'CSS',  'React', 'Redux-toolkit','supabase auth','supabase db'],
    viewDetailsLink: 'https://create-note-authentication.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Create-note-with-supbase-authentication.git',
  },
  {
    id: 5,
    type: 'Web',
    image: { src: movieSearching, alt: 'Movie Searching' },
    title: 'Movie-searching',
    description: 'A modern, responsive movie searching website that allows users to search, view. The design is sleek, user-friendly, and optimized for both desktop and mobile experiences.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React' ,'API' ,'context'],
    viewDetailsLink: 'https://petros-asmamaw-projects-1.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/petros-asmamaw-movie-searching.git',
  },
  {
    id: 6,
    type: 'Web',
    image: { src: car, alt: 'car slider app' },
    title: 'The-car-slider',
    description: 'Responsive web application built with React and Vite that allows users to view and navigate through a series of car images with smooth transitions. The app features a user-friendly interface with navigation buttons to switch between images.',
    tags: ['HTML5', 'CSS', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-car-slider.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/The-Car-Slide.git',
  },
  {
    id: 7,
    type: 'Web',
    image: { src: notesApp, alt: 'Notes App' },
    title: 'Create-note',
    description: 'A visually stunning website for creating and managing notes with a responsive design and mockapi database.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-create-note.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Petros-Create-Note.git',
  },
  {
    id: 8,
    type: 'Web',
    image: { src: college, alt: 'college app' },
    title: 'College-web',
    description: 'This is a fully responsive college website developed using React, designed to provide students, faculty, and visitors with a seamless online experience. The website features a modern UI, fast navigation, and optimized performance across all devices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-college-web.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/petros-college.git'
  },
  {
    id: 9,
    type: 'Web',
    image: { src: quiz, alt: 'quiz app' },
    title: 'Create-quiz',
    description: 'A simple and fun quiz game built with React. Users can answer multiple-choice questions, get instant feedback, and track their score. The app is responsive, easy to use, and the questions can be customized to fit any topic.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-quiz-web.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/Petros-quiz.git'
  },
  {
    id: 10,
    type: 'Web',
    image: { src: portfolio, alt: 'portfolio app' },
    title: 'My-portfolio',
    description: 'A modern and fully responsive portfolio website crafted with React to present my journey, skills, and projects. It delivers a sleek design with fast performance, intuitive navigation, and seamless adaptability across all screen sizes. Built with reusable React components, the site offers a professional showcase of my work while maintaining a user-friendly and engaging experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    viewDetailsLink: 'https://petros-portfolio-web.netlify.app/',
    githubLink: 'https://github.com/petrosasmamaw/my-portfolio.git'
  }
];
