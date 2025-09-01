import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const LoadingScreen = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-krishna-blue-900 via-purple-900 to-krishna-blue-800 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-8"
        >
          <Loader2 className="w-16 h-16 text-divine-gold-400" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-divine-gold-400 to-lotus-pink-400 bg-clip-text text-transparent"
        >
          श्री कृष्ण द्वादशी
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-krishna-blue-200 mb-8"
        >
          Loading Divine Journey...
        </motion.p>
        
        <div className="w-64 mx-auto bg-black/30 rounded-full p-1 border border-white/20">
          <motion.div
            className="bg-gradient-to-r from-krishna-blue-500 to-divine-gold-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm text-krishna-blue-300 mt-4"
        >
          {Math.round(progress)}% Complete
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
