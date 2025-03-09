import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechVision",
    text: "This analytics platform has completely transformed how we make decisions. The real-time data visualization allows us to spot trends instantly and take action before our competitors. The team behind this product is incredibly responsive and has added features based on our feedback.",
    image: "https://placehold.co/400x400/2563eb/FFFFFF?text=John+Doe",
    company: "TechVision",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "CTO, InnovateCorp",
    text: "As someone who's tried countless analytics tools, I can confidently say this platform stands out from the crowd. The interface is intuitive yet powerful, allowing both technical and non-technical team members to extract valuable insights. The customizable dashboards have become central to our morning meetings.",
    image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=Sarah+Johnson",
    company: "InnovateCorp",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Data Science Lead, FutureMetrics",
    text: "The depth of analysis possible with this platform is remarkable. We've uncovered patterns in our data that were previously invisible to us. The AI-powered recommendations have directly contributed to a 27% increase in our conversion rates. The onboarding process was smooth and efficient.",
    image: "https://placehold.co/400x400/EC4899/FFFFFF?text=Michael+Chen",
    company: "FutureMetrics",
    rating: 4,
  },
  {
    name: "Aisha Patel",
    position: "Marketing Director, GrowthGenius",
    text: "This platform has bridged the gap between our marketing and analytics teams. We can now trace the customer journey from first touch to conversion with unprecedented clarity. The ability to create shareable reports has improved our communication with stakeholders.",
    image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=Aisha+Patel",
    company: "GrowthGenius",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      id="testimonials" 
      className="py-20 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Users Say
        </motion.h2>
        
        <div className="relative">         
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-6 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 rounded-full transform scale-110"></div>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white/20 relative z-10"
                    />
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      {/* Star Rating */}
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-white/80 text-sm sm:text-base">{testimonials[currentIndex].position}</p>
                    <div className="mt-3 sm:mt-4 flex items-center">
                      <div className="h-1 w-8 sm:w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <p className="text-white/60 text-xs sm:text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-6 sm:w-8' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}