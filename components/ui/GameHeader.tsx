import React from 'react';

interface GameHeaderProps {
  title: string;
  trailer?: string;
}

const GameHeader: React.FC<GameHeaderProps> = ({ title, trailer }) => {
  return (
    <div className="relative w-full h-96 mb-10">
      {trailer ? (
        <iframe
          src={`${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
          <h1 className="text-4xl text-white">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default GameHeader;
