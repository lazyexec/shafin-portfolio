import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={modelRef} dispose={null} position={[0, -1, 0]}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

export function HeroModel() {
  return (
    <div className="absolute top-0 right-0 w-full h-[80vh] md:w-[60vw] md:h-screen z-0 pointer-events-auto flex items-center justify-center opacity-80 md:opacity-100 mix-blend-screen overflow-visible cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 1, 6], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
        <Environment preset="night" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <Model url="/model.glb" />
          </Float>
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/model.glb');
