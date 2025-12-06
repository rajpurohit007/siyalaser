// components/Services.tsx
import { Zap, ShoppingBag, Wrench, Aperture, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Diamond Cutting Laser",
    description: "Achieve minimal weight loss and maximum precision with our industry-leading laser cutting systems.",
    icon: <Zap className="w-8 h-8" />,
    color: "group-hover:text-cyan-400", // Laser Blue/Cyan
    border: "group-hover:border-cyan-400/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]"
  },
  {
    id: 2,
    title: "Diode Sell / Purchase",
    description: "Premium marketplace for high-power laser diodes. We facilitate seamless buying and selling of top-tier components.",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "group-hover:text-purple-400", // Royal Purple for Commerce
    border: "group-hover:border-purple-400/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)]"
  },
  {
    id: 3,
    title: "Diode Repair",
    description: "Downtime is costly. Our expert engineers provide rapid diagnostics and chip-level repair to restore full power.",
    icon: <Wrench className="w-8 h-8" />,
    color: "group-hover:text-amber-400", // Warning/Repair Amber
    border: "group-hover:border-amber-400/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]"
  },
  {
    id: 4,
    title: "Optics IR / Green",
    description: "High-fidelity optical lenses and mirrors specifically engineered for IR and Green laser wavelengths.",
    icon: <Aperture className="w-8 h-8" />,
    color: "group-hover:text-emerald-400", // Green for Optics
    border: "group-hover:border-emerald-400/50",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]"
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-luxe-dark py-32 px-4 relative overflow-hidden">
      
      {/* Background Gradient Blob for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Precision Services
          </h3>
          <p className="text-gray-400 text-lg font-light">
            Comprehensive solutions for the diamond industry, ensuring your machinery operates at the cutting edge of technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group relative p-10 border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 rounded-sm cursor-pointer ${service.border} ${service.glow}`}
            >
              
              {/* Header: Icon + Title */}
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 bg-white/5 rounded-full transition-colors duration-500 text-white ${service.color} group-hover:bg-white/10`}>
                  {service.icon}
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h4 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;