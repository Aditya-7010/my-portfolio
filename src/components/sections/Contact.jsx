import React, { useState, useEffect } from 'react'; 
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Mail, Send } from 'lucide-react';
import FadeInSection from '../ui/FadeInSection';
import { PROFILE } from '../../data/constants';

const Contact = ({ openContactModal }) => (
  <section id="contact" className="py-32 relative bg-transparent">
    <div className="absolute inset-0 bg-slate-50/40 backdrop-blur-[2px] z-0"></div>
    {/* Background glow for contact - Elegant soft lighting */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="w-full max-w-2xl h-[500px] bg-indigo-100/50 rounded-full blur-[150px]"></div>
      <div className="w-full max-w-md h-72 bg-teal-100/50 rounded-full blur-[100px] absolute"></div>
    </div>

    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
      <FadeInSection>
        <div className="inline-flex items-center justify-center p-5 bg-white backdrop-blur-xl rounded-full mb-8 border border-slate-200 shadow-[0_10px_30px_rgba(79,70,229,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-transparent pointer-events-none"></div>
          <Send className="text-indigo-600 w-10 h-10 -ml-1 mt-1 drop-shadow-sm relative z-10" />
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 mb-6 tracking-tighter drop-shadow-sm">Get In Touch</h2>
        <p className="text-slate-600 font-body text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-light bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200">
          Whether you have a project idea, a collaboration opportunity, or would like to discuss technology and system design, feel free to reach out. I’m always open to meaningful conversations.
        </p>
        
        {/* Opens the robust customized form modal */}
        <button 
          onClick={openContactModal}
          className="inline-flex items-center gap-4 px-10 sm:px-14 py-6 rounded-2xl bg-slate-900 backdrop-blur-md text-white font-heading font-black uppercase tracking-widest text-lg sm:text-xl hover:bg-indigo-600 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.3)] hover:-translate-y-2 group hover-target border-2 border-transparent hover:border-indigo-400 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none"></div>
          <Mail size={28} className="group-hover:scale-110 group-hover:animate-pulse transition-all text-white relative z-10" /> 
          <span className="relative z-10">Contact Me</span>
        </button>

        <div className="mt-24 flex justify-center gap-6 sm:gap-10">
          {[
            { icon: <FiGithub size={28} />, href: PROFILE.github, label: "GitHub", color: "hover:text-slate-900 hover:border-slate-900 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-slate-50" },
            { icon: <FiLinkedin size={28} />, href: PROFILE.linkedin, label: "LinkedIn", color: "hover:text-indigo-600 hover:border-indigo-600 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] hover:bg-indigo-50" }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href} 
              target="_blank"
              rel="noreferrer"
              className={`p-5 rounded-full border-2 border-slate-200 text-slate-500 bg-white/80 backdrop-blur-xl hover:-translate-y-3 transition-all duration-300 shadow-sm ${item.color} group relative hover-target overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <span className="sr-only">{item.label}</span>
              <div className="relative z-10">{item.icon}</div>
              {/* Tooltip */}
              <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-900 backdrop-blur-md text-white font-heading tracking-wider text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_10px_25px_rgba(0,0,0,0.2)] z-20 uppercase border border-slate-700">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);


export default Contact;