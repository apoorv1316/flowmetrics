import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DashboardMockup() {
  const [chartData, setChartData] = useState([35, 40, 30, 50, 45, 60, 55, 65, 70, 75]);
  const [barData, setBarData] = useState([65, 40, 75, 50, 85, 60]);
  const [donutData, setDonutData] = useState([60, 25, 15]);
  
  // Animate data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev];
        newData.shift();
        newData.push(Math.floor(Math.random() * 40) + 40);
        return newData;
      });
      
      setBarData(prev => {
        return prev.map(() => Math.floor(Math.random() * 50) + 35);
      });
      
      setDonutData(prev => {
        // Keep total at 100
        const first = Math.floor(Math.random() * 30) + 40;
        const second = Math.floor(Math.random() * 20) + 20;
        const third = 100 - first - second;
        return [first, second, third];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate line chart points
  const chartPoints = chartData.map((value, index) => {
    const x = (index / (chartData.length - 1)) * 100;
    const y = 100 - value;
    return `${x},${y}`;
  }).join(' ');
  
  // Calculate donut chart segments
  const donutSegments = [];
  let cumulativePercent = 0;
  
  donutData.forEach((segment, i) => {
    const startPercent = cumulativePercent;
    cumulativePercent += segment;
    
    const startX = 50 + 35 * Math.cos(2 * Math.PI * startPercent / 100);
    const startY = 50 + 35 * Math.sin(2 * Math.PI * startPercent / 100);
    
    const endX = 50 + 35 * Math.cos(2 * Math.PI * cumulativePercent / 100);
    const endY = 50 + 35 * Math.sin(2 * Math.PI * cumulativePercent / 100);
    
    const largeArcFlag = segment > 50 ? 1 : 0;
    
    donutSegments.push({
      path: `M 50 50 L ${startX} ${startY} A 35 35 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
      color: i === 0 ? "#8B5CF6" : i === 1 ? "#3B82F6" : "#EC4899"
    });
  });
  
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/20 shadow-[0_0_15px_rgba(124,58,237,0.5)] bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-md">
      {/* Browser-like header */}
      <div className="relative flex items-center px-4 py-2 bg-black/30 border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto bg-white/10 rounded-full px-4 py-1 text-xs text-white/70">analytics-dashboard.app</div>
      </div>
      
      {/* Dashboard content */}
      <div className="p-3 sm:p-4 md:p-6">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold">Analytics Dashboard</h3>
            <p className="text-white/60 text-xs">Real-time performance metrics</p>
          </div>
          <div className="flex space-x-2 text-[10px] sm:text-xs">
            <button className="bg-white/10 hover:bg-white/20 text-white px-2 sm:px-3 py-1 rounded-md transition">Today</button>
            <button className="bg-purple-600 text-white px-2 sm:px-3 py-1 rounded-md">This Week</button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-2 sm:px-3 py-1 rounded-md transition hidden sm:block">This Month</button>
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {[
            { label: "Total Users", value: "8,249", change: "+12.5%", color: "text-green-400" },
            { label: "Sessions", value: "12,931", change: "+8.2%", color: "text-green-400" },
            { label: "Bounce Rate", value: "27.3%", change: "-2.1%", color: "text-green-400" },
            { label: "Session Duration", value: "2m 45s", change: "+0.8%", color: "text-green-400" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="text-white/60 text-[10px] sm:text-xs">{stat.label}</div>
              <div className="text-white text-sm sm:text-lg md:text-xl font-bold mt-1">{stat.value}</div>
              <div className={`text-[10px] sm:text-xs mt-1 sm:mt-2 ${stat.color}`}>{stat.change}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Charts section - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Line chart - Full width on mobile */}
          <motion.div 
            className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <div>
                <h4 className="text-white text-sm sm:text-base font-medium">Website Traffic</h4>
                <p className="text-white/60 text-[10px] sm:text-xs">Unique visitors over time</p>
              </div>
              <div className="text-white text-sm sm:text-lg font-bold">+24.5%</div>
            </div>
            
            <div className="relative h-40 sm:h-60 w-full">
              {/* Chart grid */}
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-4">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border-t border-l border-white/5"></div>
                ))}
              </div>
              
              {/* Line chart */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Gradient for area under the line */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area under the line */}
                <motion.path
                  d={`M0,${100 - chartData[0]} ${chartPoints} ${100},${100 - chartData[chartData.length - 1]} V100 H0 Z`}
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                
                {/* Line */}
                <motion.polyline
                  points={chartPoints}
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
                
                {/* Data points */}
                {chartData.map((value, index) => {
                  const x = (index / (chartData.length - 1)) * 100;
                  const y = 100 - value;
                  return (
                    <motion.circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#fff"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                    />
                  );
                })}
              </svg>
              
              {/* X-axis labels - Fewer labels on mobile */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/40 text-[8px] sm:text-xs">
                <div>Mon</div>
                <div className="hidden sm:block">Tue</div>
                <div>Wed</div>
                <div className="hidden sm:block">Thu</div>
                <div>Fri</div>
                <div className="hidden sm:block">Sat</div>
                <div>Sun</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column charts - Stack on mobile */}
          <div className="space-y-4 md:space-y-6">
            {/* Bar chart */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="mb-2">
                <h4 className="text-white text-sm sm:text-base font-medium">Conversion Rate</h4>
                <p className="text-white/60 text-[10px] sm:text-xs">By channel</p>
              </div>
              
              <div className="relative h-24 sm:h-32 flex items-end justify-between pt-5">
                {/* Show fewer bars on mobile */}
                {barData.slice(0, window.innerWidth < 640 ? 4 : 6).map((value, index) => (
                  <div key={index} className="flex flex-col items-center w-6 sm:w-8">
                    <motion.div 
                      className="w-full bg-blue-500 rounded-t-sm"
                      style={{ 
                        height: `${value}%`,
                        background: index % 2 === 0 ? 
                          'linear-gradient(to top, #3B82F6, #8B5CF6)' : 
                          'linear-gradient(to top, #8B5CF6, #EC4899)' 
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    />
                    <div className="text-white/40 text-[8px] sm:text-xs mt-1">
                      {['Org', 'Paid', 'Soc', 'Email', 'Ref', 'Dir'][index]}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Donut chart */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="mb-2">
                <h4 className="text-white text-sm sm:text-base font-medium">Traffic Sources</h4>
                <p className="text-white/60 text-[10px] sm:text-xs">Distribution</p>
              </div>
              
              <div className="flex items-center">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#1F2937" strokeWidth="10" />
                    
                    {donutSegments.map((segment, i) => (
                      <motion.path
                        key={i}
                        d={segment.path}
                        fill={segment.color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                      />
                    ))}
                    
                    <circle cx="50" cy="50" r="25" fill="#1F2937" />
                  </svg>
                </div>
                
                <div className="ml-2 sm:ml-4 flex flex-col justify-center">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500 mr-1 sm:mr-2"></div>
                    <div className="text-white text-[8px] sm:text-xs">Direct ({donutData[0]}%)</div>
                  </div>
                  <div className="flex items-center mb-1 sm:mb-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 mr-1 sm:mr-2"></div>
                    <div className="text-white text-[8px] sm:text-xs">Organic ({donutData[1]}%)</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-500 mr-1 sm:mr-2"></div>
                    <div className="text-white text-[8px] sm:text-xs">Referral ({donutData[2]}%)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Subtle overlay for better integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
    </div>
  );
}
