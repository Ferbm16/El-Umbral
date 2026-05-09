"use client";

import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

export default function About() {
  const team = [
    { 
      name: "Locutor / Anfitrión", 
      role: "La voz en la oscuridad", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" 
    },
    { 
      name: "Investigador", 
      role: "Cazador de leyendas", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300" 
    },
    { 
      name: "Productor", 
      role: "Maestro del terror sonoro", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300" 
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-coal/20 backdrop-blur-md px-6 md:px-12 relative overflow-hidden border-b border-blood/10">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Qué es y qué hace */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 0.6 },
              scale: { type: "spring", stiffness: 100 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
          >
            <Ghost className="w-12 h-12 text-blood mx-auto mb-6 opacity-80 drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]" />
          </motion.div>
          <motion.h2 
            className="font-serif text-4xl md:text-5xl text-white mb-8 hover-glitch transition-colors"
            initial={{ opacity: 0, py: 30 }}
            whileInView={{ opacity: 1, y: [0, -5, 0] }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            ¿Qué es El Umbral de lo Desconocido?
          </motion.h2>
          <motion.p 
            className="font-sans text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [0, 5, 0] }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 1, delay: 0.3 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          >
            Somos más que un simple podcast. Somos un puente hacia lo inexplicable. Nos dedicamos a desenterrar leyendas mexicanas, recopilar relatos reales que la gente prefiere callar, y transformar el miedo en una experiencia inmersiva. Diseñamos contenido sonoro y mercancía exclusiva para quienes encuentran fascinación en el misterio.
          </motion.p>
        </div>

        {/* Quiénes somos */}
        <div className="mt-12 text-center">
          <motion.h3 
            className="font-serif text-3xl text-white mb-12 hover-glitch transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Quiénes Somos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: [0, -15, 0] }}
                viewport={{ once: true }}
                transition={{ 
                  opacity: { duration: 0.6, delay: idx * 0.2 },
                  y: { duration: 4 + idx*.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 } 
                }}
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-800 mb-6 group-hover:border-blood transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-blood/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-serif text-xl text-white font-bold">{member.name}</h4>
                <p className="text-blood text-sm uppercase tracking-widest mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
