// CameraButtonDress1.tsx
import React from 'react';
import gsap from 'gsap';
import { PerspectiveCamera, OrthographicCamera } from 'three';

interface CameraButtonDress1Props {
  camera: PerspectiveCamera | OrthographicCamera;
  controlsRef: React.RefObject<any>; // Generic type for the ref
}

const CameraButtonDress1: React.FC<CameraButtonDress1Props> = ({ camera, controlsRef }) => {
  const handleCameraAnimate = () => {
    gsap.to(camera.position, {
      x: 5, y: 5, z: 5,
      duration: 2,
      onUpdate: () => camera.updateProjectionMatrix(),
      onComplete: () => {
        if (controlsRef && controlsRef.current) {
          controlsRef.current.autoRotate = true;
        }
      }
    });

    if (controlsRef && controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  };

  return (
    <button
      // Button styling and attributes
    >
      <span>Move</span>
    </button>
  );
};

export default CameraButtonDress1;
