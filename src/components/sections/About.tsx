const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Chief Data Scientist',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Alice Johnson',
      role: 'Head of Product',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              TradeSmart Analytics is a leading financial market analysis platform that processes over 1 million data points daily. Our mission is to empower traders and institutions with AI-driven insights that enhance decision-making, optimize portfolios, and mitigate risks.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a team of data scientists and financial experts, we combine cutting-edge technology with deep market knowledge to deliver actionable intelligence. Trusted by hedge funds and institutional traders across 25 countries, we are committed to driving success in the global financial markets.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
