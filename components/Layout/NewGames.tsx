import React from 'react';
import GameCard from '../ui/GameCard';
import { games } from '@/lib/data/gamesData';  // Import the games data

const NewGames = () => {
  // Filter games to show only new games
  const newGames = games.filter(game => game.isNew);

  return (
    <section className="py-3 m-3">
      <h2 className="ml-4 text-3xl font-bold text-accent mb-5">
        New Games
      </h2>

      {/* Scrollable container */}
      <div className="relative flex items-center p-3 overflow-x-auto no-scrollbar"
        >
        {/* Cards Container */}
        <div className="flex space-x-4">
          {newGames.map((game, index) => (
            <div key={index} className="w-[270px]">
              <GameCard
                image={game.image}
                title={game.title}
                trailer={game.trailer}  // YouTube embed link
                isNew={game.isNew}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGames;
