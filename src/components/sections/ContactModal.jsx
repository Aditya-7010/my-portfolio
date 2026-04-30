import React, { useState, useEffect } from 'react';
import { Send, Mail, Shield, X, CheckCircle, AlertCircle, Copy, Loader } from 'lucide-react';
import { PROFILE } from '../../data/constants';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); 
  const [copied, setCopied] = useState(false);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.trim() !== "") {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          setStatus('success');
          setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', subject: '', message: '' });
            onClose();
          }, 3000);
        } else {
          throw new Error('Formspree returned an error');
        }
      } catch (error) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
      return;
    }

    // FALLBACK IF NO FORMSPREE
    setTimeout(() => {
      try {
        const mailToSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
        const mailToBody = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n\n` +
          `Message:\n${formData.message}\n`
        );
        
        window.open(`mailto:${PROFILE.email}?subject=${mailToSubject}&body=${mailToBody}`, '_blank');
        setStatus('success');
        
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
        
      } catch (error) {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dynamic blurred animated backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in transition-all" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-[2rem] w-full max-w-xl overflow-hidden flex flex-col transform animate-scale-up z-10">
        
        {/* Glow Header effect */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-teal-400 to-amber-400"></div>

        <div className="flex items-center justify-between p-8 pb-4 border-b border-slate-100">
          <h3 className="text-3xl font-heading font-black tracking-tight text-slate-900 flex items-center gap-3">
            <Shield className="text-indigo-600 drop-shadow-sm" size={28}/>
            Lets Connect
          </h3>
          <button 
            onClick={onClose}
            className="p-2.5 bg-slate-50 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors border border-slate-200 hover:border-indigo-200 shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          {status === 'success' ? (
             <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in-up">
                <CheckCircle size={72} className="text-teal-500 mb-6 animate-bounce-short drop-shadow-sm"/>
                <h4 className="text-3xl font-heading font-bold tracking-tight text-slate-900 mb-3">Email Sent!</h4>
                
                {FORMSPREE_ENDPOINT ? (
                  <p className="text-slate-600 font-body text-lg">Your data payload was received. I will reach out shortly.</p>
                ) : (
                  <>
                    <p className="text-slate-600 font-body mb-8 px-4 text-lg">Your default email client should be opening. If it didn't work natively, simply copy my email directly below!</p>
                    
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-inner">
                      <span className="text-indigo-600 font-mono text-base font-bold tracking-widest">{PROFILE.email}</span>
                      <button 
                        onClick={handleManualCopy}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase transition-all ${copied ? 'bg-teal-50 text-teal-700 border border-teal-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'}`}
                      >
                        {copied ? <CheckCircle size={18}/> : <Copy size={18}/>}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </>
                )}
             </div>
          ) : status === 'error' ? (
             <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <AlertCircle size={72} className="text-amber-500 mb-6 animate-bounce-short drop-shadow-sm"/>
                <h4 className="text-3xl font-heading font-bold tracking-tight text-slate-900 mb-3">Transmission Failed</h4>
                <p className="text-slate-600 font-body text-lg mb-8">Could not send the payload. Try copying the address manually.</p>
                <button 
                  onClick={handleManualCopy}
                  className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl border border-slate-700 hover:border-indigo-500 hover:text-white hover:bg-indigo-600 transition-all font-heading font-bold tracking-wider uppercase shadow-md"
                >
                  <Copy size={20}/> {copied ? 'Copied to Clipboard' : 'Copy Email Manually'}
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-in-up font-body">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-heading font-bold text-slate-500 uppercase tracking-widest pl-1">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner text-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-heading font-bold text-slate-500 uppercase tracking-widest pl-1">Your Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner text-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-heading font-bold text-slate-500 uppercase tracking-widest pl-1">Subject (Optional)</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Offer"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner text-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-heading font-bold text-slate-500 uppercase tracking-widest pl-1">Your Message *</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your amazing idea..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none shadow-inner text-lg"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-heading font-black tracking-widest uppercase text-lg py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)] border border-indigo-400/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>

                {status === 'loading' ? (
                  <>
                    <Loader className="animate-spin text-white relative z-10" size={24}/> <span className="relative z-10">Processing...</span>
                  </>
                ) : (
                  <>
                    <Send size={22} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform relative z-10 text-white" /> 
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
              
              {!FORMSPREE_ENDPOINT && (
                 <div className="w-full flex justify-center mt-3">
                   <button 
                    type="button"
                    onClick={handleManualCopy}
                    className="text-sm font-heading font-semibold tracking-wide text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1.5"
                   >
                     <Copy size={14}/> {copied ? 'Email Copied!' : 'Or copy email address manually'}
                   </button>
                 </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;