'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
    setDarkMode(storedMode === 'true');
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <footer className="footer fixed bottom-0 left-0 w-full p-2 text-gray-600 dark:text-gray-100 bg-custom-blue dark:bg-custom-purple border-gray-200/30 flex justify-between items-center">
      
      <div className="text-center flex-grow">
        <Link href="/about" passHref>
          <span className="text-gray-600 dark:text-gray-100 cursor-pointer">About me</span>
        </Link>
      </div>
      <div className="w-[25px] h-[25px] opacity-0"></div> {/* Invisible spacer */}
    </footer>
  );
};

export default Footer;
