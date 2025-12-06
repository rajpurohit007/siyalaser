// components/Hero.tsx
"use client";

import { ArrowRight, MessageCircle, Mail } from "lucide-react"; 
import Link from "next/link";
// FIXED: Reverted to standard import to prevent 3D scene from disappearing
import DiamondScene from "./DiamondScene"; 

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxe-dark flex flex-col justify-center items-center">
      
      {/* ---- LAYER 1: The 3D Scene ---- */}
      <DiamondScene />

      {/* ---- LAYER 2: Background Text ---- */}
      <div className="absolute inset-0 flex items-center justify-between select-none pointer-events-none px-4 z-30">
        <h2 className="text-[15vw] leading-none opacity-10 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent font-serif">
          Siya
        </h2>
        <h2 className="text-[15vw] leading-none opacity-10 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent font-serif text-right">
          Laser
        </h2>
      </div>

      {/* ---- LAYER 3: Foreground Content ---- */}
      <div className="relative z-40 text-center flex flex-col items-center h-full w-full justify-between pt-32 pb-8 px-4">
        
        {/* Headline */}
        <h1 className="font-serif  text-4xl md:text-6xl lg:text-5xl tracking-wide max-w-5xl mt-8 drop-shadow-lg text-white uppercase leading-tight">
          Diode Technology
        </h1>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Bottom Area Structure */}
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-end justify-between gap-8 mb-12 relative">
            
            {/* --- LEFT SIDE: WhatsApp & Email Buttons --- */}
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full md:w-auto">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919712791101" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 bg-black/50 backdrop-blur-sm text-white px-6 py-3 flex items-center justify-center gap-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition shadow-lg w-full md:w-auto font-display font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {/* Email */}
              <a 
                href="mailto:siyalasertech13@gmail.com" 
                className="border border-white/30 bg-black/50 backdrop-blur-sm text-white px-6 py-3 flex items-center justify-center gap-3 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition shadow-lg w-full md:w-auto font-display font-bold"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            {/* --- RIGHT SIDE: Get a Quote Button --- */}
            <Link 
                href="#contact"
                className="bg-white text-black px-8 py-4 flex items-center justify-center gap-4 uppercase tracking-widest text-xs hover:bg-cyan-400 hover:text-black transition shadow-lg w-full sm:w-auto font-display font-bold cursor-pointer"
              >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
              </Link>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;