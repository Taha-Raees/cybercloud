import React from 'react';
import { Cpu, Shield, RefreshCw } from 'lucide-react'; // Import icons from lucide-react

const benefits = [
  { title: 'Seamless Performance', description: 'Our infrastructure guarantees a smooth gaming experience.', icon: <Cpu size={40} /> },
  { title: 'Advanced Security', description: 'Your data is safe with our state-of-the-art security measures.', icon: <Shield size={40} /> },
  { title: 'Constant Updates', description: 'We frequently add new features and games to keep you engaged.', icon: <RefreshCw size={40} /> },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-12 bg-gradient-dark text-white">
      <h2 className="text-center text-4xl font-bold mb-16 text-accent">Why Choose CyberCloud?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative p-8 bg-primary rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300"
            
            style={{
                borderImage: "linear-gradient(135deg, #0ABAB5, #FF007F) 1",
                borderWidth: "3px",
                borderStyle: "solid",
                transition: "all 0.3s ease-in-out",
                height: '300px',
              }}>
            <div className="absolute inset-0"></div>

            {/* Icon and Content */}
            <div className="relative z-10">
  <div className="mb-4 text-neonYellow">{benefit.icon}</div>
  <h3 className="text-2xl font-semibold mb-4 text-neonYellow">
    {benefit.title}
  </h3>
  <p className=" bg-gradient-to-r from-accent to-neonYellow text-transparent bg-clip-text">{benefit.description}</p>
</div>
             
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
