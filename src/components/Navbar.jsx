import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail, Moon, Sun } from "lucide-react";

function Navbar({ activeSubsidiary, onBack, darkMode, toggleDarkMode }) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-effect dark:bg-[#0B0F1A]/90 dark:border-white/5 border-b border-gray-100/50 transition-colors duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Back button or Logo */}
          <div className="flex items-center gap-3">
            <AnimatePresence mode="wait">
              {activeSubsidiary ? (
                <motion.button
                  key="back"
                  onClick={onBack}
                  className="flex items-center gap-2 text-livenza-primary dark:text-white/80 hover:text-livenza-sub dark:hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="hidden sm:inline font-medium text-sm">
                    Back to Group Overview
                  </span>
                </motion.button>
              ) : null}
            </AnimatePresence>

            <motion.a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (activeSubsidiary) onBack();
              }}
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/logo.png"
                alt="Livenza Group"
                className={`h-9 sm:h-11 w-auto object-contain transition-all duration-500 ${
                  darkMode ? "brightness-0 invert opacity-90" : ""
                }`}
              />
            </motion.a>
          </div>

          {/* Right: Dark mode toggle + Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-livenza-primary dark:text-white/70" />
              )}
            </button>

            {/* Contact */}
            <motion.a
              href="https://livenzagroup.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-livenza-primary dark:bg-white text-white dark:text-livenza-primary font-semibold text-xs sm:text-sm rounded-full hover:bg-livenza-dark dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-livenza-primary/20 dark:hover:shadow-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Contact</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
