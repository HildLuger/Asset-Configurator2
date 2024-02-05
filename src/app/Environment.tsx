// Environment.tsx

'use client';

// Environment.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Environment as DreiEnvironment } from '@react-three/drei';
import { AmbientLight } from 'three';
import { RootState } from './store';

const MyEnvironment = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  return (
    <>
      <DreiEnvironment 
        preset={isDarkMode ? "night" : "sunset"} 
        background blur={0.9} 
      />
      <directionalLight position={ [ 1, 2, 3 ] } intensity={isDarkMode ? 1 : 0} />
      <directionalLight position={ [ -1, 2, -3 ] } intensity={isDarkMode ? 0.5 : 0} />
   
      <ambientLight intensity={0} />
    </>
  );
};

export default MyEnvironment;


