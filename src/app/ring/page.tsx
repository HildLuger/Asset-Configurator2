'use client';

import React, { useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import MyEnvironment from '../Environment';
import store from '../store';
import Ring from './Ring';
import MessageOverlay from '../message';


const DressScene = () => {
  const controlsRef = useRef(null);

  return (
    <main>
      <Canvas style={{ width: '100vw', height: '100vh' }}shadows camera={{ position: [5, 0, 40], fov: 30 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} castShadow />
       
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.03}
          autoRotate
          autoRotateSpeed={4}
          minDistance={10}
          maxDistance={50}
        />
        <Ring/>
         <MyEnvironment />
      </Canvas>
      <MessageOverlay/>
    </main>
  );
};

export default DressScene;
