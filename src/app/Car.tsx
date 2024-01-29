'use client';

// Car.tsx
import React, { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { RootState } from './store';

const Car: React.FC = () => {
  const { scene } = useGLTF('/car0.glb');
  const currentMaterialProps = useSelector((state: RootState) => state.carPaint.materials[state.carPaint.currentMaterialIndex]);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Enable casting and receiving shadows for all mesh
        child.castShadow = true;
        child.receiveShadow = true;

        // Apply material properties to the 'paint' material
        if (child.material.name === 'paint') {
          const material = child.material as THREE.MeshStandardMaterial;
          material.color.set(currentMaterialProps.color);
          material.roughness = currentMaterialProps.roughness;
          material.metalness = currentMaterialProps.metalness;
        }

        // Set the opacity of 'leather_brun.003' material to 0
        if (child.material.name === 'leather_brun.003') {
          const material = child.material as THREE.MeshStandardMaterial;
          material.opacity = 0;
          material.transparent = true; // Enable transparency
        }
      }
    });
  }, [scene, currentMaterialProps]);

  return <primitive object={scene} position={[0, -1, 0.2]} rotation={[0, Math.PI, 0]} />;
};


useGLTF.preload('/car0.glb'); // Preload the model for better performance

export default Car;
