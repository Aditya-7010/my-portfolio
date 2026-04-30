import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import useActiveSection from '../../hooks/useActiveSession';

const Navbar = ({ openContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  // Implementing Scroll Spy mapping
  const activeSection = useActiveSection(navLinks.map(link => link.href));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extremely vital custom routing interceptor for SPA navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if(href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 100; // Account for the sticky navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false); // Auto-close mobile menu
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-2xl font-heading font-black tracking-tighter text-slate-900 group flex items-center gap-1 hover-target">
          <span className="text-indigo-600 group-hover:rotate-12 transition-transform duration-300 inline-block font-mono">&lt;</span>
          Adi<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">tya</span>
          <span className="text-indigo-600 group-hover:-rotate-12 transition-transform duration-300 inline-block font-mono">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold tracking-wide relative group hover-target font-body transition-all duration-300 hover:-translate-y-1 ${activeSection === link.href.substring(1) ? 'text-teal-600' : 'text-slate-500 hover:text-indigo-600'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <button 
            onClick={openContactModal}
            className="px-5 py-2.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 font-heading font-bold text-sm tracking-wider shadow-sm hover:shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:scale-105 active:scale-95 hover-target uppercase"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="animate-spin-once text-teal-600" /> : <Menu className="animate-bounce-short text-indigo-600" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="px-6 flex flex-col gap-4 relative z-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className={`font-heading font-semibold text-lg hover:translate-x-2 transition-transform tracking-wide ${activeSection === link.href.substring(1) ? 'text-teal-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); openContactModal(); }} 
            className="w-full text-center mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-heading font-bold uppercase tracking-widest shadow-lg hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] active:scale-95 transition-all"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;