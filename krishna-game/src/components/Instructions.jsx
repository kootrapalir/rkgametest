import React from 'react';
import { motion } from 'framer-motion';
import { X, Mouse, Keyboard, Volume2, Eye, Heart } from 'lucide-react';

const Instructions = ({ onClose }) => {
  const controls = [
    {
      icon: <Mouse className="w-6 h-6" />,
      title: "Mouse Controls",
      description: "Click and drag to rotate camera, scroll to zoom in/out"
    },
    {
      icon: <Keyboard className="w-6 h-6" />,
      title: "Keyboard",
      description: "Arrow keys to navigate levels, Space to toggle audio"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Audio",
      description: "Toggle background music and sound effects"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Experience",
      description: "Immerse yourself in the divine beauty of Lord Krishna"
    }
  ];

  const levels = [
    "नीलमणि तनु - Divine Blue Form",
    "मुख छवि - Beautiful Face", 
    "मुकुट शोभा - Crown Adornment",
    "नेत्र महिमा - Eyes Glory",
    "चरण कमल - Lotus Feet"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gradient-to-br from-krishna-blue-900 via-purple-900 to-krishna-blue-800 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">How to Play</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Controls */}
          <div>
            <h3 className="text-xl font-semibold text-divine-gold-400 mb-4">Controls</h3>
            <div className="space-y-4">
              {controls.map((control, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <div className="text-divine-gold-400 mt-1">
                    {control.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{control.title}</h4>
                    <p className="text-gray-300 text-sm">{control.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Game Levels */}
          <div>
            <h3 className="text-xl font-semibold text-divine-gold-400 mb-4">Divine Journey</h3>
            <div className="space-y-3">
              {levels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <div className="w-8 h-8 bg-divine-gold-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-white text-sm">{level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Spiritual Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10 text-center"
        >
          <div className="flex justify-center items-center gap-2 text-divine-gold-400 mb-3">
            <Heart className="w-5 h-5" />
            <span className="text-lg font-sanskrit">Spiritual Experience</span>
            <Heart className="w-5 h-5" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            This game is designed to help you experience the divine beauty of Lord Krishna through interactive 3D visualization. 
            Each level represents a different aspect of His divine form as described in ancient verses. 
            Take your time to explore and immerse yourself in the spiritual atmosphere.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Instructions;
