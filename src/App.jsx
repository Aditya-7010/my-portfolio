import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import AdvancedBackground3D from './components/background/AdvancedBackground3D';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import CustomCursor from './components/ui/CustomCursor';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ContactModal from './components/sections/ContactModal';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 font-body selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
      
      {/* Global CSS for Animations and Beautiful Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        /* INJECTING BEAUTIFUL GOOGLE FONTS */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700;800&display=swap');

        /* Applying the fonts via utility classes */
        .font-heading { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scale-up {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .delay-2000 { animation-delay: 2s; }
        .delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .animate-spin-slow-reverse { animation: spin 20s linear infinite reverse; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        .animate-spin-once { animation: spin 0.3s ease-in-out 1; }
        .animate-bounce-short { animation: bounce 1s infinite; }
        
        /* Perspective utility for 3D effects */
        .perspective-1000 { perspective: 1000px; }
        
        /* Global smooth scrolling behavior fallback */
        html { scroll-behavior: smooth; }

        /* Hide scrollbar for cleaner look - Adjusted for Light Mode */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 5px; border: 1px solid #e2e8f0; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />

      <AdvancedBackground3D />
      
      <CustomCursor />
      
      <Navbar openContactModal={openContactModal} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <Contact openContactModal={openContactModal} />
      </main>
      
      <Footer />

      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  );
}

export default App;