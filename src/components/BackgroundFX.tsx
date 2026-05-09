"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-void">
      {/* Animated Glowing Orbs */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-blood/20 blur-[150px]"
        animate={{ 
          x: [0, 150, -100, 0], 
          y: [0, -100, 150, 0],
          scale: [1, 1.2, 0.8, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: "-10%", left: "-10%" }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-phantom-blue/40 blur-[120px]"
        animate={{ 
          x: [0, -200, 100, 0], 
          y: [0, 200, -100, 0],
          scale: [1, 0.8, 1.1, 1] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "10%", right: "-5%" }}
      />

      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-crimson-glow/10 blur-[150px]"
        animate={{ 
          x: [0, 100, -200, 0], 
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.9, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: "40%", left: "40%" }}
      />

      {/* Static Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Claustrophobic Vignette - Terror effect around edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]"></div>
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(50,0,0,0.15)] mix-blend-multiply"></div>
    </div>
  );
}
