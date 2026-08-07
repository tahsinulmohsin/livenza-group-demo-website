import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function TileGrid({ subsidiaries, onTileClick }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="subsidiaries-grid"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Parallax decorative blobs */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-full blur-3xl opacity-50"
        style={{ y: bgY }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-full blur-3xl opacity-40"
        style={{ y: bgY }}
      />

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="text-xs font-semibold tracking-[0.2em] text-livenza-sub dark:text-white/40 uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            className="mt-3 font-bold text-livenza-primary dark:text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Companies & Divisions
          </motion.h2>
          <motion.p
            className="mt-4 text-livenza-sub dark:text-white/50 text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Accelerating sustainable prosperity through practical innovation
            across clean energy, mobility, manufacturing, and retail.
          </motion.p>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-livenza-primary to-emerald-500 dark:from-blue-400 dark:to-emerald-400"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Grid */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {subsidiaries.map((sub, index) => (
          <SubsidiaryTile
            key={sub.id}
            subsidiary={sub}
            index={index}
            onClick={() => onTileClick(sub)}
          />
        ))}
      </motion.div>
    </section>
  );
}

function SubsidiaryTile({ subsidiary, onClick, index }) {
  const { name, sector, tagline, color, gradient, icon: Icon } = subsidiary;
  const tileRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
    <motion.div
      ref={tileRef}
      variants={tileVariants}
      whileHover={{ scale: 1.025, y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative group cursor-pointer rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/60 dark:hover:shadow-black/30 transition-all duration-500"
      style={{
        perspective: 800,
        rotateX,
        translateZ,
      }}
    >
      {/* Top accent bar with animated width on scroll */}
      <motion.div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: "easeOut" }}
      />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          {/* Icon with reveal animation */}
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: `${color}12` }}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.05, type: "spring", stiffness: 200 }}
          >
            <Icon
              className="w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300"
              style={{ color }}
            />
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 group-hover:bg-livenza-primary dark:group-hover:bg-white flex items-center justify-center transition-all duration-300 flex-shrink-0"
            initial={false}
          >
            <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-white/30 group-hover:text-white dark:group-hover:text-livenza-primary group-hover:rotate-45 transition-all duration-300" />
          </motion.div>
        </div>

        {/* Sector label */}
        <div className="mt-5">
          <span
            className="text-[11px] font-semibold tracking-[0.15em] uppercase"
            style={{ color }}
          >
            {sector}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-2 font-bold text-livenza-primary dark:text-white text-xl sm:text-2xl leading-snug group-hover:text-livenza-dark dark:group-hover:text-white transition-colors duration-300">
          {name}
        </h3>

        {/* Tagline */}
        <p className="mt-3 text-livenza-sub dark:text-white/45 text-sm sm:text-base leading-relaxed line-clamp-2">
          {tagline}
        </p>

        {/* Bottom decoration with animated reveal */}
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06] group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-colors duration-300" />
          <span className="text-[11px] text-gray-300 dark:text-white/20 group-hover:text-gray-400 dark:group-hover:text-white/40 font-medium tracking-wide transition-colors duration-300">
            View Details
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TileGrid;
