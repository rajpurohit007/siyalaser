// components/Footer.tsx
import { Gem, Heart, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 px-4 border-t border-white/5 text-gray-400 text-sm">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Grid Area - Changed to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Brand & Contact Actions */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl tracking-widest font-serif text-white">
              <Gem className="w-5 h-5 text-cyan-400" />
              <span>Siya Laser Tech</span>
            </div>
            <p className="leading-relaxed opacity-80 max-w-xs">
              Pioneering the future of diamond processing with state-of-the-art laser technology and precision engineering.
            </p>
            
            {/* Direct Contact Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://wa.me/919712791101" // Replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:siyalasertech13@gmail.com" // Replace with your email
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#products">Hardware Products</FooterLink>
              <FooterLink href="#global">Global Presence</FooterLink>
              <FooterLink href="#contact">Contact Support</FooterLink>
            </ul>
          </div>

          {/* 3. Core Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="#services">Diamond Sawing</FooterLink>
              <FooterLink href="#services">4P Processing</FooterLink>
              <FooterLink href="#services">Diode Repair</FooterLink>
              <FooterLink href="#services">Laser Marking</FooterLink>
              <FooterLink href="#services">Optics Supply</FooterLink>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2025 Siya Laser Tech. All rights reserved.</p>
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span>Made with precision in India</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};

// --- Helper Component ---
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-cyan-400 transition-colors block w-fit">
      {children}
    </Link>
  </li>
);

export default Footer;