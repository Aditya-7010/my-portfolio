import React from 'react';
import { Award, BookOpen, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import FadeInSection from '../ui/FadeInSection';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../../data/constants';

const Achievements = () => (
  <section id="achievements" className="py-24 bg-slate-50/50 backdrop-blur-[1px] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <FadeInSection>
        <SectionHeading title="Achievements & Certs" subtitle="Milestones" />
      </FadeInSection>
      
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
        {/* Achievements */}
        <div>
          <FadeInSection delay={100}>
            <h3 className="text-3xl font-heading font-black tracking-tighter text-slate-900 mb-10 flex items-center gap-4">
              <Award className="text-indigo-600 drop-shadow-sm" size={32} /> Key Highlights
            </h3>
          </FadeInSection>
          <div className="space-y-5">
            {ACHIEVEMENTS.map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex gap-5 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 hover:bg-white hover:border-indigo-300 hover:scale-[1.02] transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div className="mt-1 w-10 h-10 rounded-full bg-indigo-50 backdrop-blur-md flex items-center justify-center shrink-0 border border-indigo-100 group-hover:border-indigo-300 group-hover:bg-indigo-100 transition-all shadow-sm relative z-10">
                    <ChevronRight size={20} className="text-indigo-600 group-hover:text-indigo-800 transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-slate-900 font-heading font-bold text-xl tracking-wide group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 font-body font-light text-sm sm:text-base mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <FadeInSection delay={300}>
            <h3 className="text-3xl font-heading font-black tracking-tighter text-slate-900 mb-10 flex items-center gap-4">
              <BookOpen className="text-teal-500 drop-shadow-sm" size={32} /> Certifications
            </h3>
          </FadeInSection>
          <div className="grid gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <FadeInSection key={i} delay={300 + (i * 100)}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 flex items-center gap-5 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(20,184,166,0.1)] hover:border-teal-300 transition-all duration-300 group relative overflow-hidden hover-target shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-teal-400 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 shadow-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-teal-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 backdrop-blur-md flex items-center justify-center shrink-0 border border-teal-100 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-all relative z-10">
                     <BookOpen size={20} className="text-teal-600 group-hover:text-teal-700 transition-colors" />
                  </div>
                  <p className="text-slate-700 font-body font-medium text-base sm:text-lg leading-snug group-hover:text-slate-900 transition-colors relative z-10">{cert}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;