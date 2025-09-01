import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Trophy, Home, RotateCcw } from 'lucide-react';

const CompletionScreen = ({ onRestart, onBackToMenu }) => {
  const navigate = useNavigate();
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    setShowFireworks(true);
  }, []);

  const Firework = ({ delay = 0 }) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 1 }}
      className="absolute w-2 h-2 bg-divine-gold-400 rounded-full"
      style={{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
    />
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-krishna-blue-900 via-purple-900 to-krishna-blue-800 flex items-center justify-center z-50">
      {/* Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Firework key={i} delay={i * 0.1} />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center text-white max-w-2xl mx-auto p-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <Trophy className="w-24 h-24 text-divine-gold-400 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-divine-gold-400 to-lotus-pink-400 bg-clip-text text-transparent"
        >
          जय श्री कृष्ण!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl text-krishna-blue-200 mb-8"
        >
          Divine Journey Completed
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8"
        >
          <p className="text-lg font-sanskrit text-divine-gold-300 mb-4">
            "नीलमणि तनु लखि गइ बलिहार"
          </p>
          <p className="text-gray-300">
            You have experienced the divine beauty of Lord Krishna through all five aspects of His form. 
            May this journey bring you closer to the divine and fill your heart with spiritual bliss.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex justify-center items-center gap-2 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-divine-gold-400 fill-current" />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-krishna-blue-600 to-krishna-blue-700 hover:from-krishna-blue-500 hover:to-krishna-blue-600 rounded-lg text-white font-semibold transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5" />
            Experience Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToMenu}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Menu
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-8 flex justify-center items-center gap-2 text-divine-gold-400"
        >
          <Heart className="w-5 h-5" />
          <span className="text-lg font-sanskrit">हरे कृष्ण हरे राम</span>
          <Heart className="w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
};

export default CompletionScreen;
