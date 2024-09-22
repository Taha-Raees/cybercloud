import React from 'react';

const CTA = () => {
  return (
    <section className="text-center py-40 bg-gradient-dark"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://img.freepik.com/free-photo/futuristic-moon-background_23-2150930800.jpg?t=st=1727040888~exp=1727044488~hmac=b0f8eb6a103b33605ee8c4f85369b9e144299a4ca0ba5d999585296100f473ad&w=1060')`,
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
