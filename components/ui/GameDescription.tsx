import React from 'react';

interface GameDescriptionProps {
  title: string;
  genres: string[];
  releaseDate: string;
  isNew: boolean;
  isTrending: boolean;
}

const GameDescription: React.FC<GameDescriptionProps> = ({ title, genres, releaseDate, isNew, isTrending }) => {
  return (
    <section className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg text-white">
      {/* Game Title */}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      
      {/* Game Meta Information */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Genres */}
        <div className="flex flex-wrap space-x-2">
          {genres.map((genre, index) => (
            <span key={index} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
              {genre}
            </span>
          ))}
        </div>

        {/* Release Date */}
        <div className="text-sm text-gray-400">
          Released: {releaseDate}
        </div>

        {/* New and Trending Badges */}
        {isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        {isTrending && (
          <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            Trending
          </span>
        )}
      </div>
    </section>
  );
};

export default GameDescription;
