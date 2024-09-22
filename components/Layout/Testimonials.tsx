import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Using chevron icons for navigation
import Image from 'next/image';

const testimonials = [
  { name: 'John Doe', review: 'CyberCloud has transformed how I play games! The low latency is a game-changer.', avatar: '/images/avatar1.jpg' },
  { name: 'Jane Smith', review: 'The cross-platform support is amazing. I can play on any device!', avatar: '/images/avatar2.jpg' },
  { name: 'Sam Wilson', review: 'The community and leaderboard features are so engaging!', avatar: '/images/avatar3.jpg' },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary  text-accent text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-neonYellow">What Our Users Say</h2>
      <div className="relative w-full md:w-2/3 mx-auto flex items-center justify-center">
        {/* Previous Button */}
        <button onClick={prevSlide} className="absolute left-0 text-accent hover:text-neonYellow">
          <ChevronLeft size={40} />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center">
          
          <div >
          <Image
          src="/avatar.svg" // Ensure the logo has a transparent background or no extra bg
          alt="Logo"
          width={150}
          height={150}
          className="w-24 h-24 rounded-full mb-4 border-4 "
        
        />
          </div>
         
          <p className="italic mb-4">"{testimonials[activeIndex].review}"</p>
          <h4 className="text-neonYellow text-xl font-semibold">{testimonials[activeIndex].name}</h4>
        </div>

        {/* Next Button */}
        <button onClick={nextSlide} className="absolute right-0 text-accent hover:text-neonYellow">
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

