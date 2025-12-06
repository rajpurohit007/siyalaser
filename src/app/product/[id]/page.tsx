import { products } from "@/data/products";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { MessageCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const themeColor = 
    product.accentColor === 'cyan' ? 'text-cyan-400' :
    product.accentColor === 'purple' ? 'text-purple-400' :
    'text-amber-400';

  const borderColor = 
    product.accentColor === 'cyan' ? 'border-cyan-500/30' :
    product.accentColor === 'purple' ? 'border-purple-500/30' :
    'border-amber-500/30';

  return (
    <main className="min-h-screen bg-luxe-dark text-white selection:bg-cyan-500/30 flex flex-col justify-between">
      <Navbar />
      
      {/* UPDATES:
         1. pt-32 lg:pt-40 -> Pushes the whole section down (Clears Navbar)
         2. pb-12 -> Bottom spacing
      */}
      <section className="pt-32 pb-12 lg:pt-40 px-6 relative overflow-hidden flex-grow flex flex-col justify-center">
         
         {/* Background Glow */}
         <div className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-[120px] rounded-full bg-white pointer-events-none`}></div>

         {/* UPDATES:
            1. gap-12 lg:gap-20 -> Restored the wider gap between text and image
         */}
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            
            {/* --- IMAGE SECTION --- */}
            {/* UPDATES:
               1. h-[320px] -> Fixed, smaller height (prevents it from getting too big)
               2. w-auto -> Allows width to adjust based on height
               3. aspect-square removed -> Back to natural shape or controlled box
            */}
            <div className={`relative h-[300px] lg:h-[320px] w-full max-w-md mx-auto bg-zinc-900/50 rounded-3xl border ${borderColor} flex items-center justify-center p-0 overflow-hidden`}>
               
               <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none`}></div>
               
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
               />
            </div>

            {/* --- INFO SECTION --- */}
            <div>
               <Link href="/#products" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4 text-xs uppercase tracking-widest">
                  <ArrowLeft className="w-4 h-4" /> Back to Products
               </Link>

               <h1 className="text-3xl md:text-5xl font-display font-bold mb-2">{product.name}</h1>
               <p className={`text-lg font-serif mb-6 opacity-80 ${themeColor}`}>{product.tagline}</p>
               
               <p className="text-gray-400 text-base leading-relaxed mb-8 border-l-2 border-white/10 pl-6 max-w-xl">
                 {product.description}
               </p>

               {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/919712791101?text=Hi, I am interested in the ${product.name} machine.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-200 hover:scale-[1.02]"
                  >
                     <MessageCircle className="w-5 h-5" />
                     Inquire via WhatsApp
                  </a>
                  
                  <div className="flex-1 flex items-center justify-center gap-2 text-gray-400 text-sm">
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                     Global Support Available
                  </div>
               </div>

            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}