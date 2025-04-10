import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: 'James Clerk',
      role: 'CEO & Founder',
      image: '/images/t-1.jpg',
      bio: 'Former hedge fund manager with 15+ years experience in quantitative finance.',
    },
    {
      name: 'Anjorin Ayo',
      role: 'Chief Data Scientist',
      image: '/images/t-2.jpg',
      bio: 'PhD in Machine Learning, specializes in predictive market modeling.',
    },
    {
      name: 'Alice Johnson',
      role: 'Head of Product',
      image: '/images/t-3.jpg',
      bio: 'Product leader with a passion for creating intuitive financial tools.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
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

  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text text-yellow-600"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={itemVariants}>
              <motion.p 
                whileHover={{ x: 5 }}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                <span className="font-semibold text-indigo-600">TradeSmart Analytics</span> is a leading financial market analysis platform that processes over 1 million data points daily. Our mission is to empower traders and institutions with AI-driven insights that enhance decision-making, optimize portfolios, and mitigate risks.
              </motion.p>
              
              <motion.p 
                whileHover={{ x: 5 }}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Founded by a team of data scientists and financial experts, we combine cutting-edge technology with deep market knowledge to deliver actionable intelligence. Trusted by hedge funds and institutional traders across 25 countries, we are committed to driving success in the global financial markets.
              </motion.p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Our Vision</h3>
                <p className="text-gray-700">To democratize access to institutional-grade analytics and create a more transparent, efficient financial ecosystem.</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold mb-8 text-gray-800"
              >
                Our <span className="text-indigo-600">Team</span>
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={cardHover}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-center">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      </div>
                      <div className="mt-6 text-center">
                        <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                        <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.bio}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-3">Join Our Team</h3>
                <p className="mb-4">We're always looking for talented individuals passionate about finance and technology.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold shadow-md"
                >
                  View Openings
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;