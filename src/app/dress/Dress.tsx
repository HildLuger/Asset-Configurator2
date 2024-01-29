import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Ensure this path is correct

type GLTFResult = ReturnType<typeof useGLTF>;

const Dress: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const gltfResult: GLTFResult = useGLTF(useSelector((state: RootState) => state.model.currentModel), true);
  const { scene, animations } = gltfResult;
  const { invalidate } = useThree();
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const [rotationY, setRotationY] = useState(0);
  const rotationSpeed = 0.000;
  const animationSpeed = 1.0;

  useEffect(() => {
    if (groupRef.current) {
      mixerRef.current = new THREE.AnimationMixer(groupRef.current);
      animations.forEach((clip: THREE.AnimationClip) => {
        const action = mixerRef.current!.clipAction(clip);
        action.play();
      });
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [animations, groupRef]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta * animationSpeed);
      invalidate(); // Force re-render
    }
    setRotationY(prev => prev + rotationSpeed);
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={[3, 3, 3]} position={[0, -2.5, 0]} rotation={[0, rotationY, 0]} />
    </group>
  );
};

// Preloading both models for better performance
useGLTF.preload('/dress.gltf');
useGLTF.preload('/dress2.gltf');

export default Dress;
