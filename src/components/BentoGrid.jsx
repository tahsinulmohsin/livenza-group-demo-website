import { motion } from "framer-motion";
import { getIcon } from "../utils/iconMap";
import { ArrowUpRight } from "lucide-react";

function BentoGrid({ subsidiaries, onTileClick }) {
  // Bento Grid layout zigzag pattern:
  // Row 1: Span 2, Span 1
  // Row 2: Span 1, Span 2
  // Row 3: Span 2, Span 1
  const getSpanClasses = (index) => {
    const pattern = index % 4;
    if (pattern === 0 || pattern === 3) return "md:col-span-2";
    return "md:col-span-1";
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {subsidiaries.map((sub, index) => {
          const Icon = getIcon(sub.icon);
          const spanClass = getSpanClasses(index);

          return (
            <motion.div
              key={sub.id}
              onClick={() => onTileClick(sub)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
              whileHover={{ scale: 0.98 }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${spanClass}`}
            >
              {/* Background Image from API/Data */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${sub.bgImageUrl})` }}
              />
              
              
              {/* Gradient Overlay — only darkens the bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col h-full z-10">
                {/* Top Section: Icon & Sector */}
                <div className="flex items-start justify-between">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md shadow-lg border border-white/30"
                    style={{ color: sub.color || '#fff' }}
                  >
                    <Icon className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Section: Text */}
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase text-white bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                    {sub.sector}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                    {sub.name}
                  </h3>
                  <p className="text-white/80 text-lg font-medium line-clamp-2">
                    {sub.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default BentoGrid;
