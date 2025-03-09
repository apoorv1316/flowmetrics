import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Categorized FAQs
const faqCategories = [
  {
    name: "Getting Started",
    icon: "🚀",
    questions: [
      {
        question: "How do I set up my first dashboard?",
        answer: "Setting up your first dashboard is simple. After logging in, click the 'Create Dashboard' button on your home screen. You'll be guided through a setup wizard where you can select from pre-built templates or start from scratch. Connect your data sources, and your dashboard will automatically populate with relevant metrics and visualizations."
      },
      {
        question: "What data sources can I connect to the platform?",
        answer: "Our platform supports a wide range of data sources including Google Analytics, Facebook Ads, Instagram, Twitter, LinkedIn, Shopify, WooCommerce, Stripe, Salesforce, HubSpot, MySQL, PostgreSQL, MongoDB, and many more. We also offer a REST API for custom data sources and CSV uploads for offline data."
      },
      {
        question: "How long does the onboarding process take?",
        answer: "Most users are able to set up their first dashboard within 15-30 minutes. For enterprise customers with complex data needs, our dedicated onboarding team provides personalized assistance to ensure a smooth setup process, typically completed within 1-2 business days."
      }
    ]
  },
  {
    name: "Features",
    icon: "⚙️",
    questions: [
      {
        question: "How does the real-time analytics dashboard work?",
        answer: "Our real-time analytics dashboard uses WebSocket technology to stream data directly to your browser as it's collected. This means you see changes instantly without needing to refresh the page. The dashboard updates metrics, charts, and visualizations in milliseconds, giving you the most current view of your data at all times."
      },
      {
        question: "Can I customize the dashboard to show metrics that matter to my business?",
        answer: "Absolutely! Customization is one of our core features. You can drag and drop widgets, create custom metrics, design your own visualizations, and save multiple dashboard layouts for different purposes. You can also set up role-based dashboards so team members see the metrics most relevant to their work."
      },
      {
        question: "What types of visualizations are available?",
        answer: "We offer over 30 types of visualizations including line charts, bar charts, pie charts, scatter plots, heat maps, funnel charts, cohort tables, geographic maps, and more. Each visualization is interactive, allowing you to drill down into the data for deeper insights. You can also create custom visualizations using our API."
      }
    ]
  },
  {
    name: "Pricing",
    icon: "💰",
    questions: [
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. At the end of your trial period, you can choose the plan that best fits your needs or continue with our free tier which includes basic analytics features with limited data processing."
      },
      {
        question: "How does your pricing structure work?",
        answer: "Our pricing is based on the volume of data processed and the number of dashboards you need. We offer tiered plans starting from $29/month for startups, $99/month for growing businesses, and custom enterprise plans for larger organizations. All plans include our core analytics features, with higher tiers offering more data capacity and advanced features."
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes, we offer a 20% discount when you choose annual billing instead of monthly. This can result in significant savings, especially for higher-tier plans. We also offer special pricing for non-profits and educational institutions. Contact our sales team for more information."
      }
    ]
  },
  {
    name: "Security",
    icon: "🔒",
    questions: [
      {
        question: "How secure is my data on your platform?",
        answer: "Security is our top priority. We implement bank-level encryption for all data, both in transit and at rest. Our infrastructure is hosted on SOC 2 compliant servers, and we conduct regular security audits. We also offer features like two-factor authentication, single sign-on, and granular permission controls to keep your data safe."
      },
      {
        question: "Do you comply with GDPR and other privacy regulations?",
        answer: "Yes, our platform is fully GDPR compliant, and we also adhere to CCPA, HIPAA (with BAA), and other regional privacy regulations. We provide tools to help you maintain compliance, including data anonymization options, consent management, and data retention controls. Our DPA (Data Processing Agreement) is available for all customers."
      },
      {
        question: "Can I control who has access to specific dashboards?",
        answer: "Absolutely. Our platform offers role-based access control, allowing you to define precisely who can view, edit, or administer each dashboard. You can create user groups, set permissions at the dashboard or widget level, and even limit access to specific data sources or metrics based on user roles."
      }
    ]
  },
  {
    name: "Support",
    icon: "🤝",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "We offer multi-tiered support options. All plans include access to our comprehensive knowledge base, community forums, and email support. Higher-tier plans include priority response times, dedicated account managers, and 24/7 phone support. We also provide personalized onboarding and training sessions to help you get the most out of our platform."
      },
      {
        question: "How quickly can I expect a response from support?",
        answer: "Our standard email support response time is within 24 hours, though we typically respond much faster. Premium and Enterprise plans include faster guaranteed response times: Premium plans receive responses within 8 business hours, while Enterprise customers enjoy 4-hour response times and 24/7 emergency support."
      },
      {
        question: "Do you offer training for new users?",
        answer: "Yes, we provide various training options. All users have access to our video tutorials and documentation. Business and Enterprise plans include free live training sessions for your team. We also offer custom training packages for organizations with specific needs, and our customer success team provides regular webinars on new features and best practices."
      }
    ]
  }
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState(faqCategories[0].name);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [scrollbarStyles, setScrollbarStyles] = useState('');

  // Add scrollbar hiding CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    setScrollbarStyles(style);
    
    return () => {
      if (scrollbarStyles) {
        document.head.removeChild(scrollbarStyles);
      }
    };
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // Get current category questions
  const currentCategory = faqCategories.find(cat => cat.name === selectedCategory);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know about our analytics platform. Can't find the answer you're looking for? Feel free to contact our support team.
          </p>
        </motion.div>
        
        {/* FAQ Container with categories and questions */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Selection - Vertical on desktop, horizontal scrolling on mobile */}
          <div className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-24">
              {/* Hide scrollbar but allow scrolling */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto scrollbar-hide pb-4 lg:pb-0">
                <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0">
                  {faqCategories.map((category) => (
                    <motion.button
                      key={category.name}
                      className={`px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${
                        selectedCategory === category.name
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-900/20"
                          : "bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setOpenQuestionIndex(null);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Questions and Answers */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {currentCategory.questions.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <button
                      className="w-full text-left p-5 sm:p-6 flex justify-between items-center"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={openQuestionIndex === index}
                    >
                      <h3 className="text-base sm:text-lg font-semibold pr-8">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openQuestionIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${
                          openQuestionIndex === index 
                            ? "bg-gradient-to-r from-purple-500 to-blue-500" 
                            : "bg-white/20"
                        }`}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openQuestionIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 sm:p-6 pt-0 sm:pt-0 border-t border-white/10">
                            <motion.p 
                              className="text-sm sm:text-base text-white/90 leading-relaxed"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-4">Still have questions?</p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}