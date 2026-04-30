import React from 'react';  
import { Shield } from 'lucide-react';  
import SectionHeading from '../ui/SectionHeading';
import FadeInSection from '../ui/FadeInSection';
import { TECH_CATEGORIES, SKILLS_DOMAINS_DETAILED } from '../../data/constants';

const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50/40 backdrop-blur-[1px] relative border-y border-slate-200">
      
      {/* Glassmorphism ambient highlights */}
      <div className="absolute right-0 top-1/3 w-1/3 h-1/3 bg-teal-100/40 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeInSection>
          <SectionHeading title="Technical Arsenal" subtitle="Skills & Tools" />
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, idx) => (
            <FadeInSection key={category.title} delay={idx * 150} className="h-full">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200 h-full flex flex-col relative overflow-hidden group hover:border-indigo-300 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.08)]">
                
                {/* Glow effect on hover tailored for light theme */}
                <div className="absolute -inset-px bg-gradient-to-r from-indigo-100/0 via-teal-100/50 to-amber-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>

                <h3 className="text-xl font-heading tracking-wide font-bold text-slate-800 mb-8 flex items-center gap-3 pb-4 border-b border-slate-100 relative z-10">
                  <div className="p-2 bg-slate-50 backdrop-blur-md rounded-lg shadow-sm border border-slate-200">
                    {category.icon}
                  </div>
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 flex-grow relative z-10">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={skill.name} 
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 backdrop-blur-md border border-slate-200 transition-all duration-300 group/skill cursor-default shadow-sm hover:-translate-y-1 ${skill.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      <div className={`w-10 h-10 mb-3 text-slate-500 transition-colors duration-300 relative z-10 ${skill.text}`}>
                        {skill.svg}
                      </div>
                      <span className="text-sm font-heading font-semibold text-slate-600 group-hover/skill:text-slate-900 transition-colors duration-300 tracking-wider text-center relative z-10">
                        {skill.name}
                      </span>
                      
                      {/* Interactive Mini Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden border border-slate-300/50 relative z-10">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full transform -translate-x-full group-hover/skill:translate-x-0 transition-transform duration-700 ease-out shadow-sm"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* DOMAIN EXPERTISE GRID REPLACEMENT FOR DEPTH */}
        <FadeInSection delay={400} className="mt-24">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-heading font-black text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-4 tracking-tighter">
              <Shield className="text-indigo-600 drop-shadow-sm" size={32} /> Domain Expertise
            </h3>
            <p className="text-slate-500 font-body font-light text-base max-w-2xl">Comprehensive theoretical and practical focus areas shaping my engineering philosophy.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DOMAINS_DETAILED.map((domain, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-teal-300 transition-all duration-300 group hover:-translate-y-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_30px_-5px_rgba(20,184,166,0.15)] relative overflow-hidden"
              >
                {/* Tech grid background overlay adjusted for light mode */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none group-hover:opacity-[0.05] transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-slate-50 backdrop-blur-md border border-slate-200 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:border-indigo-300">
                    {domain.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-heading font-bold tracking-wide mb-1.5 group-hover:text-indigo-600 transition-colors">{domain.name}</h4>
                    <p className="text-sm font-body font-light text-slate-600 leading-relaxed">{domain.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

      </div>
    </section>
  );
};

export default TechStack;