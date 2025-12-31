import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import myPhoto from '../assets/images-all/my-photo1.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-tight">
            Hi, I’m <br />
            <span className="text-gradient">Petros Asmamaw</span>
          </h1>
          <p className="text-2xl text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
            Full-Stack Web Developer & Front-End [React.js] Specialist
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all flex items-center gap-2 hover:translate-y-[-2px]">
              Contact <ArrowRight size={20} />
            </a>
            
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin />, link: "https://www.linkedin.com/in/petros-asmamaw-172ab4375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7FClNBmQDm0fhSaWV5Zzg%3D%3D" },
                { icon: <img src="https://cdn.simpleicons.org/upwork/06c167" alt="Upwork" className="w-5 h-5" />, link: "https://www.upwork.com/freelancers/~0133f4dd6dbac80057" },
                { icon: <Send />, link: "https://t.me/Nehemiah00" },
                { icon: <Instagram />, link: "https://instagram.comhttps://www.instagram.com/piter._rock?igsh=MXJhbjJ5bnZwMWhoYg==" }
              ].map((social, i) => (
                <a key={i} href={social.link} className="p-4 glass rounded-2xl text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-3xl -z-10 rounded-full"></div>
            <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-[3rem] overflow-hidden border-2 border-transparent shadow-2xl relative group transition-all">
              <img
                src={myPhoto}
                alt="Petros Asmamaw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}