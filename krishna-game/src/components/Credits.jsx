import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart, Star } from 'lucide-react';

const Credits = ({ onClose }) => {
  const credits = [
    {
      title: "Original Verses",
      author: "कृपालु महाराज",
      description: "श्री कृष्ण की दिव्य छवि - कृपालु महाराज के पद"
    },
    {
      title: "Game Development",
      author: "Divine Game Creator",
      description: "Interactive 3D Experience"
    },
    {
      title: "Spiritual Guidance",
      author: "Ancient Wisdom",
      description: "Based on Vedic Scriptures"
    }
  ];

  const technologies = [
    "React 18", "Three.js", "Framer Motion", "Tailwind CSS",
    "Howler.js", "React Three Fiber", "Zustand", "Lucide React"
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
        className="bg-gradient-to-br from-krishna-blue-900 via-purple-900 to-krishna-blue-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Credits</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        <div className="space-y-8">
          {/* Credits */}
          <div>
            <h3 className="text-xl font-semibold text-divine-gold-400 mb-4">Acknowledgments</h3>
            <div className="space-y-4">
              {credits.map((credit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white">{credit.title}</h4>
                  <p className="text-divine-gold-300 font-sanskrit">{credit.author}</p>
                  <p className="text-gray-300 text-sm mt-1">{credit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-divine-gold-400 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-white/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Spiritual Message */}
          <div className="text-center py-6 border-t border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex justify-center items-center gap-2 text-divine-gold-400">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-sanskrit">हरे कृष्ण</span>
                <Heart className="w-5 h-5" />
              </div>
              <p className="text-gray-300 text-sm">
                "नीलमणि तनु लखि गइ बलिहार" - I surrender to the sight of Your sapphire-like form
              </p>
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-divine-gold-400 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Credits;
