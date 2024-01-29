'use client';

import React, { useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import MyEnvironment from '../Environment';
import store from '../store';
import Dress from './Dress';
import MessageOverlay from '../message';
import DressSwitchButton from './DressSwitchButton';
import MessageOverlay2 from '../messageLod';

const DressScene = () => {
  const controlsRef = useRef(null);

  return (
    <main>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [0, 3, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} castShadow />
       
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.03}
          autoRotate
          autoRotateSpeed={0}
          minDistance={3}
          maxDistance={20}
        />
        <Dress/>
         <MyEnvironment />
      </Canvas>
    <DressSwitchButton/>
    </main>
  );
};

export default DressScene;
