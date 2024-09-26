import React from 'react';

interface GameMediaProps {
  screenshots?: string[]; // Make screenshots optional
}

const GameMedia: React.FC<GameMediaProps> = ({ screenshots = [] }) => {
  return (
    <section className="py-6">
      <div className="grid grid-cols-2 gap-4">
        {screenshots.length > 0 ? (
          screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="game-thumbnail"
            />
          ))
        ) : (
          <p className="text-white">No screenshots available.</p>
        )}
      </div>
    </section>
  );
};

export default GameMedia;
