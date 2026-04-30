import React from 'react';
import { User, Cpu, Box, LayoutDashboard, Component } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import FadeInSection from '../ui/FadeInSection';
import { PROFILE } from '../../data/constants';

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden bg-transparent">
    <div className="absolute inset-0 bg-slate-50/60 backdrop-blur-[2px] z-0"></div>
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <FadeInSection>
        <SectionHeading title="About Me" subtitle="Professional Profile" />
      </FadeInSection>
      
      <div className="grid lg:grid-cols-12 gap-12">
        <FadeInSection className="lg:col-span-12">
          <div className="text-slate-600 font-body leading-relaxed space-y-6 text-base sm:text-lg bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <User size={150} className="text-indigo-600"/>
            </div>
            
            <p className="relative z-10 max-w-5xl font-light text-lg">
              <strong className="text-slate-900 font-heading font-bold tracking-wide block text-2xl mb-4">Engineer. Innovator. Architect.</strong>
              {PROFILE.summary}
            </p>
            
            {/* Expanded Core Competencies */}
            <div className="pt-8 mt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {[
                { title: 'Hardware Integration', icon: <Cpu className="text-amber-500 group-hover/item:scale-125 transition-transform duration-300" size={28} /> },
                { title: 'Machine Learning', icon: <Box className="text-indigo-600 group-hover/item:scale-125 transition-transform duration-300 drop-shadow-sm" size={28} /> },
                { title: 'Scalable Architecture', icon: <LayoutDashboard className="text-teal-500 group-hover/item:scale-125 transition-transform duration-300" size={28} /> },
                { title: 'Full-Stack Ecosystems', icon: <Component className="text-blue-500 group-hover/item:scale-125 transition-transform duration-300" size={28} /> }
              ].map((comp, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-4 bg-slate-50/80 backdrop-blur-md px-4 py-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-white transition-all duration-300 hover-target group/item shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(20,184,166,0.15)] text-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <div className="p-3 bg-white backdrop-blur-xl rounded-xl border border-slate-200 shadow-sm relative z-10">
                    {comp.icon}
                  </div>
                  <span className="text-sm font-heading tracking-wide font-bold text-slate-700 leading-tight uppercase relative z-10">{comp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default About;