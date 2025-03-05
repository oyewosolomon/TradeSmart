import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(7, 24, 57, 0.9), rgba(13, 33, 73, 0.8))',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Empower Your Trading with{' '}
          <span className="text-yellow-400 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            AI-Driven Insights
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          TradeSmart Analytics: The Ultimate Financial Market Analysis Platform
        </p>

        {/* Buttons with Hover Effects */}
        <div className="flex justify-center space-x-4 animate-fade-in-up">
          <button className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-blue-900 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Request a Demo
          </button>
        </div>

        {/* Animated Scrolling Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;