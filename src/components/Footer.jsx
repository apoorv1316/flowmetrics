import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="relative mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl py-16">
          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                whileHover={{ x: 5 }}
              >
                Analytics
              </motion.h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming ideas into powerful solutions. Building the future of technology, one innovation at a time.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {[
                  { text: 'info@analytics.com', icon: '📧' },
                  { text: '+1 (555) 123-4567', icon: '📞' },
                ].map((item) => (
                  <motion.li 
                    key={item.text}
                    whileHover={{ y: -2 }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-6">
                {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {platform === 'Twitter' && '𝕏'}
                    {platform === 'LinkedIn' && 'in'}
                    {platform === 'GitHub' && '⌘'}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © {currentYear} Analytic. All rights reserved.
              </motion.p>
              
              {/* Legal Links */}
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
    </motion.footer>
  );
} 