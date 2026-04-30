import React from 'react';
import { Heart } from 'lucide-react';   

const Footer = () => (
        <footer className="py-10 text-center border-t border-slate-200 bg-slate-50 relative z-10">
          <p className="text-slate-500 text-sm font-mono font-medium tracking-wide flex items-center justify-center gap-2">
            Architected & Built with <Heart size={16} className="text-teal-500 fill-teal-500 animate-pulse drop-shadow-sm" /> by Aditya Sharma © {new Date().getFullYear()}
          </p>
        </footer>
);

export default Footer;