import { motion } from 'framer-motion';
import { FiBarChart2, FiDollarSign, FiTrendingUp, FiShield, FiGlobe, FiCpu } from 'react-icons/fi';

const IndustriesWeServe = () => {
  const industries = [
    {
      name: 'Hedge Funds & Quantitative Firms',
      description: 'Our institutional-grade analytics power algorithmic trading strategies across global markets with millisecond latency.',
      icon: <FiTrendingUp className="w-6 h-6" />,
      features: [
        'Multi-strategy performance attribution',
        'Alternative data integration',
        'Execution quality analytics',
        'Dark pool liquidity mapping'
      ],
      stats: 'Used by 8 of the top 10 global hedge funds'
    },
    {
      name: 'Asset Management Firms',
      description: 'We enable smarter portfolio construction with AI-driven insights and comprehensive risk analytics.',
      icon: <FiBarChart2 className="w-6 h-6" />,
      features: [
        'Factor exposure analysis',
        'ESG scoring integration',
        'Tax-aware optimization',
        'Client reporting automation'
      ],
      stats: 'Optimizing $2.3T+ in assets under management'
    },
    {
      name: 'Investment Banks & Brokerages',
      description: 'Our solutions enhance trading desks with real-time market intelligence and client analytics.',
      icon: <FiDollarSign className="w-6 h-6" />,
      features: [
        'Flow analysis tools',
        'Client segmentation',
        'Best execution monitoring',
        'Regulatory compliance dashboards'
      ],
      stats: 'Trusted by 15+ global systemically important banks'
    },
    {
      name: 'Family Offices & Wealth Managers',
      description: 'Sophisticated tools previously only available to institutions, now accessible to private capital.',
      icon: <FiShield className="w-6 h-6" />,
      features: [
        'Concentrated position management',
        'Tax optimization strategies',
        'Direct indexing solutions',
        'Custom benchmark creation'
      ],
      stats: 'Serving 200+ family offices worldwide'
    },
    {
      name: 'Corporate Treasuries',
      description: 'Enterprise risk management and cash optimization for multinational corporations.',
      icon: <FiGlobe className="w-6 h-6" />,
      features: [
        'FX exposure monitoring',
        'Liquidity forecasting',
        'Counterparty risk assessment',
        'Hedge accounting support'
      ],
      stats: 'Protecting $850B+ in corporate assets annually'
    },
    {
      name: 'FinTech Platforms',
      description: 'API-first solutions to power next-generation financial applications and services.',
      icon: <FiCpu className="w-6 h-6" />,
      features: [
        'White-label analytics',
        'Embeddable widgets',
        'Real-time data streams',
        'RegTech integrations'
      ],
      stats: 'Integrated with 150+ fintech applications'
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
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden" id='resources'>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-yellow-600 bg-yellow-50 rounded-full mb-4">
              Global Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-purple-600">Financial Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering institutions across the financial ecosystem with cutting-edge analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-yellow-50 text-yellow-600">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{industry.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Solutions</h4>
                    <ul className="space-y-2">
                      {industry.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-yellow-600">{industry.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={item}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="mr-2 text-gray-600">Serving clients in</span>
              <span className="font-semibold text-yellow-600">42 countries</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="mr-2 text-gray-600">Covering</span>
              <span className="font-semibold text-yellow-600">150+ exchanges</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;