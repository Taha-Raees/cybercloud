import React from 'react';
import { Zap, Monitor, Gamepad2, Users, Trophy, LifeBuoy } from 'lucide-react'; // Import icons from lucide-react

const features = [
  { title: 'Ultra-Low Latency', description: 'Stream games with minimal lag.', icon: <Zap size={40} /> },
  { title: 'Cross-Platform Support', description: 'Play on PC, mobile, or tablet.', icon: <Monitor size={40} /> },
  { title: 'Exclusive Titles', description: 'Access a growing library of exclusive games.', icon: <Gamepad2 size={40} /> },
  { title: 'Community-Driven', description: 'Engage with our active gaming community.', icon: <Users size={40} /> },
  { title: 'Competitive Leaderboards', description: 'Climb the ranks and earn exclusive rewards.', icon: <Trophy size={40} /> },
  { title: '24/7 Support', description: 'We’re here to help you, anytime, anywhere.', icon: <LifeBuoy size={40} /> },
];

const Features = () => {
  return (
    <div className='py-10'>
      <h2 className="text-center text-4xl font-bold mb-5 text-accent">Features</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            
            className="bg-gradient-to-b from-gradientStart to-gradientEnd p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 relative"
          >
            <div className="absolute top-4 right-4 text-accent">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-accent">{feature.title}</h3>
            <p className="text-white">{feature.description}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neonYellow"></div> {/* Accent underline effect */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
