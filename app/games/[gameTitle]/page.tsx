"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import GameHeader from '@/components/ui/GameHeader';
import GameDescription from '@/components/ui/GameDescription';
import GameMedia from '@/components/ui/GameMedia';
import GameActions from '@/components/ui/GameActions';
import RelatedGames from '@/components/ui/RelatedGames';
import { games,Game } from '@/lib/data/gamesData';
import { slugify } from '@/components/utils/slugify';
import RDP from '@/components/Layout/RDP'; // Import the RDP component



const GamePage = () => {
  const { gameTitle } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [isRDPVisible, setIsRDPVisible] = useState(false);

  useEffect(() => {
    if (gameTitle) {
      const fetchGame = () => {
        const foundGame = games.find((game) => slugify(game.title) === gameTitle) || null;
        setGame(foundGame);
      };

      fetchGame();
    }
  }, [gameTitle]);

  if (!gameTitle) {
    return <div className="text-center text-white py-10">Loading game data...</div>;
  }

  if (!game) {
    return <div className="text-center text-white py-10">Game not found</div>;
  }

  const handlePlayNowClick = () => {
    setIsRDPVisible(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 w-full shadow-lg rounded-lg overflow-hidden bg-gradient-to-b from-black to-gray-800">
          <GameHeader
            title={game.title}
            trailer={game.trailer}
             // Make sure the GameHeader component expects this prop
          />
        </div>

        <div className="lg:w-1/3 w-full flex flex-col justify-between space-y-6 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg">
          <div>
            <GameDescription
              title={game.title}
              genres={game.categories}
              releaseDate={game.releaseDate}
              isNew={game.isNew}
              isTrending={game.isTrending}
            />
          </div>
          <GameActions onPlayNow={handlePlayNowClick} />
        </div>
      </div>

      {isRDPVisible && (
        <div className="mt-8">
          <RDP />
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-accent mb-6">Screenshots</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <GameMedia screenshots={game.screenshots || []} /> {/* Fallback for missing screenshots */}
        </div>
      </div>

      <div className="mt-16">
        <RelatedGames currentGenres={game.categories} currentGameTitle={game.title} />
      </div>
    </div>
  );
};

export default GamePage;