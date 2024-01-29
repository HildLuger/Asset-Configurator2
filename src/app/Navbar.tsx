'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './slices/darkModeSlice'; // Update the import path if necessary
import { RootState } from './store'; // Update the import path if necessary

const SunIcon = '/sun.svg'; // Your sun icon path
const MoonIcon = '/moon.svg'; // Your moon icon path

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  useEffect(() => {
    // Update local storage and document class based on darkMode state
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full p-1 mt-0 pr-5 pl-5 z-10 text-gray-600 bg-custom-blue dark:bg-custom-purple dark:border-gray-700">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          {/* Navigation Links */}
          <Link href="/" passHref>
            <span className="text-gray-600 font-bold  dark:text-white cursor-pointer mr-3">Car</span>
          </Link>
          <Link href="/dress" passHref>
            <span className="text-gray-600 dark:text-gray-400 cursor-pointer mr-3">Dress</span>
          </Link>
          <Link href="/ring" passHref>
            <span className="text-gray-600 dark:text-gray-400 cursor-pointer">Ring</span>
          </Link>
        </div>
        
        {/* Dark Mode Toggle Button */}
        <button onClick={handleToggleDarkMode} className="flex items-center">
          <Image 
            src={darkMode ? MoonIcon : SunIcon} 
            alt={darkMode ? 'Light Mode' : 'Dark Mode'} 
            width={40}
            height={40}
            className="icon" // Class from global CSS
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
