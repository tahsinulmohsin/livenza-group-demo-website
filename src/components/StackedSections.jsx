import { motion } from "framer-motion";
import { getIcon } from "../utils/iconMap";
import { ExternalLink, ChevronRight } from "lucide-react";

function StackedSections({ subsidiaries, onTileClick }) {
  return (
    <div className="w-full flex flex-col">
      {subsidiaries.map((sub, index) => {
        const isEven = index % 2 === 0;
        const Icon = getIcon(sub.icon);

        return (
          <section
            key={sub.id}
            className={`w-full min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-start pt-20 md:pt-28 pb-10 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500 ${
              isEven
                ? "bg-white dark:bg-[#0B0F1A]"
                : "bg-[#f5f5f7] dark:bg-[#111520]"
            }`}
          >
            {/* Background ambient glow based on subsidiary color */}
            <div 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-64 blur-[100px] opacity-20 dark:opacity-[0.15] pointer-events-none rounded-full"
              style={{ backgroundColor: sub.color }}
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
              {/* Sector / Overline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-sm"
                  style={{ color: sub.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold tracking-widest uppercase text-livenza-sub dark:text-white/60">
                  {sub.sector}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-livenza-primary dark:text-white tracking-tight"
              >
                {sub.name}
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-3xl leading-relaxed font-medium"
              >
                {sub.tagline}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
              >
                {/* Learn More Button (Solid) */}
                <button
                  onClick={() => onTileClick(sub)}
                  className="group relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-[15px] hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto"
                  style={{ backgroundColor: sub.color }}
                >
                  <span className="relative z-10">Learn more</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Visit Website Button (Outline) */}
                <a
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border-2 border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-white text-livenza-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-current transition-colors" />
                </a>
              </motion.div>
            </div>

            {/* Spacious Placeholder for Product Image/Cutout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-16 md:mt-24 w-full max-w-4xl flex-1 flex flex-col justify-end"
            >
              <div 
                className="w-full h-64 md:h-96 rounded-t-3xl sm:rounded-3xl border-t border-x sm:border-b border-gray-200/60 dark:border-white/10 bg-gradient-to-b from-gray-100/50 to-transparent dark:from-white/5 dark:to-transparent flex items-center justify-center relative overflow-hidden group"
              >
                {/* Simulated reflections/glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 pointer-events-none" />
                
                <span className="text-gray-400 dark:text-gray-600 font-medium text-sm md:text-base tracking-widest uppercase">
                  Product / Showcase Image Placeholder
                </span>
              </div>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}

export default StackedSections;
