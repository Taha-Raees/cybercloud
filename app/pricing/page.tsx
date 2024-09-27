"use client"
import { Headset, Shield, Shuffle } from 'lucide-react';
import React from 'react';


const Pricing = () => {
  return (
    <section className="relative min-h-screen py-16 text-white px-8 overflow-hidden">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#FCEE09] opacity-80"></div>

      {/* Blurred Overlay Background */}
      <div className="absolute inset-0 bg-[#ae4c4c] bg-opacity-50 backdrop-blur-lg"></div>

      {/* Blob Shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#FCEE09] rounded-full opacity-80 clip-blob animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-[#0D0D0D] rounded-full  clip-blob animate-blob"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Your existing Pricing content */}
        <h1 className="text-center text-5xl font-bold text-accent mb-12">Pricing Plans</h1>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          Choose a plan that fits your gaming needs. Whether you want to play for free or go for the ultimate experience with our high-performance VMs, we've got you covered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-gradient-to-b from-[#222] to-primary p-8 rounded-lg shadow-xl  text-center hover:scale-105 transition-transform duration-300 hover:shadow-neonYellow">
            <h2 className="text-3xl font-semibold text-neonYellow">Free Plan</h2>
            <p className="mt-4 text-lg text-gray-300">Access to light gaming machines</p>
            <p className="text-lg text-gray-300 mb-4">Watch ads to earn minutes</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>Limited to 720p resolution</li>
              <li>Access light-weight games</li>
              <li>No heavy VMs allowed</li>
              <li>Earn minutes by watching ads</li>
            </ul>
            <button className="bg-neonYellow text-primary px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-neonYellow to-neonBlue p-8 rounded-lg shadow-xl  text-center hover:scale-105 transition-transform duration-300 hover:shadow-neonYellow">
            <h2 className="text-3xl font-semibold text-primary">Premium Plan</h2>
            <p className="mt-4 text-lg text-primary">€2/hour for any game</p>
            <p className="text-lg text-primary mb-4">No ads, full access</p>
            <ul className="text-primary space-y-2 mb-6">
              <li>Access to high-performance VMs</li>
              <li>Up to 4K resolution</li>
              <li>Access to exclusive titles</li>
              <li>Play any game without restrictions</li>
            </ul>
            <button className="bg-primary text-neonYellow px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300">
              Choose Plan
            </button>
          </div>
          
          {/* Custom Plan */}
          <div className="bg-gradient-to-b from-[#222] to-primary p-8 rounded-lg shadow-xl  text-center hover:scale-105 transition-transform duration-300 hover:shadow-neonYellow">
            <h2 className="text-3xl font-semibold text-neonYellow">Custom Plan</h2>
            <p className="mt-4 text-lg text-gray-300">Build your own plan based on usage</p>
            <p className="text-lg text-gray-300 mb-4">Only pay for what you use</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>Flexible VM allocations</li>
              <li>Stream games in 1080p or higher</li>
              <li>Access to most titles</li>
              <li>No ads</li>
            </ul>
            <button className="bg-neonYellow text-primary px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-300">
              Customize Plan
            </button>
          </div>
        </div>

        {/* Additional Content: Features and Benefits */}
        <div className="mt-16">
          <h2 className="text-center text-4xl font-bold text-accent mb-8">Why Choose Our Pricing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-primary p-6 rounded-lg shadow-lg">
              <Shuffle className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-neonYellow mb-2">Flexible Usage</h3>
              <p className="text-gray-300 text-center">
                Pay only for the hours you use. No hidden fees or long-term commitments.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-6 rounded-lg shadow-lg">
              <Headset className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-neonYellow mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-center">
                Our dedicated support team is here to help you anytime, anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-6 rounded-lg shadow-lg">
              <Shield className="w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-neonYellow mb-2">Secure & Reliable</h3>
              <p className="text-gray-300 text-center">
                Enjoy a safe and uninterrupted gaming experience with our robust infrastructure.
              </p>
            </div>
          </div>
        </div>


        {/* Frequently Asked Questions */}
        <div className="mt-16">
          <h2 className="text-center text-4xl font-bold text-accent mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary p-6 rounded-lg shadow-lg mb-4 gradient-border-yellow-black">
              <h3 className="text-2xl font-semibold text-neonYellow">How does the Free Plan work?</h3>
              <p className="text-gray-300 mt-2">
                The Free Plan allows you to access light gaming machines with limited features. You can earn additional minutes by watching ads, enabling you to extend your gaming sessions without any cost.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg mb-4 gradient-border-yellow-black">
              <h3 className="text-2xl font-semibold text-neonYellow">Can I upgrade my plan at any time?</h3>
              <p className="text-gray-300 mt-2">
                Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard to better suit your gaming needs.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg mb-4 gradient-border-yellow-black">
              <h3 className="text-2xl font-semibold text-neonYellow">Are there any hidden fees?</h3>
              <p className="text-gray-300 mt-2">
                No hidden fees! You only pay for what you use based on your chosen plan. All costs are transparent and clearly outlined in our pricing section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
