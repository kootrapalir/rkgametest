import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Sphere, Cylinder, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const KrishnaScene = ({ level }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  const levelConfigs = [
    // Level 0: Divine Blue Form
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#0087ff', scale: [2, 2, 2] },
        { type: 'sphere', position: [3, 2, 0], color: '#00d4ff', scale: [0.5, 0.5, 0.5] },
        { type: 'sphere', position: [-3, -2, 0], color: '#0066cc', scale: [0.8, 0.8, 0.8] },
      ],
      cameraPosition: [0, 5, 10],
      text: "नीलमणि तनु"
    },
    // Level 1: Beautiful Face
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#ffc300', scale: [1.5, 1.5, 1.5] },
        { type: 'sphere', position: [0.5, 0.3, 0], color: '#ffffff', scale: [0.2, 0.2, 0.2] },
        { type: 'sphere', position: [-0.5, 0.3, 0], color: '#ffffff', scale: [0.2, 0.2, 0.2] },
        { type: 'torus', position: [0, -0.5, 0], color: '#ff6b6b', scale: [0.3, 0.1, 0.1] },
      ],
      cameraPosition: [0, 2, 8],
      text: "मुख छवि"
    },
    // Level 2: Crown Adornment
    {
      elements: [
        { type: 'cylinder', position: [0, 1, 0], color: '#ffc300', scale: [0.8, 0.3, 0.8] },
        { type: 'sphere', position: [0, 1.5, 0], color: '#ff6b6b', scale: [0.2, 0.2, 0.2] },
        { type: 'sphere', position: [0.3, 1.4, 0], color: '#00d4ff', scale: [0.15, 0.15, 0.15] },
        { type: 'sphere', position: [-0.3, 1.4, 0], color: '#00d4ff', scale: [0.15, 0.15, 0.15] },
      ],
      cameraPosition: [0, 3, 6],
      text: "मुकुट शोभा"
    },
    // Level 3: Eyes Glory
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#0087ff', scale: [1, 1, 1] },
        { type: 'sphere', position: [0.3, 0.1, 0.2], color: '#000000', scale: [0.3, 0.3, 0.3] },
        { type: 'sphere', position: [-0.3, 0.1, 0.2], color: '#000000', scale: [0.3, 0.3, 0.3] },
        { type: 'sphere', position: [0.3, 0.1, 0.3], color: '#ffffff', scale: [0.1, 0.1, 0.1] },
        { type: 'sphere', position: [-0.3, 0.1, 0.3], color: '#ffffff', scale: [0.1, 0.1, 0.1] },
      ],
      cameraPosition: [0, 1, 5],
      text: "नेत्र महिमा"
    },
    // Level 4: Lotus Feet
    {
      elements: [
        { type: 'cylinder', position: [0, -1, 0], color: '#ffc300', scale: [0.5, 0.1, 0.5] },
        { type: 'sphere', position: [0, -0.8, 0], color: '#ff6b6b', scale: [0.3, 0.1, 0.3] },
        { type: 'sphere', position: [0.2, -0.9, 0], color: '#ff6b6b', scale: [0.1, 0.1, 0.1] },
        { type: 'sphere', position: [-0.2, -0.9, 0], color: '#ff6b6b', scale: [0.1, 0.1, 0.1] },
      ],
      cameraPosition: [0, -2, 8],
      text: "चरण कमल"
    }
  ];

  const config = levelConfigs[level] || levelConfigs[0];

  useEffect(() => {
    camera.position.set(...config.cameraPosition);
    camera.lookAt(0, 0, 0);
  }, [level, camera]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const renderElement = (element, index) => {
    const props = {
      position: element.position,
      scale: element.scale,
      key: index
    };

    switch (element.type) {
      case 'sphere':
        return <Sphere args={[1, 32, 32]} {...props}>
          <meshStandardMaterial color={element.color} />
        </Sphere>;
      case 'cylinder':
        return <Cylinder args={[1, 1, 1, 32]} {...props}>
          <meshStandardMaterial color={element.color} />
        </Cylinder>;
      case 'torus':
        return <Torus args={[1, 0.3, 16, 32]} {...props}>
          <meshStandardMaterial color={element.color} />
        </Torus>;
      case 'box':
        return <Box args={[1, 1, 1]} {...props}>
          <meshStandardMaterial color={element.color} />
        </Box>;
      default:
        return null;
    }
  };

  return (
    <group ref={groupRef}>
      {/* Level Elements */}
      {config.elements.map((element, index) => (
        <Float key={index} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          {renderElement(element, index)}
        </Float>
      ))}

      {/* Level Text */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          position={[0, 3, 0]}
        >
          {config.text}
          <meshStandardMaterial color="#ffc300" />
        </Text3D>
      </Float>

      {/* Ambient Particles */}
      {[...Array(50)].map((_, i) => (
        <Float key={`particle-${i}`} speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <Sphere args={[0.02, 8, 8]} position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}>
            <meshStandardMaterial color="#ffc300" transparent opacity={0.6} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

export default KrishnaScene;
