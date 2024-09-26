import React from 'react';

interface GameActionsProps {
  onPlayNow: () => void; // Function prop for handling Play Now click
}

const GameActions: React.FC<GameActionsProps> = ({ onPlayNow }) => {
  return (
    <div className="flex justify-center space-x-4 my-8">
      <button className="btn-play" onClick={onPlayNow}>
        Play Now
      </button>
      <button className="btn-primary">
        Add to Wishlist
      </button>
      <button className="btn-accent">
        Share
      </button>
    </div>
  );
};

export default GameActions;
