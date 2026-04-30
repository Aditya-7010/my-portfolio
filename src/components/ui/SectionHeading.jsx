import React from 'react';
import { Target } from 'lucide-react';

export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 text-center md:text-left relative z-10">
    <p className="text-indigo-600 font-mono font-bold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-2 drop-shadow-sm">
      <Target size={16}/> {subtitle}
    </p>
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter drop-shadow-sm">{title}</h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-teal-500 to-amber-400 mt-6 rounded-full mx-auto md:mx-0 shadow-sm"></div>
  </div>
);

export default SectionHeading;  