import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const LotusFlower = ({ position = [0, 0, 0], scale = 1, color = '#ff6b6b' }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  const createPetal = (index, totalPetals) => {
    const angle = (index / totalPetals) * Math.PI * 2;
    const radius = 1;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    return (
      <mesh
        key={index}
        position={[x, 0, z]}
        rotation={[0, angle, 0]}
      >
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Center */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color="#ffc300" />
        </mesh>
        
        {/* Petals */}
        {Array.from({ length: 8 }, (_, i) => createPetal(i, 8))}
        
        {/* Stem */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      </group>
    </Float>
  );
};

export default LotusFlower;
