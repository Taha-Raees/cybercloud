import React, { useState } from 'react';
import GameCard from '../ui/GameCard'; // Import GameCard component
import { games } from '@/lib/data/gamesData'; // Import games data

// Function to extract unique genres
const getUniqueGenres = (games: Game[]) => {
  const allGenres = games.flatMap(game => game.categories); // Collect all genres
  return Array.from(new Set(allGenres)); // Remove duplicates
};

const GameSorting = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false); // State to control whether to show all games

  // Get all unique genres from gamesData
  const genres = ['All', ...getUniqueGenres(games)];

  // Filter by category (genre)
  const filterByGenre = (games: Game[], genre: string) => {
    if (genre === 'All') return games;
    return games.filter(game => game.categories.includes(genre)); // Check if game belongs to the selected genre
  };

  // Filtered games based on the selected category
  const filteredGames = filterByGenre(games, selectedCategory);

  // Determine the number of games to display (default 10)
  const gamesToShow = showAll ? filteredGames : filteredGames.slice(0, 10);

  return (
    <section className="py-12">
      <h2 className="text-center text-4xl font-bold text-accent mb-10">All Games</h2>

      {/* Filter Buttons */}
      <div className="flex justify-start space-x-4 mb-8 overflow-x-auto no-scrollbar px-4">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-white font-semibold ${selectedCategory === genre ? 'bg-gradient-to-r from-accent to-neonYellow' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => {
              setSelectedCategory(genre);
              setShowAll(false); // Reset to show only the first 10 when switching categories
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Games Display */}
      <div className="grid grid-cols-1 ml-10 md:grid-cols-2 lg:grid-cols-5 gap-6 px-4 justify-items-center">
        {gamesToShow.map((game, index) => (
          <div key={game.id} className="w-[270px]">
            <GameCard
              image={game.image}
              title={game.title}
              categories={game.categories}
              trailer={game.trailer}
            />
          </div>
        ))}
      </div>

      {/* Show "See More" button if there are more than 10 games */}
      {filteredGames.length > 10 && !showAll && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-gradient-to-r from-accent to-neonYellow text-white rounded-full font-semibold"
            onClick={() => setShowAll(true)}
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default GameSorting;
