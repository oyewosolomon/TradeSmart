const Testimonials = () => {
  const testimonials = [
    {
      quote: 'TradeSmart Analytics has transformed the way we approach trading. Their AI-driven insights have given us a competitive edge in the market.',
      name: 'John Doe',
      position: 'CEO',
      company: 'Alpha Investments',
    },
    {
      quote: 'The portfolio optimization tools are unparalleled. We’ve seen a significant improvement in our returns.',
      name: 'Jane Smith',
      position: 'Portfolio Manager',
      company: 'Beta Capital',
    },
  ];

  return (
    <div className="bg-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-300">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;