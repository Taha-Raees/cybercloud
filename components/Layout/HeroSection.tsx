import React from 'react';
import GameCard from '../ui/GameCard'; // Import GameCard component

const games = [
  { name: 'Cyberpunk Adventure', image: '/images/game1.jpg', description: 'Explore a futuristic city.' },
  { name: 'Galaxy Wars', image: '/images/game2.jpg', description: 'Defend the universe from alien invasions.' },
  { name: 'Neon Drive', image: '/images/game3.jpg', description: 'Race through neon-lit streets at high speed.' },
];

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center text-center py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('https://r4.wallpaperflare.com/wallpaper/478/422/462/cyberpunk-2077-games-ps-games-xbox-games-wallpaper-d8a6dd2840703c88306c51be1882243a.jpg')`,
        backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the image
      }}
>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Experience the Future of <span className="text-secondary">Gaming</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Cloud Gaming Anytime, Anywhere. No Downloads, No Hassle.
        </p>
        <button className="btn-play">Play Now</button>
      </section>
    </>
  );
};

export default HeroSection;
