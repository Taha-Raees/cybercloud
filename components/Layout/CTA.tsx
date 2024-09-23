import React from 'react';

const CTA = () => {
  return (
    <section className="text-center py-40 bg-gradient-dark"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/bg.jpg')`,
      backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center',
    }}>
      <h2 className="text-4xl font-bold mb-6 text-accent">Join the Future of Gaming Today</h2>
      <p className="text-lg mb-8 text-white">
        Experience next-gen gaming with zero downloads. Play instantly from anywhere!
      </p>
      <button className="btn-play">
        Start Your Journey
      </button>
    </section>
  );
};

export default CTA;
