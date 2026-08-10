import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

function ContactSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-xl my-20 border border-white/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-4 sm:p-8">
        
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col text-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1E293B]">Contact Us</h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
            Feel free to contact us. Livenza Group is a collective entity of
            sustainability-driven companies united under one ecosystem,
            dedicated to helping grow responsibly across multiple sectors.
          </p>

          <div className="space-y-6 mb-12">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1E293B] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B]">Phone</h4>
                <p className="text-gray-600 text-sm">09639272106</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1E293B] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B]">Email</h4>
                <p className="text-gray-600 text-sm">info@livenzagroup.com</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1E293B] mb-4">Addresses</h3>
          <hr className="border-gray-200 mb-6" />

          <div className="space-y-6">
            {/* Bangladesh */}
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0 leading-none">🇧🇩</div>
              <div>
                <h4 className="font-bold text-[#1E293B] mb-1">Bangladesh</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  Plot 24 & 26 (Canyon Tower) Sonargaon Janapath, Sector # 12, Uttara, Dhaka-1230, Bangladesh
                </p>
              </div>
            </div>

            {/* Hongkong */}
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0 leading-none">🇭🇰</div>
              <div>
                <h4 className="font-bold text-[#1E293B] mb-1">Hongkong</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  RM 509, 5/F the cloud 111 Tung Chau ST Tai Kok Tsui Hong Kong
                </p>
              </div>
            </div>

            {/* Canada */}
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0 leading-none">🇨🇦</div>
              <div>
                <h4 className="font-bold text-[#1E293B] mb-1">Canada</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  1467 West 57th Avenue, Vancouver, British Columbia, V6P 1T1, Canada
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-[#22272E] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Make an Appointment</h2>
          <p className="text-gray-400 text-sm mb-8">
            Feel free to contact with us, we don't spam your email
          </p>

          <form className="flex flex-col gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name *" 
              required
              className="w-full bg-white rounded-xl px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-livenza-primary transition-all shadow-sm"
            />
            <input 
              type="tel" 
              placeholder="Your phone *" 
              required
              className="w-full bg-white rounded-xl px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-livenza-primary transition-all shadow-sm"
            />
            <input 
              type="email" 
              placeholder="Email Here *" 
              required
              className="w-full bg-white rounded-xl px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-livenza-primary transition-all shadow-sm"
            />
            <input 
              type="text" 
              placeholder="subject" 
              className="w-full bg-white rounded-xl px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-livenza-primary transition-all shadow-sm"
            />
            <textarea 
              placeholder="Your Comment *" 
              required
              rows={4}
              className="w-full bg-white rounded-xl px-5 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-livenza-primary transition-all shadow-sm resize-none flex-1"
            />
            
            <div className="mt-4">
              <button 
                type="submit"
                className="inline-flex items-center gap-3 bg-white text-[#1E293B] font-bold py-3.5 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md group"
              >
                Send Message
                <div className="bg-[#1E293B] rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactSection;
