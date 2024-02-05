import React, { useEffect, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { MeshPhysicalMaterial, Mesh, TextureLoader, RepeatWrapping, SRGBColorSpace, Vector3 } from 'three';

const Silver: React.FC = () => {
    const glb = useLoader(GLTFLoader, 'silver.glb');
    const roughnessMap = useLoader(TextureLoader, 'roughnessMap2.jpg');
    
    useEffect(() => {
        roughnessMap.colorSpace = SRGBColorSpace; // Assuming SRGBColorSpace is the correct enum for your Three.js version
        roughnessMap.wrapS = roughnessMap.wrapT = RepeatWrapping;
        roughnessMap.repeat.set(0.1, 0.1);

        glb.scene.traverse((object) => {
            if (object instanceof Mesh) {
                // Set the scale of the silver object here
                object.scale.set(0.975, 0.9, 0.975); // Adjust the scale values as needed
                
                object.material = new MeshPhysicalMaterial({
                    color: 0xeeeeee,
                    metalness: 0.9,
                    roughness: 0.8, // Ensure roughness is within a valid range, [0, 1]
                    envMapIntensity: 1.0,
                    clearcoat: 1.0,
                    clearcoatRoughness: 0.5,
                    reflectivity: 0.9,
                    transmission: 0.0,
                    opacity: 1.0,
                    transparent: false,
                    depthTest: true,
                    depthWrite: true,
                    wireframe: false,
                    sheen: 0,
                    sheenRoughness: 0.1,
                    sheenColor: 0xffffff,
                    iridescence: 0.0,
                    iridescenceIOR: 1.3,
                    anisotropy: 0,
                    roughnessMap: roughnessMap,
                    bumpMap: roughnessMap,
                    bumpScale: 2,
                });
            }
        });
    }, [glb, roughnessMap]);
  
    return <primitive object={glb.scene} />;
};
  
export default Silver;
