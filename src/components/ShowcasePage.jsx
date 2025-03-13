import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import InteractiveScene from './3D/InteractiveScene';
import Navbar from './Navbar';

const projects = [
  {
    id: 1,
    title: "Real-time Analytics Dashboard",
    description: "Interactive data visualization with AI-powered insights and predictive analytics",
    stats: { accuracy: "99.9%", speed: "<0.1s", users: "10k+" },
    tags: ["AI", "Real-time", "Analytics"]
  },
  {
    id: 2,
    title: "Smart Automation Platform",
    description: "Automated workflow management with machine learning optimization",
    stats: { efficiency: "85%", tasks: "1M+", savings: "60%" },
    tags: ["Automation", "ML", "Workflow"]
  },
  {
    id: 3,
    title: "Predictive Intelligence Engine",
    description: "Advanced forecasting system with deep learning capabilities",
    stats: { precision: "95%", models: "50+", scale: "∞" },
    tags: ["AI", "Forecasting", "Deep Learning"]
  },
  {
    id: 4,
    title: "Data Integration Hub",
    description: "Seamless integration of multiple data sources with real-time synchronization",
    stats: { sources: "100+", uptime: "99.99%", sync: "5ms" },
    tags: ["Integration", "Real-time", "Sync"]
  }
];

const features = [
  { id: 1, value: "500K+", label: "Data Points Processed" },
  { id: 2, value: "99.9%", label: "Accuracy Rate" },
  { id: 3, value: "50ms", label: "Response Time" },
  { id: 4, value: "24/7", label: "Monitoring" }
];

const achievements = [
  { 
    icon: "🚀",
    title: "Performance Boost",
    value: "10x",
    description: "Faster data processing"
  },
  {
    icon: "🎯",
    title: "Accuracy Rate",
    value: "99.9%",
    description: "In predictive analytics"
  },
  {
    icon: "⚡",
    title: "Real-time Updates",
    value: "<50ms",
    description: "Response time"
  },
  {
    icon: "🔄",
    title: "Data Syncs",
    value: "24/7",
    description: "Continuous integration"
  }
];

const techStack = [
  "Machine Learning", "Neural Networks", "Big Data", 
  "Cloud Computing", "Real-time Analytics", "Edge Computing",
  "Blockchain", "IoT Integration", "Quantum Computing"
];

export default function ShowcasePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-800">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-800/50" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          {/* Add flowing gradient lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full"
              style={{ top: `${20 * i}%` }}
              animate={{
                x: [-1000, 1000],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-32 relative z-10">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Next-Gen Analytics Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming complex data into actionable insights through advanced AI and real-time analytics
              </p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-[500px] mx-auto aspect-square mt-20"
            >
              {/* Main Circle Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/5 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-white/5" />
                <div className="absolute inset-8 rounded-full border border-white/5" />

                {/* Center Content */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                </motion.div>

                {/* Achievement Cards */}
                {achievements.map((achievement, index) => {
                  // Calculate positions for each card
                  let position = {};
                  
                  switch(index) {
                    case 0: // Top card
                      position = {
                        top: '5%',
                        left: '40%',
                        transform: 'translate(-50%, 0)'
                      };
                      break;
                    case 1: // Right card
                      position = {
                        top: '35%',
                        right: '5%',
                        transform: 'translate(0, -50%)'
                      };
                      break;
                    case 2: // Bottom card
                      position = {
                        bottom: '5%',
                        left: '40%',
                        transform: 'translate(-50%, 0)'
                      };
                      break;
                    case 3: // Left card
                      position = {
                        top: '35%',
                        left: '5%',
                        transform: 'translate(0, -50%)'
                      };
                      break;
                  }
                  
                  return (
                    <motion.div
                      key={achievement.title}
                      className="absolute bg-white/10 backdrop-blur-md rounded-lg p-2 w-24"
                      style={position}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-lg mb-0.5">{achievement.icon}</div>
                      <div className="text-base font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {achievement.value}
                      </div>
                      <div className="text-xs text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {achievement.title}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {achievement.description}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0">
                  {achievements.map((_, index) => {
                    let coordinates = {};
                    switch(index) {
                      case 0: // Top
                        coordinates = { x2: '50%', y2: '15%' };
                        break;
                      case 1: // Right
                        coordinates = { x2: '85%', y2: '50%' };
                        break;
                      case 2: // Bottom
                        coordinates = { x2: '50%', y2: '85%' };
                        break;
                      case 3: // Left
                        coordinates = { x2: '15%', y2: '50%' };
                        break;
                    }
                    
                    return (
                      <motion.line
                        key={index}
                        x1="50%"
                        y1="50%"
                        {...coordinates}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.value}
                </motion.div>
                <div className="text-sm text-gray-300 mt-2">{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
         {/* After features grid, before projects section */}
      <motion.div 
        className="mt-32 mb-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl backdrop-blur-sm" />
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative p-8 md:p-12">
            {/* Left Column */}
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Transform Your Data Into Insights
              </motion.h2>
              
              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Precise Analytics with 99.9% accuracy" },
                  { icon: "⚡", text: "Real-time data processing and visualization" },
                  { icon: "🔒", text: "Enterprise-grade security and compliance" },
                  { icon: "🔄", text: "Seamless integration with existing systems" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-medium backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column - Animated Stats */}
            <div className="relative">
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  { label: "Data Points", value: "1B+", color: "from-purple-400" },
                  { label: "Processing Speed", value: "<10ms", color: "from-blue-400" },
                  { label: "Success Rate", value: "99.9%", color: "from-purple-400" },
                  { label: "Active Users", value: "100K+", color: "from-blue-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <motion.div 
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} to-white bg-clip-text text-transparent`}
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl -z-10 blur-xl" />
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-3xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      </section>

     

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-purple-300">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Experience Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
          >
            Interactive Experience
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Real-time Data Visualization</h3>
                <p className="text-gray-300">
                  Experience your data come to life with our interactive 3D visualization engine. Watch as complex data patterns emerge in real-time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Dynamic Interactions</h3>
                <p className="text-gray-300">
                  Interact with your data in three dimensions. Rotate, zoom, and explore patterns from every angle.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {['Rotate', 'Zoom', 'Pan', 'Filter', 'Analyze'].map((action, index) => (
                    <motion.button
                      key={action}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-200"
                    >
                      {action}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-300">AI-Powered Insights</h3>
                <p className="text-gray-300">
                  Our AI engine automatically detects patterns and anomalies, highlighting important insights in real-time.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Pattern Detection', value: '98%' },
                    { label: 'Anomaly Detection', value: '99.9%' },
                    { label: 'Processing Speed', value: '<10ms' },
                    { label: 'Accuracy Rate', value: '99.5%' }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-purple-300">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="h-[600px] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
              <Canvas>
                <InteractiveScene />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 