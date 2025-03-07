import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-900 to-purple-800 text-white px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="relative z-10 w-full mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-block mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm md:text-base font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Next Generation Analytics Platform
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Track Your Metrics. <br className="hidden sm:block" /> Optimize Performance.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 opacity-80 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Powerful analytics to help you make smarter business decisions.
          Gain insights, track progress, and achieve your goals faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            className="px-6 py-3 sm:px-8 md:px-10 lg:px-12 md:py-4 text-base md:text-lg lg:text-xl bg-white text-white-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="px-6 py-3 sm:px-8 md:px-10 lg:px-12 md:py-4 text-base md:text-lg lg:text-xl bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "98%", label: "Satisfaction" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 lg:p-8"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold">{stat.value}</div>
              <div className="text-xs md:text-sm lg:text-base opacity-70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Image (Dashboard Mockup) - Improved version */}
        <motion.div
          className="mt-16 relative w-full max-w-4xl lg:max-w-5xl mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Subtle glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl opacity-50 rounded-2xl transform scale-105 -z-10"></div>
          
          {/* Main dashboard image with better styling */}
          <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-purple-900/80 backdrop-blur-sm"></div>
              <img
                src="https://cdn.prod.website-files.com/66adf3f56fcddd56d4f6b0eb/66b4a5763f3175cf91c5fb71_dash%20(1).svg"
                alt="Dashboard Preview"
                className="relative w-full object-cover"
              />
              
            {/* Subtle overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative elements - more subtle and integrated */}
          <motion.div
            className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
          </motion.div>
          
          {/* Notification badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Live Data</span>
          </motion.div>
          
          {/* Floating card - more integrated with the design */}
          <motion.div
            className="absolute top-1/3 -right-10 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-xl hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}
