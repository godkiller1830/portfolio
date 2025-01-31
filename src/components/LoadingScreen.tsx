import React from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-50"
    >
      <div className="relative">
        {/* Glowing background effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"
        />
        
        {/* SVG Logo with animations */}
        <motion.img
          src="/src/images/Preload.svg"
          alt="Loading"
          className="w-24 h-24 relative z-10"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))"
          }}
        />
        
        {/* Orbiting particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.3 },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
            }}
            style={{
              transformOrigin: "60px 60px",
              left: "50%",
              top: "50%",
              margin: "-1px",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}