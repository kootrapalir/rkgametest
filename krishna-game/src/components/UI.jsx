import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Volume2, VolumeX, Home } from 'lucide-react';

const UI = ({ currentLevel, levels, onNext, onPrev, onBack, audioEnabled, onToggleAudio }) => {
  const currentLevelData = levels[currentLevel];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 pointer-events-auto">
        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-black/70 transition-colors"
          >
            <Home className="w-4 h-4" />
            Menu
          </motion.button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-1">
              {currentLevelData.name}
            </h2>
            <p className="text-krishna-blue-200">
              {currentLevelData.description}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleAudio}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-black/70 transition-colors"
          >
            {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 pointer-events-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-1 border border-white/20">
          <div 
            className="bg-gradient-to-r from-krishna-blue-500 to-divine-gold-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentLevel + 1) / levels.length) * 100}%` }}
          />
        </div>
        <p className="text-center text-white mt-2 text-sm">
          Level {currentLevel + 1} of {levels.length}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          disabled={currentLevel === 0}
          className="flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-5 h-5" />
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          disabled={currentLevel === levels.length - 1}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-krishna-blue-600 to-krishna-blue-700 hover:from-krishna-blue-500 hover:to-krishna-blue-600 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Level Info Panel */}
      <div className="absolute bottom-8 right-8 w-80 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 p-4 text-white"
        >
          <h3 className="text-lg font-semibold mb-2 text-divine-gold-400">
            Verse {currentLevelData.verse}
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            Explore the divine beauty of Lord Krishna's {currentLevelData.description.toLowerCase()}
          </p>
          <div className="text-xs text-krishna-blue-300">
            Use mouse to rotate, scroll to zoom, and drag to pan
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UI;
