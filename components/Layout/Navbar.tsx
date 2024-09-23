import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { Bell, Menu, Search, User } from 'lucide-react'; // Importing icons from react-lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter
  const isLoggedIn = false; // Update this based on real authentication check

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu items
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  const authLinks = isLoggedIn
    ? [{ name: 'Account', path: '/account' }, { name: 'Sign Out', path: '/signout' }]
    : [{ name: 'Sign In', path: '/signin' }];

  // Handler for navigation using router.push
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-primary py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-secondary text-3xl font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
          CyberCloud
        </div>

        {/* Desktop & Tablet Search Bar */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            placeholder="Search games..."
            className="bg-primary border-2 border-accent text-white rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="text-accent">
            <Search size={24} /> {/* Search Icon */}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center text-lg">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-accent" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </li>
          ))}
          {/* Profile and Notifications */}
          <li>
            <button className="relative text-secondary hover:text-accent">
              <Bell size={24} /> {/* Notification Icon */}
              <span className="absolute top-0 right-0 h-3 w-3 bg-neonYellow rounded-full"></span> {/* Notification Badge */}
            </button>
          </li>
          <li className="cursor-pointer hover:text-accent flex items-center space-x-1" onClick={() => handleNavigation(authLinks[0].path)}>
            <User size={24} />
            <span className="text-neonYellow">{authLinks[0].name}</span>
          </li>
        </ul>

        {/* Hamburger Menu for Tablet and Mobile */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Tablet Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search games..."
              className="bg-primary border-2 border-accent text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="text-accent ml-2">
              <Search size={24} />
            </button>
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
            <li key={index} className="cursor-pointer hover:text-accent" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </li>
          ))}
          {/* Mobile: Profile and Notifications */}
          <li className="cursor-pointer hover:text-accent flex items-center space-x-1" onClick={() => handleNavigation(authLinks[0].path)}>
            <User size={24} />
            <span>{authLinks[0].name}</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
