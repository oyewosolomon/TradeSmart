import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/images/logo.png" 
            alt="TradeSmart Analytics Logo"
            className="h-10"
          /> */}
          <span className="ml-2 text-xl font-bold text-blue-900">TradeSmart</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-blue-900 hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#" className="text-blue-900 hover:text-yellow-400 transition duration-300">
            About Us
          </a>
          <a href="#" className="text-blue-900 hover:text-yellow-400 transition duration-300">
            Products & Services
          </a>
          <a href="#" className="text-blue-900 hover:text-yellow-400 transition duration-300">
            Resources
          </a>
          <a href="#" className="text-blue-900 hover:text-yellow-400 transition duration-300">
            Contact Us
          </a>
          <button className="bg-yellow-400 text-blue-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#"
            className="block px-6 py-3 text-blue-900 hover:bg-gray-100 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-blue-900 hover:bg-gray-100 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-blue-900 hover:bg-gray-100 transition duration-300"
          >
            Products & Services
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-blue-900 hover:bg-gray-100 transition duration-300"
          >
            Resources
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-blue-900 hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
          <button className="block w-full text-left px-6 py-3 bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;