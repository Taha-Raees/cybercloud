import React from 'react';
import GameCard from '../ui/GameCard';
import { games } from '@/lib/data/gamesData'; // Assuming related games come from the same data source

interface RelatedGamesProps {
  currentGenres: string[]; // Expecting genres from the current game
  currentGameTitle: string; // To exclude the current game from the related list
}

const RelatedGames: React.FC<RelatedGamesProps> = ({ currentGenres, currentGameTitle }) => {
  // Filter games by genres but exclude the current game
  const relatedGames = games.filter(
    (game) => game.title !== currentGameTitle && game.categories.some((category) => currentGenres.includes(category))
  );

  return (
    <section className="mt-12">
      <h3 className="text-3xl font-bold text-accent mb-6">Related Games</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {relatedGames.length > 0 ? (
          relatedGames.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              title={game.title}
              trailer={game.trailer}
            />
          ))
        ) : (
          <p className="text-white">No related games found.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedGames;

