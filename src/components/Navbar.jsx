import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";

function Navbar({ activeSubsidiary, onBack }) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-100/50 transition-colors duration-500"
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
                  className="flex items-center gap-2 text-livenza-primary hover:text-livenza-sub transition-colors duration-300 group"
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
                className={`h-9 sm:h-11 w-auto object-contain transition-all duration-500`}
              />
            </motion.a>
          </div>

          {/* Right: Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Contact */}
            <motion.a
              href="https://livenzagroup.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-livenza-primary text-white font-semibold text-xs sm:text-sm rounded-full hover:bg-livenza-dark transition-all duration-300 hover:shadow-lg hover:shadow-livenza-primary/20"
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
