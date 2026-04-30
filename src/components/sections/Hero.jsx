import React from 'react';
import { Terminal, Zap, Cpu, Code, Server } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import useTypingEffect from '../../hooks/useTypingEffect';
import { PROFILE } from '../../data/constants';

const Hero = () => {
  const typingText = useTypingEffect(PROFILE.roles);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      
      {/* Light gradient mask to ensure text is always perfectly legible over the 3D canvas */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 mb-4 leading-tight tracking-tighter">
            Aditya <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 drop-shadow-sm">Sharma.</span>
          </h1>
          <div className="h-10 mb-6 flex items-center justify-center md:justify-start">
            <Terminal className="text-amber-500 mr-3 animate-pulse" size={24} />
            <p className="text-xl sm:text-2xl text-slate-600 font-mono font-medium">
              I am a <span className="text-slate-900 border-r-2 border-teal-500 pr-1 animate-pulse font-bold">{typingText}</span>
            </p>
          </div>
          <p className="text-base sm:text-lg text-slate-600 font-body mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            Architecting intelligent systems by uniting the physical world of embedded hardware with the limitless logic of cloud-scale software.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" onClick={(e) => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-heading font-bold tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group hover-target border border-indigo-400/50 uppercase text-sm">
              Explore Projects
              <Zap className="group-hover:animate-bounce text-amber-300" size={18} />
            </a>
            <div className="flex gap-4 items-center justify-center">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white text-slate-500 border border-slate-200 hover:border-indigo-500 hover:text-indigo-600 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover-target">
                <FiGithub size={22} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white text-slate-500 border border-slate-200 hover:border-teal-500 hover:text-teal-600 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover-target">
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center relative">
          <div className="w-72 h-72 lg:w-96 lg:h-96 relative group perspective-1000 hover-target">
            {/* Spinning Rings - Indigo & Teal for Light Theme */}
            <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-indigo-500 animate-spin-slow opacity-50 group-hover:border-indigo-600 transition-colors shadow-sm"></div>
            <div className="absolute inset-4 rounded-full border-b-4 border-r-4 border-teal-400 animate-spin-slow-reverse opacity-40 group-hover:border-teal-500 transition-colors"></div>
            
            {/* Central Professional Element - Crystal clear and light */}
            <div className="absolute inset-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-200 group-hover:scale-105 transition-transform duration-500 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.2)]">
                <div className="text-center transform group-hover:rotate-6 transition-transform duration-500 flex flex-col items-center">
                  <Server size={72} className="text-teal-500 group-hover:animate-pulse mb-4 drop-shadow-sm" strokeWidth={1.5} />
                  <span className="text-slate-800 font-mono font-bold block tracking-widest text-lg uppercase">SYS.ARCHITECT</span>
                </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-10 -right-4 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-mono font-bold text-amber-500 animate-bounce-slow shadow-md flex items-center gap-2 tracking-wider">
              <Cpu size={14} className="text-indigo-600"/> IoT READY
            </div>
            <div className="absolute bottom-20 -left-8 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-700 animate-bounce-slow delay-1000 shadow-md flex items-center gap-2 tracking-wider">
              <Code size={14} className="text-teal-500"/> FULL STACK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;