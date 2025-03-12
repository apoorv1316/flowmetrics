import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Add this counter animation component
const CounterAnimation = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ""));
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{value.includes('%') ? `${count}%` : count}</span>;
};

const features = [
  {
    id: 1,
    title: "Zero Configuration Setup",
    description: "Get started in minutes with our intelligent system that automatically configures and optimizes your workflow.",
    stats: {
      title: "Time Saved",
      value: "85%",
      subtext: "reduction in setup time"
    },
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Setup Time',
        data: [100, 80, 45, 30, 15],
        borderColor: 'rgba(168, 85, 247, 0.8)',
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        tension: 0.4,
        borderWidth: 3
      }]
    }
  },
  {
    id: 2,
    title: "Smart Automation",
    description: "Our AI-powered system learns from your patterns and automates repetitive tasks intelligently.",
    stats: {
      title: "Automation Rate",
      value: "95%",
      subtext: "tasks automated"
    },
    chartData: {
      labels: ['Manual', 'Automated'],
      datasets: [{
        data: [5, 95],
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(168, 85, 247, 0.8)',
        ]
      }]
    }
  },
  {
    id: 3,
    title: "Real-time Analytics",
    description: "Get instant insights with our powerful analytics engine that processes data in real-time.",
    stats: {
      title: "Processing Speed",
      value: "<1s",
      subtext: "response time"
    },
    chartData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Response Time',
        data: [0.8, 0.6, 0.7, 0.5, 0.4],
        backgroundColor: 'rgba(168, 85, 247, 0.6)',
      }]
    }
  }
];

export default function FeaturesDashboard() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1a1a1a',
        bodyColor: '#1a1a1a',
        padding: 12,
        borderColor: 'rgba(168, 85, 247, 0.3)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            weight: '500'
          }
        }
      }
    }
  };

  return (
    <section className="py-32 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300">
            Transform your workflow with our cutting-edge features designed for maximum efficiency
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Feature Content */}
              <div className="space-y-6">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold"
                  whileHover={{ x: 10 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated Stats Card */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    <CounterAnimation value={feature.stats.value} />
                  </div>
                  <motion.div 
                    className="text-sm text-gray-300 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {feature.stats.subtext}
                  </motion.div>
                </motion.div>
              </div>

              {/* Feature Visualization */}
              <motion.div
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-[300px] shadow-xl shadow-purple-500/10"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {index === 1 ? (
                  <Doughnut 
                    data={feature.chartData}
                    options={{
                      ...chartOptions,
                      cutout: '70%',
                      plugins: {
                        ...chartOptions.plugins,
                        tooltip: {
                          ...chartOptions.plugins.tooltip,
                          callbacks: {
                            label: (context) => `${context.label}: ${context.parsed}%`
                          }
                        }
                      }
                    }}
                  />
                ) : index === 2 ? (
                  <Bar 
                    data={feature.chartData}
                    options={chartOptions}
                  />
                ) : (
                  <Line 
                    data={feature.chartData}
                    options={chartOptions}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 