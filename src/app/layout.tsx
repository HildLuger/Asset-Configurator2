'use client';

// RootLayout.tsx

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta'; // Make sure the path is correct

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <Meta title={'Asset Configurator'} keywords={'web development, programming'} description={'Hild Luger Portifolio'} />
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
