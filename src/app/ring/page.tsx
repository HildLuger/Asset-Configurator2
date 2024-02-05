'use client'

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Diamond from './diamond';

import MyEnvironment from '../Environment';
import Silver from './silver';
import Silver2 from './silver2';
import Gold from './gold';
import Rose from './rose';


const RingScene: React.FC = () => {
  // If you need to interact with OrbitControls directly, consider using 'any' for simplicity,
  // or you can look for a specific type from 'three' or '@react-three/fiber' if available.
  const controlsRef = useRef<any>(null);

  return (
    <main>
      
      <Canvas  style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [0, 80, 80], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={4} position={[0, 5, 5]} castShadow />
        <directionalLight intensity={4} position={[-5, 5, -5]} castShadow />

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.03}
          autoRotate
          autoRotateSpeed={1}
          minDistance={20}
          maxDistance={100}
        />
        <Diamond />
      
        <Silver/>
        <Silver2/>
        <Gold/>
        <Rose/>


        
        <MyEnvironment />
   
      </Canvas>
    </main>
  );
};

export default RingScene;
