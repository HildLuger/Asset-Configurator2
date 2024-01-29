import React, { useRef, useEffect } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import * as THREE from 'three';

const Ring = () => {
  const lodRef = useRef<THREE.LOD | null>(null);
  const ringLOD0 = useLoader(GLTFLoader, '/ringLOD0.glb');
  const ringLOD1 = useLoader(GLTFLoader, '/ringLOD1.glb');
  const ringLOD2 = useLoader(GLTFLoader, '/ringLOD2.glb');
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    const lod = new THREE.LOD();
    lod.addLevel(ringLOD0.scene, 5);
    lod.addLevel(ringLOD1.scene, 10);
    lod.addLevel(ringLOD2.scene, 15);

    lodRef.current = lod;
  }, [ringLOD0, ringLOD1, ringLOD2]);

  useFrame(() => {
    if (lodRef.current) {
      lodRef.current.update(camera);
    }
  });

  return lodRef.current ? <primitive object={lodRef.current} /> : null;
};

export default Ring;
