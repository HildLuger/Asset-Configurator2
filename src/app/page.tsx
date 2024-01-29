'use client';

// Home component
import React, { useRef } from 'react';
import Car from './Car';
import Seats from './Seats';
import { OrbitControls, AccumulativeShadows, RandomizedLight, MeshReflectorMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import MyEnvironment from './Environment';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import CircularButton from './CircularButton';
import CircularButton2 from './CircularButton2';
import { changeMaterial } from './slices/carPaintSlice';
import { changeSeatsMaterial } from './slices/carSeatsSlice';

export default function Home() {
    const controlsRef = useRef(null);
    const dispatch = useDispatch();

    const handlePaintButtonClick = () => {
        dispatch(changeMaterial());
    };

    const handleSeatsButtonClick = () => {
        dispatch(changeSeatsMaterial());
    };

    return (
        <Provider store={store}>
            <Canvas style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [5, 0, 15], fov: 30 }}>
                <spotLight position={[15, 15, 15]} angle={0.7} penumbra={1} castShadow intensity={200} shadow-bias={-0.0001} />
                <Car />
                <Seats />
                <OrbitControls
                    ref={controlsRef as any}
                    enableDamping
                    dampingFactor={0.03}
                    autoRotate
                    autoRotateSpeed={2}
                    minDistance={3}
                    maxDistance={20}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                />
                <MyEnvironment />
                <AccumulativeShadows position={[0, -0.99, 0]} frames={100} alphaTest={0.8} scale={20} opacity={0.8}>
                    <RandomizedLight amount={8} radius={100} ambient={10} position={[1, 5, -10]} />
                </AccumulativeShadows>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
                    <circleGeometry args={[20, 64]} />
                    <MeshReflectorMaterial
                        blur={[300, 300]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={1.5}
                        roughness={0.5}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#444"
                        metalness={0.5}
                        mirror={0.5}
                    />
                </mesh>
            </Canvas>
            <CircularButton onClick={handlePaintButtonClick} />
            <CircularButton2 onClick={handleSeatsButtonClick} />
        </Provider>
    );
}
