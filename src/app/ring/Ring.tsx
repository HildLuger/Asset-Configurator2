import React, { useRef, useEffect } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import * as THREE from 'three';

const Ring = () => {
  const lodRef = useRef<THREE.LOD>(new THREE.LOD()); // Initialize with a new LOD object
  const [ringLOD0, ringLOD1, ringLOD2] = useLoader(GLTFLoader, ['/ringLOD0.glb', '/ringLOD1.glb', '/ringLOD2.glb']);
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    // Ensure all models are loaded
    if (ringLOD0.scene && ringLOD1.scene && ringLOD2.scene) {
      const lod = lodRef.current;
      lod.levels.length = 0; // Clear existing levels if any

      lod.addLevel(ringLOD0.scene, 15);
      lod.addLevel(ringLOD1.scene, 25);
      lod.addLevel(ringLOD2.scene, 40);
    }
  }, [ringLOD0, ringLOD1, ringLOD2]); // React to changes in loaded models

  useFrame(() => {
    lodRef.current.update(camera);
  });

  return <primitive object={lodRef.current} />;
};

export default Ring;
