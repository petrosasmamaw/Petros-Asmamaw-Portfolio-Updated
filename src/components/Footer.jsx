import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 font-medium tracking-wide">
          &copy; {year} Petros Asmamaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}