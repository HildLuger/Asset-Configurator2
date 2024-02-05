import React, { useEffect, useState } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { TextureLoader, Object3D, FrontSide, DoubleSide } from 'three';

const Diamond: React.FC = () => {
  const { scene } = useThree();
  const [diamond, setDiamond] = useState<Object3D | null>(null);

  

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('diamond.glb', (gltf) => {
      // Assume the first mesh found is the diamond and set it to state
      const diamondObj = gltf.scene.children.find(child => child instanceof Object3D);
      if (diamondObj) {
        diamondObj.scale.set(1.01, 1.01, 1.01); //
        setDiamond(diamondObj);
      }
    });

    return () => {
      // Cleanup: remove the diamond object from the scene on component unmount
      if (diamond) {
        scene.remove(diamond);
      }
    };
  }, [scene, diamond]);

  return diamond ? (
    <primitive object={diamond}>
      <MeshTransmissionMaterial
        transmission={1}
        thickness={20}
        roughness={0.0}
        clearcoat={1}
        clearcoatRoughness={0}
        ior={2.417}
        attenuationDistance={1000}
        envMapIntensity={1}
        metalness={0.0}
        chromaticAberration={2}
        anisotropicBlur={0.0}
        distortion={0.0}
        // Ensure these undefined properties are handled or replaced as needed:
        map={undefined}
        envMap={undefined}
        normalMap={undefined}
        alphaMap={undefined}
        displacementMap={undefined}
        displacementScale={0}
        displacementBias={0} distortionScale={0} temporalDistortion={0}        // Additional adjustments for properties such as distortionScale and temporalDistortion
        
        side={DoubleSide} // Ensure the material is double-sided
        // Other properties as needed
       
      />
    </primitive>
  ) : null;
};

export default Diamond;
