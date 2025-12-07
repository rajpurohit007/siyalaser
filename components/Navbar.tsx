// components/Navbar.tsx
"use client";

import { useState } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import Link from 'next/link'; // Ensure Link is imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Global", href: "/#global" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white bg-black/20 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        
        {/* Left Side: Logo (Now Clickable) */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl tracking-widest font-serif cursor-pointer select-none hover:opacity-80 transition-opacity"
        >
          <Gem className="w-5 h-5 text-gray-200" />
          <span>Siya Laser Tech</span>
        </Link>

        {/* Right Side: Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm tracking-wider uppercase hover:text-cyan-400 hover:underline hover:underline-offset-4 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Mobile Menu Icon */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden opacity-80 hover:opacity-100 transition p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 opacity-80 hover:opacity-100 hover:rotate-90 transition-all duration-300 text-white"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Mobile Links */}
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-serif text-white hover:text-cyan-400 transition-colors tracking-wide"
          >
            {link.name}
          </Link>
        ))}

        {/* Decorative Element */}
        <div className="absolute bottom-10 opacity-30">
          <Gem className="w-12 h-12 text-cyan-900" />
        </div>
      </div>
    </>
  );
};

export default Navbar;