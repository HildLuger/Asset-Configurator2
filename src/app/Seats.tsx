'use client';

// Seats.tsx
import React, { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { RootState } from './store';

const Seats: React.FC = () => {
  const { scene } = useGLTF('/seats.glb');
  const currentSeatsMaterialProps = useSelector((state: RootState) => state.carSeats.materials[state.carSeats.currentMaterialIndex]);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material.name === 'leather_brun.003') {
        const material = child.material as THREE.MeshStandardMaterial;
        material.color.set(currentSeatsMaterialProps.color);
        material.roughness = currentSeatsMaterialProps.roughness;
        material.metalness = currentSeatsMaterialProps.metalness;
      }
    });
  }, [scene, currentSeatsMaterialProps]);

  return <primitive object={scene} position={[0, -1, 0.2]} rotation={[0, Math.PI, 0]} />;
};

export default Seats;

