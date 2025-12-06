// components/Global.tsx
import { MapPin, Server, Cpu, Globe } from "lucide-react";

const stats = [
  { 
    label: "Cities Served", 
    value: "10+", 
    icon: <Globe className="w-6 h-6 text-cyan-400" /> 
  },
  { 
    label: "Systems Installed", 
    value: "65+", 
    icon: <Server className="w-6 h-6 text-purple-400" /> 
  },
  { 
    label: "Diodes Installed", 
    value: "1000+", 
    icon: <Cpu className="w-6 h-6 text-emerald-400" /> 
  },
];

const cities = [
  "Mumbai", "Surat", "Ahmedabad", "Rajkot", "Bhavnagar", 
  "Kanpur", "Navsari", "Botad", "Palanpur", "Palitana", "Ugamedi"
];

const Global = () => {
  return (
    <section id="global" className="bg-zinc-950 py-32 px-4 relative overflow-hidden text-white border-t border-white/5">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT COLUMN: Story & Stats --- */}
        <div>
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 font-bold flex items-center gap-3">
            <span className="w-8 h-px bg-gray-500"></span>
            Global Standards
          </h2>
          
          <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            National Presence, <br />
            <span className="text-gray-500 italic">World-Class Tech.</span>
          </h3>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
            Siya Laser Tech has established a robust network across India's key industrial hubs. 
            From the diamond capital of Surat to the manufacturing centers of Kanpur, our machinery is the silent engine behind your success.
          </p>

          {/* Vertical Stats Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 mb-1 opacity-80">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: City Network Grid --- */}
        <div className="relative">
           {/* Decorative corner borders */}
           <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/20 rounded-tl-lg"></div>
           <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/20 rounded-br-lg"></div>

           <div className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
                 <MapPin className="w-4 h-4" />
                 Active Locations Network
              </h4>

              <div className="flex flex-wrap gap-3">
                {cities.map((city, i) => (
                  <div 
                    key={i} 
                    className="group relative cursor-default"
                  >
                    <div className="absolute inset-0 bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    <div className="relative px-6 py-3 border border-white/10 bg-zinc-900 rounded-full text-sm text-gray-300 group-hover:border-cyan-500/50 group-hover:text-white transition-all duration-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,1)] transition-all"></span>
                      {city}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status Indicator at bottom */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                 <span>System Status: Online</span>
                 <span className="animate-pulse text-emerald-500">● Operational</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Global;