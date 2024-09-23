import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, Menu, Search, User } from 'lucide-react';
import { games, Game } from '@/lib/data/gamesData'; // Import the correctly typed games data

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState<Game[]>([]); // Correctly typed array of games
  const router = useRouter();

  const isLoggedIn = false; // Update this based on real authentication check
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  const authLinks = isLoggedIn
    ? [{ name: 'Account', path: '/account' }, { name: 'Sign Out', path: '/signout' }]
    : [{ name: 'Sign In', path: '/signin' }];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle search query and filter games dynamically
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = games.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.categories.some((category) => category.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredGames(results); // Update filtered games based on search query
    } else {
      setFilteredGames([]); // Clear results if the search query is empty
    }
  };

  // Handle navigation to game details or other routes
  const handleNavigation = (path: string) => {
    router.push(path);
    setSearchQuery(''); // Clear search after navigation
    setFilteredGames([]); // Clear dropdown
  };

  return (
    <nav className="bg-primary py-4 px-6 relative"> {/* Make nav relative */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-secondary text-3xl font-bold cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          CyberCloud
        </div>

        {/* Desktop & Tablet Search Bar */}
        <div className="relative hidden lg:flex items-center w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search games..."
            className="bg-primary border-2 border-accent text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="text-accent ml-2">
            <Search size={24} />
          </button>

          {/* Search Dropdown */}
          {filteredGames.length > 0 && (
            <div className="absolute top-12 left-0 mt-2 w-full bg-gray-800 text-white rounded-lg shadow-lg z-50">
              {filteredGames.slice(0, 5).map((game) => (
                <div
                  key={game.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                  onClick={() => handleNavigation(`/games/${game.id}`)}
                >
                  <p>{game.title}</p>
                  <small className="text-gray-400">{game.categories.join(', ')}</small>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-accent"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
          {/* Profile and Notifications */}
          <li>
            <button className="relative text-secondary hover:text-accent">
              <Bell size={24} />
              <span className="absolute top-0 right-0 h-3 w-3 bg-neonYellow rounded-full"></span> {/* Notification Badge */}
            </button>
          </li>
          <li
            className="cursor-pointer hover:text-accent flex items-center space-x-1"
            onClick={() => handleNavigation(authLinks[0].path)}
          >
            <User size={24} />
            <span className="text-neonYellow">{authLinks[0].name}</span>
          </li>
        </ul>

        {/* Hamburger Menu for Tablet and Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Tablet Search Bar */}
          <div className="relative md:flex items-center w-48">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search games..."
              className="bg-primary border-2 border-accent text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="text-accent ml-2">
              <Search size={24} />
            </button>

            {/* Mobile Search Dropdown */}
            {filteredGames.length > 0 && (
              <div className="absolute top-12 left-0 mt-2 w-full bg-gray-800 text-white rounded-lg shadow-lg z-50">
                {filteredGames.slice(0, 5).map((game) => (
                  <div
                    key={game.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => handleNavigation(`/games/${game.id}`)}
                  >
                    <p>{game.title}</p>
                    <small className="text-gray-400">{game.categories.join(', ')}</small>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={toggleMenu} className="text-secondary">
            {isOpen ? 'Close' : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 lg:hidden text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-accent"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
          {/* Mobile: Profile and Notifications */}
          <li
            className="cursor-pointer hover:text-accent flex items-center space-x-1"
            onClick={() => handleNavigation(authLinks[0].path)}
          >
            <User size={24} />
            <span>{authLinks[0].name}</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
