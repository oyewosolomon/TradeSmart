import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiTrendingUp, FiShield, FiPieChart, FiCpu, FiDatabase, FiBarChart2 } from 'react-icons/fi';

const ProductsServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); 

  const solutions = [
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: 'AI-Powered Market Signals',
      description: 'Our proprietary AI algorithms analyze 10,000+ market indicators to deliver high-probability trading signals with 85% historical accuracy.',
      features: [
        'Real-time anomaly detection',
        'Sentiment analysis integration',
        'Customizable alert thresholds'
      ],
      color: 'from-purple-500 to-yellow-600'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Institutional Risk Suite',
      description: 'Comprehensive risk management platform used by hedge funds to monitor portfolio exposure across asset classes.',
      features: [
        'Value-at-Risk (VaR) modeling',
        'Stress testing scenarios',
        'Liquidity risk indicators'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: 'Portfolio Optimizer Pro',
      description: 'Next-generation portfolio construction tool that balances returns with your specific risk tolerance parameters.',
      features: [
        'Black-Litterman model integration',
        'Multi-factor optimization',
        'Tax-aware rebalancing'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: 'Alternative Data Feeds',
      description: 'Access unconventional data streams including satellite imagery, credit card transactions, and web traffic analytics.',
      features: [
        '500+ proprietary datasets',
        'Normalized for financial modeling',
        'API integration'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: 'Quant Research Platform',
      description: 'Cloud-based environment for developing, backtesting, and deploying algorithmic trading strategies.',
      features: [
        'Python/R notebooks',
        '10+ years historical data',
        'Parallelized backtesting'
      ],
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Execution Analytics',
      description: 'Measure and improve trade execution quality with our TCA (Transaction Cost Analysis) dashboard.',
      features: [
        'Implementation shortfall analysis',
        'Venue performance metrics',
        'Dark pool liquidity mapping'
      ],
      color: 'from-violet-500 to-fuchsia-600'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden" id="services">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-50 rounded-full mb-4">
              Enterprise Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Institutional-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powering the world's leading hedge funds, asset managers, and proprietary trading firms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'ring-2 ring-yellow-500' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10" />
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${solution.color} text-white`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={item}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Platform Demo
            </motion.button>
            
            <p className="mt-6 text-gray-500 text-sm">
              All solutions include enterprise-grade SLAs, dedicated support, and regulatory compliance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsServices;