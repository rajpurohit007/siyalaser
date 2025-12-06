// components/Contact.tsx
"use client";

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Loader2, AlertTriangle } from 'lucide-react';

const Contact = () => {
  // Simple state: idle -> loading -> maintenance
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'maintenance'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate a system check delay (1.5 seconds) to make it feel real
    setTimeout(() => {
      setFormStatus('maintenance');
    }, 1500);
  };

  return (
    <section id="contact" className="bg-luxe-dark py-32 px-4 relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* --- LEFT COLUMN: Contact Info --- */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 font-bold font-display">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Upgrade?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you need a quote for a new machine or technical support for an existing one, our engineering team is ready to assist.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                <MapPin className="w-6 h-6 text-white group-hover:text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-1">Address</h4>
                <p className="text-gray-400 leading-relaxed">
                  <a href="https://maps.app.goo.gl/8PEnhvL2PtgVqCQ28">
                  Ambikanagar soc, B/248, Jeram Morar ni Vadi, <br/>
                  Hariom Society, Katargam, Surat, Gujarat 395004
                  </a>
                  
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-white group-hover:text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-1">Email Us</h4>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  siyalasertech13@gmail.com
                </p>
                <p className="text-gray-500 text-sm">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-white group-hover:text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-1">Call Us</h4>
                <p className="text-gray-400 group-hover:text-white transition-colors">
                  +91 97127 91101
                </p>
                <p className="text-gray-500 text-sm">Mon-Sat, 9am - 7pm IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: The Form --- */}
        <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          
          {/* MAINTENANCE OVERLAY */}
          {formStatus === 'maintenance' && (
            <div className="absolute inset-0 bg-zinc-950 z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <AlertTriangle className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Feature Under Maintenance</h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Our direct messaging server is currently being upgraded. Please connect with us directly for an instant response.
              </p>
              
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <a 
                  href="https://wa.me/919712791101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a 
                  href="mailto:siyalasertech13@gmail.com"
                  className="w-full border border-white/20 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>

              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-xs uppercase tracking-widest text-gray-600 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 ..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Email Address</label>
              <input 
                type="email" 
                placeholder="john@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1 font-bold">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'loading'}
              className="w-full bg-white text-black font-display font-bold py-4 rounded-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {formStatus === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;