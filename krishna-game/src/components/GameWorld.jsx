import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars, Text3D, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EnhancedKrishnaScene from './EnhancedKrishnaScene';
import UI from './UI';

const GameWorld = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showUI, setShowUI] = useState(true);

  const levels = [
    { name: "नीलमणि तनु", description: "Divine Blue Form", verse: 1 },
    { name: "मुख छवि", description: "Beautiful Face", verse: 3 },
    { name: "मुकुट शोभा", description: "Crown Adornment", verse: 4 },
    { name: "नेत्र महिमा", description: "Eyes Glory", verse: 7 },
    { name: "चरण कमल", description: "Lotus Feet", verse: 11 }
  ];

  const handleBackToMenu = () => {
    navigate('/');
  };

  const handleNextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const handlePrevLevel = () => {
    if (currentLevel > 0) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  return (
    <div className="w-full h-screen relative">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0087ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sky sunPosition={[1, 0.1, 1]} />
        
        <EnhancedKrishnaScene level={currentLevel} />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>

      {/* UI Overlay */}
      {showUI && (
        <div className="absolute inset-0 pointer-events-none">
          <UI 
            currentLevel={currentLevel}
            levels={levels}
            onNext={handleNextLevel}
            onPrev={handlePrevLevel}
            onBack={handleBackToMenu}
            audioEnabled={audioEnabled}
            onToggleAudio={() => setAudioEnabled(!audioEnabled)}
          />
        </div>
      )}

      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowUI(!showUI)}
          className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-black/70 transition-colors pointer-events-auto"
        >
          {showUI ? 'Hide UI' : 'Show UI'}
        </motion.button>
      </div>
    </div>
  );
};

export default GameWorld;
