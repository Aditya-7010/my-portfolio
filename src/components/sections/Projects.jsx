import React from 'react';
import { Code } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import FadeInSection from '../ui/FadeInSection';
import { PROJECTS } from '../../data/constants';

const Projects = () => (
  <section id="projects" className="py-32 bg-transparent relative">
    <div className="absolute inset-0 bg-slate-50/60 backdrop-blur-[2px] z-0 border-y border-slate-200"></div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <FadeInSection>
        <SectionHeading title="Projects" subtitle="Featured Work" />
      </FadeInSection>
      
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        {PROJECTS.map((project, index) => (
          <FadeInSection key={index} delay={index * 200}>
            <div className="h-full bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 border border-slate-200 hover:border-teal-400 hover:-translate-y-3 transition-all duration-500 group shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-10px_rgba(20,184,166,0.15)] relative overflow-hidden flex flex-col hover-target">
              
              {/* Decorative Background Blob & Light Lighting */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-teal-100/60 to-transparent rounded-full blur-3xl group-hover:scale-150 group-hover:opacity-80 transition-all duration-700 z-0 pointer-events-none"></div>

              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-50 backdrop-blur-md rounded-2xl text-indigo-600 shadow-sm border border-slate-200 group-hover:rotate-12 group-hover:text-teal-600 group-hover:scale-110 group-hover:border-teal-300 transition-all duration-500">
                  <Code size={32} />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-700 bg-indigo-50 backdrop-blur-md px-3 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                    {project.duration}
                  </span>
                  <span className="text-xs font-mono font-medium tracking-wide text-slate-600 bg-slate-100 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200">
                    {project.team}
                  </span>
                </div>
              </div>
              
              <h3 className="relative z-10 text-3xl sm:text-4xl font-heading font-black tracking-tight text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-300 drop-shadow-sm">
                {project.title}
              </h3>
              
              <p className="relative z-10 font-body font-light text-slate-600 mb-8 text-base sm:text-lg leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto pt-8 border-t border-slate-100">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-heading font-bold tracking-wider text-slate-700 bg-slate-100 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 cursor-default transition-all shadow-sm uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);


export default Projects;