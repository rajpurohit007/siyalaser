"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

/**
 * This component loads your external 3D model file.
 */
function RealisticDiamondModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  // 1. LOAD THE MODEL
  // Ensure your file is named 'diamond.glb' and is in the 'public' folder.
  // useGLTF will automatically find it at the root path.
  const { nodes } = useGLTF('/diamond.glb') as any;

  // We need to find the actual mesh geometry inside the loaded file.
  // We search for the first node that is a mesh.
  const meshKey = Object.keys(nodes).find((key) => nodes[key].isMesh);
  const diamondGeometry = meshKey ? nodes[meshKey]?.geometry : undefined;

  // Safety check: if the model didn't load correctly
  if (!diamondGeometry) return null;

  // 2. ROTATION ANIMATION
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow, steady rotation
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
       {/* 3. RENDER THE MODEL GEOMETRY */}
      <mesh 
        ref={meshRef} 
        geometry={diamondGeometry} 
        scale={[1.5, 1.5, 1.5]} // Adjust scale if your model is too big/small
        position={[-0.3, -0.5, 0]}
      >
        {/* 4. APPLY REALISTIC DIAMOND MATERIAL */}
        {/* This overwrites whatever generic material came with the model */}
        <meshPhysicalMaterial 
          roughness={0}             // Perfectly smooth
          transmission={1}          // Fully transparent glass/gem
          thickness={2.5}           // High thickness for deep refractions
          ior={2.417}               // Exact Refractive Index of Diamond
          attenuationColor="#ffffff" // Clear color
          attenuationDistance={1}
          clearcoat={1}             // Shiny top layer
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

// Preload the model for faster startup
useGLTF.preload('/diamond.glb');

const DiamondScene = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
        {/* Dark background */}
        <color attach="background" args={['#0a0a0a']} />
        
        {/* Lighting setup to catch the facets */}
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="white" />
        <pointLight position={[0, 5, -5]} intensity={1} color="white" />

        <RealisticDiamondModel />

        {/* 'studio' environment creates the best, sharpest reflections for gems */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default DiamondScene;