import React from 'react';  
import { GraduationCap } from 'lucide-react';   
import SectionHeading from '../ui/SectionHeading';  
import FadeInSection from '../ui/FadeInSection';
import { EDUCATION } from '../../data/constants';   


const Education = () => (
  <section id="education" className="py-24 bg-slate-50/30 backdrop-blur-[2px] relative">
    <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
      <FadeInSection>
        <SectionHeading title="Education" subtitle="Academic Journey" />
      </FadeInSection>
      
      <div className="space-y-6 sm:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-indigo-400 before:via-teal-200 before:to-transparent">
        {EDUCATION.map((edu, index) => (
          <FadeInSection key={index} delay={index * 150} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full border-4 border-white backdrop-blur-md bg-gradient-to-br from-indigo-500 to-teal-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_4px_15px_rgba(79,70,229,0.3)] z-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
              <GraduationCap size={20} className="group-hover:text-amber-300 transition-colors" />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 hover:border-indigo-400 hover:bg-white hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group-hover:shadow-[0_15px_40px_rgba(79,70,229,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-bl-full -z-10 group-hover:scale-150 group-hover:bg-teal-100/60 transition-all duration-700 blur-xl"></div>
              
              <div className="flex flex-col mb-4 relative z-10">
                <span className="inline-block px-3 py-1 bg-indigo-50 backdrop-blur-md text-indigo-700 rounded-full font-mono text-xs font-bold tracking-widest w-max mb-4 border border-indigo-100 shadow-sm">
                  {edu.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">{edu.degree}</h3>
              </div>
              <p className="text-slate-600 font-body font-light text-sm sm:text-base mb-6 relative z-10">{edu.institution}</p>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 backdrop-blur-md rounded-xl text-sm text-slate-700 border border-slate-200 font-mono tracking-wide shadow-sm relative z-10">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                SCORE: <span className="text-slate-900 font-bold">{edu.score}</span>
              </span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Education;