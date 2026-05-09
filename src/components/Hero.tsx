"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-void">
      {/* Background Radial Gradient Flashlight Effect - Spooky Breathing Red/Blue */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.4)_0%,rgba(10,17,40,0.8)_40%,rgba(0,0,0,1)_100%)] animate-breathe mix-blend-screen"></div>
      
      {/* Fog/Noise overlay drifting slowly */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=600&auto=format&fit=crop')] mix-blend-overlay"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated Floating Title */}
        <motion.h1 
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 animate-flicker tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{ 
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: { duration: 1.2, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          ¿Has sentido esa mirada en la oscuridad cuando todos duermen?
        </motion.h1>

        {/* Animated Floating Subtitle */}
        <motion.p 
          className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        >
          Bienvenido a <strong className="text-crimson-glow">El Umbral de lo Desconocido</strong>. 
          El misterio se vuelve una experiencia que puedes escuchar y vestir.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void via-void/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
