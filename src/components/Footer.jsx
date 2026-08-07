import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-livenza-primary dark:bg-[#060911] text-white/80 border-t border-transparent dark:border-white/[0.04] transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/logo.png"
              alt="Livenza Group"
              className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
          </motion.div>

          {/* Center */}
          <motion.div
            className="flex items-center gap-6 text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { label: "About", href: "https://livenzagroup.com/about-us" },
              { label: "Companies", href: "https://livenzagroup.com/companies" },
              { label: "Sustainability", href: "https://livenzagroup.com/sustainability" },
              { label: "Careers", href: "https://livenzagroup.com/careers" },
              { label: "Contact", href: "https://livenzagroup.com/contact-us" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Right */}
          <motion.p
            className="text-xs text-white/40"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Livenza Group. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
