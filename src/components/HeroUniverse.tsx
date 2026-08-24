import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Starfield() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      // 1. Continuous idle rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
      
      // 2. Scroll interaction
      const scrollY = window.scrollY;
      
      // Calculate target transformations based on scroll position
      // - Twist the galaxy (rotation.z)
      // - Move the galaxy towards the camera (position.z)
      // - Slight upward parallax (position.y)
      const targetRotationZ = scrollY * 0.001;
      const targetPositionZ = scrollY * 0.005;
      const targetPositionY = scrollY * 0.002;
      
      // Smoothly interpolate current values towards the target values
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, targetRotationZ, 0.05);
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetPositionZ, 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetPositionY, 0.05);
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={400} scale={20} size={2} speed={0.2} opacity={0.4} color="#a855f7" />
      <Sparkles count={200} scale={20} size={3} speed={0.4} opacity={0.2} color="#06b6d4" />
    </group>
  );
}

export function HeroUniverse() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-[#0a0a0a]">
      {/* Subtle cosmic gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e0a3c] via-[#0a0a0a] to-[#0a0a0a] opacity-60" />
      
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }}>
        <Starfield />
      </Canvas>
      
      {/* Fade out to the bottom to seamlessly blend with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </div>
  );
}
