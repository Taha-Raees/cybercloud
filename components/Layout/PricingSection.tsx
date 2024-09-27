import React from 'react';
import { ChevronRight } from 'lucide-react'; // Ensure you have lucide-react installed

const PricingSection = () => {
  return (
    <section className="relative py-12 bg-gradient-dark text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-6 text-accent">Flexible Pricing for Every Gamer</h2>
        <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Whether you want to enjoy casual gaming for free or immerse yourself in high-performance, paid options, CyberCloud has the perfect plan for you.
        </p>

        {/* Pricing Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Free Plan Preview */}
          <div className="bg-primary p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-neonYellow">Free Plan</h3>
            <p className="text-gray-300 mt-2">Access to light gaming machines</p>
            <button className="mt-4 bg-neonYellow text-primary px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Free
            </button>
          </div>

          {/* Premium Plan Preview */}
          <div className="bg-gradient-to-b from-neonYellow to-neonBlue p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-primary">Premium Plan</h3>
            <p className="text-primary mt-2">€2/hour for any game</p>
            <button className="mt-4 bg-primary text-neonYellow px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Premium
            </button>
          </div>
          
          {/* Custom Plan Preview */}
          <div className="bg-primary p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-neonYellow">Custom Plan</h3>
            <p className="text-gray-300 mt-2">Build your own plan</p>
            <button className="mt-4 bg-neonYellow text-primary px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Customize
            </button>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button 
            className="inline-flex items-center bg-neonYellow text-primary font-bold px-8 py-3 rounded-lg hover:bg-neonBlue hover:text-white transition duration-300"
            onClick={() => window.location.href = '/pricing'}
          >
            Explore Plans <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
