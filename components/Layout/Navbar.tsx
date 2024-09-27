import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Search, User } from 'lucide-react';
import { games, Game } from '@/lib/data/gamesData';
import { slugify } from '@/components/utils/slugify';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const router = useRouter();

  const isLoggedIn = false;
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const authLinks = isLoggedIn
    ? [{ name: 'Account', path: '/account' }, { name: 'Sign Out', path: '/signout' }]
    : [{ name: 'Sign In', path: '/signin' }];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = games.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.categories.some((category) => category.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredGames(results);
    } else {
      setFilteredGames([]);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setSearchQuery('');
    setFilteredGames([]);
  };

  const handleGameNavigation = (title: string) => {
    const slug = slugify(title);
    handleNavigation(`/games/${slug}`);
  };

  // Reusable component for the search bar
  const SearchBar = () => (
    <div className="relative flex items-center w-full lg:w-80">
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

      {filteredGames.length > 0 && (
        <div className="absolute top-12 left-0 mt-2 w-full bg-gray-800 text-white rounded-lg shadow-lg z-50">
          {filteredGames.slice(0, 5).map((game) => (
            <div
              key={game.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleGameNavigation(game.title)}
            >
              <p>{game.title}</p>
              <small className="text-gray-400">{game.categories.join(', ')}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Reusable component for the menu items
  const MenuItems = () => (
    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-accent"
          onClick={() => handleNavigation(item.path)}
        >
          {item.name}
        </li>
      ))}
      
      <li
        className="cursor-pointer hover:text-accent flex items-center space-x-1"
        onClick={() => handleNavigation(authLinks[0].path)}
      >
        <User size={24} />
        <span className="text-neonYellow">{authLinks[0].name}</span>
      </li>
    </ul>
  );

  return (
    <nav className="bg-primary py-4 px-6 relative">
      <div className="flex justify-between items-center">
        {/* Logo for desktop and tablet */}
        <div
          className="text-secondary text-3xl font-bold cursor-pointer hidden md:block"
          onClick={() => handleNavigation('/')}
        >
          CyberCloud
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <MenuItems />
        </div>

        {/* Hamburger Menu for Tablet and Mobile */}
        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-secondary">
            {isOpen ? 'Close' : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 lg:hidden text-lg">
          {/* Logo inside the menu for mobile */}
          <li className="text-center text-secondary text-2xl font-bold cursor-pointer">
            CyberCloud
          </li>
          {/* Render Menu Items */}
          <MenuItems />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
