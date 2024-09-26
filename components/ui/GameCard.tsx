import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { slugify } from '@/components/utils/slugify'; // Import the slugify utility

interface GameCardProps {
  image: string;
  title: string; 
  description?: string;
  trailer?: string;  // URL for the trailer video (YouTube embed link)
  isNew?: boolean;   // New field for marking new games
}

const GameCard: React.FC<GameCardProps> = ({ image, title, description, trailer, isNew }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    // Slugify the game title for URL
    const slug = slugify(title);
    // Push to the game details page using the slugified title
    router.push(`/games/${slug}`);
  };

  return (
    <div
      className="game-thumbnail relative bg-primary rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}  // Click event to navigate to game page
    >
      {/* Image or YouTube Video Trailer */}
      {!isHovered ? (
        <img src={image} alt={title} className="w-full h-64 object-cover bg-center" />
      ) : (
        trailer && (
          <iframe
            src={`${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}  // Autoplay, hide controls, and modest branding
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64"
          />
        )
      )}

      {/* Game Info Below the Image */}
      <div className="game-info p-4 bg-black bg-opacity-70 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>

      {/* "New" Badge */}
      {isNew && (
        <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded">
          New
        </span>
      )}
    </div>
  );
};

export default GameCard;
