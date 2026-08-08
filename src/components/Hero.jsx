import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Leaf, Building2, Globe2 } from "lucide-react";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToGrid = () => {
    const grid = document.getElementById("subsidiaries-grid");
    if (grid) grid.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 dot-pattern opacity-40 dark:opacity-10"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 dark:from-emerald-900/15 dark:to-teal-900/15 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-50/20 to-violet-50/20 dark:from-amber-900/10 dark:to-violet-900/10 rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />

      {/* Floating decorative icons */}
      <motion.div
        className="hidden lg:block absolute top-32 right-12 text-livenza-primary/5 dark:text-white/5"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Leaf className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute bottom-32 left-8 text-livenza-primary/5 dark:text-white/5"
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Building2 className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-40 left-[8%] text-livenza-primary/5 dark:text-white/5"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Globe2 className="w-10 h-10" />
      </motion.div>

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-livenza-primary/5 dark:bg-white/5 border border-livenza-primary/10 dark:border-white/10 text-livenza-sub dark:text-white/60 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Sustainability-Driven Ecosystem
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mt-8 font-bold text-livenza-primary dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Life, Vitality,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-livenza-green to-livenza-blue bg-clip-text text-transparent">
              Flow, Growth
            </span>
            <motion.span
              className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-livenza-green/40 to-livenza-blue/40 rounded-3xl -z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 sm:mt-8 text-livenza-sub dark:text-white/50 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Livenza Group is a collective of sustainability-driven companies united under one ecosystem, dedicated to helping industries grow responsibly. We operate across multiple sectors — from renewable energy and eco-manufacturing to electric mobility, green construction, and sustainable retail — all connected by a shared mission to make sustainability effortless and accessible.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {[
            { value: "5+", label: "Companies" },
            { value: "4", label: "Sectors" },
            { value: "2", label: "Countries" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-livenza-primary dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-livenza-sub dark:text-white/40 font-medium mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToGrid}
          className="mt-14 sm:mt-20 inline-flex flex-col items-center gap-2 text-livenza-sub dark:text-white/40 hover:text-livenza-primary dark:hover:text-white transition-colors duration-300 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Explore Our Companies
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
