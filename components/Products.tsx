// components/Products.tsx
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/products'; // 1. Import from data file

const Products = () => {
  return (
    <section id="products" className="bg-zinc-950 py-32 px-4 relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 font-bold">
            Our Hardware
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Cutting-Edge Solutions
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Engineered for perfection. Explore our flagship machines designed to redefine precision in the diamond industry.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            // Determine glow color based on accent
            const glowClass = 
                product.accentColor === 'cyan' ? "group-hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.5)]" :
                product.accentColor === 'purple' ? "group-hover:shadow-[0_0_50px_-10px_rgba(192,132,252,0.5)]" :
                "group-hover:shadow-[0_0_50px_-10px_rgba(251,191,36,0.5)]";
            
            const bgGradient = 
                product.accentColor === 'cyan' ? "from-cyan-400/30 to-blue-600/30" :
                product.accentColor === 'purple' ? "from-purple-400/30 to-pink-600/30" :
                "from-amber-400/30 to-orange-600/30";

            return (
            <Link 
              key={product.id}
              href={`/product/${product.id}`} // 2. Link to the dynamic page
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 cursor-pointer ${glowClass}`}
            >
              
              {/* Tech Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none`}></div>

              <div className="relative p-8 flex flex-col h-full">
                
                {/* Product Image */}
                <div className="relative h-[250px] lg:h-[300px] w-full mb-8 flex items-center justify-center">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                      loading="lazy" // Explicitly enable lazy loading
                      placeholder="empty" // Since we don't have blur data, use empty
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-auto z-10">
                  <div className="flex items-end justify-between mb-2">
                    <h4 className="text-2xl lg:text-3xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h4>
                    <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-400 text-xs lg:text-sm tracking-wider uppercase font-medium">
                    {product.tagline}
                  </p>
                </div>
                
              </div>
            </Link>
          )})}
        </div>

      </div>
    </section>
  );
};

export default Products;