import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.9}  // Pixels brighter than this value will contribute to the bloom
        luminanceSmoothing={0.75} // Smoothes the edges of the bloom effect
        intensity={0.5}           // The overall intensity of the bloom effect
        radius={0.5}              // The radius of the bloom effect
      />
      {/* Add more post-processing effects here as needed */}
    </EffectComposer>
  );
};

export default PostProcessing;
