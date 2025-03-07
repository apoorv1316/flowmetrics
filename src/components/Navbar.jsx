import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.nav 
      className="fixed w-full z-50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <motion.div 
              className="text-white font-bold text-xl lg:text-2xl"
              whileHover={{ scale: 1.05 }}
            >
              Analytics
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {["Home", "Features", "Showcase", "Pricing", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-300 transition-colors text-base lg:text-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-white">
                {item}
                </p>
              </motion.a>
            ))}
            
            <motion.button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white/10 "
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Features", "Showcase", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}