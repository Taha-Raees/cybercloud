import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-6 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">CyberCloud Gaming</h2>
        <p className="text-lg">The future of cloud gaming is here. Join now!</p>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">
          Instagram
        </a>
      </div>
      <p className="text-sm">&copy; 2024 CyberCloud Gaming. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
