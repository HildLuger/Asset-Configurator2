import React, { useEffect, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { MeshPhysicalMaterial, Mesh, TextureLoader, RepeatWrapping, SRGBColorSpace } from 'three';

const Silver2: React.FC = () => {
    const glb = useLoader(GLTFLoader, 'silver2.glb');
    const roughnessMap = useLoader(TextureLoader, 'roughnessMap2.jpg');
    
    useEffect(() => {
        // Assuming the new API uses `colorSpace` and the constant `sRGBColorSpace`
        roughnessMap.colorSpace = SRGBColorSpace;
        roughnessMap.wrapS = roughnessMap.wrapT = RepeatWrapping;
        roughnessMap.repeat.set(0.2, 0.2);

        glb.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.material = new MeshPhysicalMaterial({
                    color: 0xaaaaaa,
                    metalness: 0.9,
                    roughness: 1.4,
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
  
export default Silver2;
