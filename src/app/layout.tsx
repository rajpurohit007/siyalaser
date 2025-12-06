// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Cinzel } from "next/font/google"; 
import "./globals.css";

// 1. Configure Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '700']
});

// 2. SEO Configuration
export const metadata: Metadata = {
  // Main Title (Browser Tab)
  title: "Siya Laser Tech | Diamond Laser Cutting & 4P Processing Machines",
  
  // Search Engine Description
  description: "Siya Laser Tech is a leading manufacturer of high-precision diamond laser cutting machines, 4P processing systems, and fiber laser markers. We specialize in green/IR laser diodes, optics supply, and expert diode repair services in Surat, India.",
  
  // Keywords for Google/Bing
  keywords: [
    // Brand
    "Siya Laser Tech", "Siya Laser", "Siya Trading", 
    // Core Machines
    "Diamond Cutting Laser", "Diamond Sawing Machine", "4P Laser Machine", "4P Processing System", "Multi Sawing Laser", "Fancy Galvo", "Laser Marking Machine", "CNC Diamond Laser",
    // Technology
    "Fiber Laser", "Green Laser 532nm", "IR Laser 1064nm", "Diode Pumped Solid State Laser", "DPSS Laser",
    // Components & Parts
    "High Power Laser Diode", "Laser Diode Repair", "Laser Optics", "Laser Mirrors", "CNC Laser Controller", "Beam Expander",
    // Services
    "Diamond Processing", "Laser Marking Service", "Diode Repair Service", "Industrial Laser Automation",
    // Location/Industry
    "Diamond Industry Surat", "Laser Machine Manufacturer India", "Diamond Technology Gujarat"
  ],

  // Social Media Previews (OpenGraph)
  openGraph: {
    title: "Siya Laser Tech - Precision Diamond Machinery",
    description: "Innovating the diamond industry with advanced 4P, Multi-Sawing, and Galvo laser solutions.",
    url: "https://siyalaser.com", // Replace with your actual domain when live
    siteName: "Siya Laser Tech",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Siya Laser Tech | Advanced Laser Solutions",
    description: "Expert manufacturer of diamond cutting and processing laser machinery.",
  },

  // Robot Crawling Permissions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-serif bg-zinc-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}