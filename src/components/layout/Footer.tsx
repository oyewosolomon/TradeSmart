const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">TradeSmart Analytics</h3>
          <p className="text-gray-400">Empowering traders with AI-driven insights.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Products & Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-yellow-400">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Stay updated with the latest market insights.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white py-2 px-4 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-r-lg hover:bg-yellow-300 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;