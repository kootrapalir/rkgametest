import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Settings, Info, Music, Volume2, Heart, Star } from 'lucide-react';
import Credits from './Credits';

const MainMenu = () => {
  const navigate = useNavigate();
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [showCredits, setShowCredits] = useState(false);

  const verses = [
    "नीलमणि तनु लखि गइ बलिहार",
    "अनुपम नीलो तनु सरकार",
    "श्याम मुख छवि लखि गइ बलिहार",
    "श्याम सिर मुकुट लटक बलिहार"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-krishna-blue-900 via-purple-900 to-krishna-blue-800 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-divine-gold-400 rounded-full"
              animate={{
                x: [0, Math.random() * window.innerWidth],
                y: [0, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-divine-gold-400 to-lotus-pink-400 bg-clip-text text-transparent">
              श्री कृष्ण द्वादशी
            </h1>
            <h2 className="text-2xl mb-8 text-krishna-blue-200">
              Divine Journey Through Krishna's Form
            </h2>
          </motion.div>

          {/* Animated Verse Display */}
          <motion.div
            key={currentVerse}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
          >
            <p className="text-xl font-sanskrit text-divine-gold-300">
              {verses[currentVerse]}
            </p>
          </motion.div>

          {/* Menu Buttons */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartGame}
              className="flex items-center justify-center gap-2 w-64 mx-auto px-8 py-4 bg-gradient-to-r from-krishna-blue-600 to-krishna-blue-700 hover:from-krishna-blue-500 hover:to-krishna-blue-600 rounded-lg text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              Begin Divine Journey
            </motion.button>

            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Settings className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                {audioEnabled ? <Volume2 className="w-6 h-6 text-white" /> : <Music className="w-6 h-6 text-white" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCredits(true)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Info className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-divine-gold-400 mb-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-sanskrit">हरे कृष्ण</span>
              <Heart className="w-4 h-4" />
            </div>
            <p className="text-xs text-krishna-blue-300">
              Based on the divine verses of Kripalu Maharaj
            </p>
          </motion.div>
        </div>
      </div>

      {showCredits && <Credits onClose={() => setShowCredits(false)} />}
    </>
  );
};

export default MainMenu;
