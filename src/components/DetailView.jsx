import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ExternalLink, Building2, Target, Sparkles } from "lucide-react";
import { getIcon } from "../utils/iconMap";

function DetailView({ subsidiary, onBack }) {
  const {
    name,
    sector,
    tagline,
    summary,
    url,
    color,
    gradient,
    icon: iconName,
  } = subsidiary;

  const Icon = getIcon(iconName);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="min-h-screen pt-24 sm:pt-28 pb-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button (mobile) */}
        <motion.button
          onClick={onBack}
          className="sm:hidden flex items-center gap-2 text-livenza-sub dark:text-white/50 hover:text-livenza-primary dark:hover:text-white transition-colors duration-300 mb-6 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Group Overview</span>
        </motion.button>

        {/* Header section with scroll scale effect and background image */}
        <motion.div
          ref={headerRef}
          className="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-white/[0.06] shadow-sm min-h-[300px] sm:min-h-[400px] flex flex-col justify-end"
          style={{ scale: headerScale, opacity: headerOpacity }}
        >
          {/* Detail Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${subsidiary.detailImageUrl})` }}
          />


          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative p-6 sm:p-10 md:p-14 z-10 w-full text-left">
            {/* Sector badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/20 backdrop-blur-md border border-white/20"
              >
                <Icon className="w-3.5 h-3.5 text-white" />
                {sector}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="mt-5 font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mt-3 sm:mt-4 text-lg sm:text-xl font-medium leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {tagline}
            </motion.p>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main summary — scroll reveal */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-white/[0.04] rounded-3xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6 sm:p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${color}12` }}
              >
                <Building2 className="w-4 h-4" style={{ color }} />
              </div>
              <h2 className="font-semibold text-livenza-primary dark:text-white text-lg">
                About This Company
              </h2>
            </motion.div>

            <motion.p
              className="text-livenza-sub dark:text-white/50 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {summary}
            </motion.p>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-50 dark:border-white/[0.04]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r ${gradient} text-white font-semibold text-sm sm:text-base rounded-xl hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  boxShadow: `0 8px 30px ${color}25`,
                }}
              >
                <span>Visit {name.split("—")[0].trim()}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Side info cards — staggered scroll reveals */}
          <div className="space-y-6">
            <motion.div
              className="bg-white dark:bg-white/[0.04] rounded-3xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${color}12` }}
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                >
                  <Target className="w-4 h-4" style={{ color }} />
                </motion.div>
                <h3 className="font-semibold text-livenza-primary dark:text-white text-sm">
                  Focus Area
                </h3>
              </div>
              <p className="text-livenza-sub dark:text-white/45 text-sm leading-relaxed">
                {tagline}
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-white/[0.04] rounded-3xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${color}12` }}
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                >
                  <Sparkles className="w-4 h-4" style={{ color }} />
                </motion.div>
                <h3 className="font-semibold text-livenza-primary dark:text-white text-sm">
                  Part of Livenza Group
                </h3>
              </div>
              <p className="text-livenza-sub dark:text-white/45 text-sm leading-relaxed">
                Contributing to the group's mission of accelerating sustainable
                prosperity through practical innovation across multiple sectors.
              </p>
            </motion.div>

            {/* Vision quote card with scroll reveal */}
            <motion.div
              className={`rounded-3xl bg-gradient-to-br ${gradient} p-6 text-white overflow-hidden relative`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
              <p className="font-semibold text-sm">
                "To build a multi-sector platform enabling net-zero living for
                industries and communities."
              </p>
              <p className="mt-3 text-xs opacity-80 font-medium">
                — Livenza Group Vision
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailView;
