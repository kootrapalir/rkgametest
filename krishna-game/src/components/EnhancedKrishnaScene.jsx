import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Sphere, Cylinder, Torus, Box, Ring } from '@react-three/drei';
import * as THREE from 'three';
import ParticleSystem from './ParticleSystem';
import LotusFlower from './LotusFlower';
import DivineLight from './DivineLight';

const EnhancedKrishnaScene = ({ level }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  const levelConfigs = [
    // Level 0: Divine Blue Form - Neelmani Tanu
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#0087ff', scale: [2, 2, 2], material: 'shiny' },
        { type: 'sphere', position: [3, 2, 0], color: '#00d4ff', scale: [0.5, 0.5, 0.5], material: 'glow' },
        { type: 'sphere', position: [-3, -2, 0], color: '#0066cc', scale: [0.8, 0.8, 0.8], material: 'shiny' },
        { type: 'lotus', position: [2, -1, 2], color: '#ff6b6b', scale: 0.8 },
        { type: 'lotus', position: [-2, -1, -2], color: '#ff6b6b', scale: 0.6 },
      ],
      cameraPosition: [0, 5, 10],
      text: "नीलमणि तनु",
      description: "Divine Blue Form",
      particles: { count: 500, color: '#0087ff' },
      lights: [
        { position: [5, 5, 5], color: '#0087ff', intensity: 2 },
        { position: [-5, 3, -5], color: '#00d4ff', intensity: 1.5 }
      ]
    },
    // Level 1: Beautiful Face - Mukh Chhavi
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#ffc300', scale: [1.5, 1.5, 1.5], material: 'shiny' },
        { type: 'sphere', position: [0.5, 0.3, 0], color: '#ffffff', scale: [0.2, 0.2, 0.2], material: 'glow' },
        { type: 'sphere', position: [-0.5, 0.3, 0], color: '#ffffff', scale: [0.2, 0.2, 0.2], material: 'glow' },
        { type: 'torus', position: [0, -0.5, 0], color: '#ff6b6b', scale: [0.3, 0.1, 0.1], material: 'shiny' },
        { type: 'ring', position: [0, 0.8, 0], color: '#ffc300', scale: [0.8, 0.8, 0.1], material: 'shiny' },
      ],
      cameraPosition: [0, 2, 8],
      text: "मुख छवि",
      description: "Beautiful Face",
      particles: { count: 300, color: '#ffc300' },
      lights: [
        { position: [3, 3, 3], color: '#ffc300', intensity: 2 },
        { position: [-3, 2, -3], color: '#ff6b6b', intensity: 1 }
      ]
    },
    // Level 2: Crown Adornment - Mukut Shobha
    {
      elements: [
        { type: 'cylinder', position: [0, 1, 0], color: '#ffc300', scale: [0.8, 0.3, 0.8], material: 'shiny' },
        { type: 'sphere', position: [0, 1.5, 0], color: '#ff6b6b', scale: [0.2, 0.2, 0.2], material: 'glow' },
        { type: 'sphere', position: [0.3, 1.4, 0], color: '#00d4ff', scale: [0.15, 0.15, 0.15], material: 'shiny' },
        { type: 'sphere', position: [-0.3, 1.4, 0], color: '#00d4ff', scale: [0.15, 0.15, 0.15], material: 'shiny' },
        { type: 'ring', position: [0, 1.8, 0], color: '#ffc300', scale: [0.6, 0.6, 0.05], material: 'shiny' },
      ],
      cameraPosition: [0, 3, 6],
      text: "मुकुट शोभा",
      description: "Crown Adornment",
      particles: { count: 400, color: '#ffc300' },
      lights: [
        { position: [4, 4, 4], color: '#ffc300', intensity: 2.5 },
        { position: [-4, 2, -4], color: '#ff6b6b', intensity: 1.5 }
      ]
    },
    // Level 3: Eyes Glory - Netra Mahima
    {
      elements: [
        { type: 'sphere', position: [0, 0, 0], color: '#0087ff', scale: [1, 1, 1], material: 'shiny' },
        { type: 'sphere', position: [0.3, 0.1, 0.2], color: '#000000', scale: [0.3, 0.3, 0.3], material: 'shiny' },
        { type: 'sphere', position: [-0.3, 0.1, 0.2], color: '#000000', scale: [0.3, 0.3, 0.3], material: 'shiny' },
        { type: 'sphere', position: [0.3, 0.1, 0.3], color: '#ffffff', scale: [0.1, 0.1, 0.1], material: 'glow' },
        { type: 'sphere', position: [-0.3, 0.1, 0.3], color: '#ffffff', scale: [0.1, 0.1, 0.1], material: 'glow' },
        { type: 'ring', position: [0, 0, 0.4], color: '#ffc300', scale: [0.8, 0.8, 0.05], material: 'shiny' },
      ],
      cameraPosition: [0, 1, 5],
      text: "नेत्र महिमा",
      description: "Eyes Glory",
      particles: { count: 600, color: '#0087ff' },
      lights: [
        { position: [2, 2, 2], color: '#0087ff', intensity: 2 },
        { position: [-2, 1, -2], color: '#ffffff', intensity: 1.5 }
      ]
    },
    // Level 4: Lotus Feet - Charan Kamal
    {
      elements: [
        { type: 'cylinder', position: [0, -1, 0], color: '#ffc300', scale: [0.5, 0.1, 0.5], material: 'shiny' },
        { type: 'sphere', position: [0, -0.8, 0], color: '#ff6b6b', scale: [0.3, 0.1, 0.3], material: 'shiny' },
        { type: 'sphere', position: [0.2, -0.9, 0], color: '#ff6b6b', scale: [0.1, 0.1, 0.1], material: 'glow' },
        { type: 'sphere', position: [-0.2, -0.9, 0], color: '#ff6b6b', scale: [0.1, 0.1, 0.1], material: 'glow' },
        { type: 'lotus', position: [0, -2, 0], color: '#ff6b6b', scale: 1.2 },
        { type: 'lotus', position: [1, -2, 0], color: '#ff6b6b', scale: 0.8 },
        { type: 'lotus', position: [-1, -2, 0], color: '#ff6b6b', scale: 0.8 },
      ],
      cameraPosition: [0, -2, 8],
      text: "चरण कमल",
      description: "Lotus Feet",
      particles: { count: 700, color: '#ff6b6b' },
      lights: [
        { position: [3, -1, 3], color: '#ff6b6b', intensity: 2 },
        { position: [-3, -1, -3], color: '#ffc300', intensity: 1.5 }
      ]
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

    const materialProps = {
      color: element.color,
      ...(element.material === 'glow' && {
        emissive: element.color,
        emissiveIntensity: 0.5
      }),
      ...(element.material === 'shiny' && {
        metalness: 0.8,
        roughness: 0.2
      })
    };

    switch (element.type) {
      case 'sphere':
        return <Sphere args={[1, 32, 32]} {...props}>
          <meshStandardMaterial {...materialProps} />
        </Sphere>;
      case 'cylinder':
        return <Cylinder args={[1, 1, 1, 32]} {...props}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>;
      case 'torus':
        return <Torus args={[1, 0.3, 16, 32]} {...props}>
          <meshStandardMaterial {...materialProps} />
        </Torus>;
      case 'ring':
        return <Ring args={[1, 1.2, 32]} {...props}>
          <meshStandardMaterial {...materialProps} />
        </Ring>;
      case 'box':
        return <Box args={[1, 1, 1]} {...props}>
          <meshStandardMaterial {...materialProps} />
        </Box>;
      case 'lotus':
        return <LotusFlower position={element.position} scale={element.scale} color={element.color} />;
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

      {/* Divine Lights */}
      {config.lights.map((light, index) => (
        <DivineLight
          key={index}
          position={light.position}
          color={light.color}
          intensity={light.intensity}
        />
      ))}

      {/* Particle System */}
      <ParticleSystem count={config.particles.count} color={config.particles.color} />

      {/* Level Text */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          position={[0, 3, 0]}
        >
          {config.text}
          <meshStandardMaterial color="#ffc300" emissive="#ffc300" emissiveIntensity={0.3} />
        </Text3D>
      </Float>

      {/* Ambient Floating Elements */}
      {[...Array(30)].map((_, i) => (
        <Float key={`ambient-${i}`} speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
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

export default EnhancedKrishnaScene;
