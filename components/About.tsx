// components/About.tsx
import { Cpu, ShieldCheck, Users, Scale } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We are committed to continuous innovation, ensuring our products incorporate the latest advancements in laser technology.",
    icon: <Cpu className="w-6 h-6 text-white" />,
  },
  {
    title: "Quality",
    description: "Quality is at the heart of everything we do. We rigorously test our machines to ensure they meet the highest standards.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Customer Focus",
    description: "We work closely with customers to understand their needs and provide tailored solutions that drive their success.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Integrity",
    description: "We conduct our business with integrity, transparency, and a commitment to ethical practices.",
    icon: <Scale className="w-6 h-6 text-white" />,
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-zinc-900 py-24 px-4 text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT SIDE: Who We Are Story --- */}
        <div className="space-y-8">
          <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">
            Pioneers in laser technology, revolutionizing the diamond industry.
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            At Siya Laser Tech, our journey began with a vision to provide innovative, high-precision laser machines that empower businesses to achieve unparalleled excellence in diamond cutting.
          </p>
          <div className="h-0.5 w-24 bg-white/20 mt-8"></div>
        </div>

        {/* --- RIGHT SIDE: Values Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="p-8 border border-white/10 bg-white/5 hover:bg-white/10  transition duration-300 rounded-sm group"
            >
              <div className="mb-4 p-3 bg-white/10 w-fit rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {/* To make the icon change color on hover, we can clone it or use CSS. 
                    Simple approach: The parent div handles bg, the icon inherits color appropriately if setup right. 
                    For now, keep simple white icon inside. */}
                 <div className="group-hover:text-black transition-colors">
                    {item.icon}
                 </div>
              </div>
              <h4 className="text-xl font-serif mb-3">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;