import { motion } from "framer-motion";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import Faq from './Faq';
import FeaturesDashboard from './FeaturesDashboard';
import Footer from './Footer';
export default function HomePage() {
  return (
    
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-blue-900 to-purple-800 text-white">
      {/* Shared animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesDashboard />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
} 



