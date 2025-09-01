import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';

const DivineLight = ({ position = [0, 0, 0], color = '#ffc300', intensity = 1 }) => {
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = intensity + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={position}
      color={color}
      intensity={intensity}
      distance={10}
      decay={2}
    />
  );
};

export default DivineLight;
