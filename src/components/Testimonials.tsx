"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"Escuchaba El Umbral de lo Desconocido mientras volvía a casa... y juro que alguien susurró mi nombre en el asiento trasero."`,
      author: "M. Torres",
      location: "CDMX"
    },
    {
      text: `"La sudadera tiene algo raro. Desde que la uso, los perros de mi calle no dejan de mirarme fijamente."`,
      author: "Andrea V.",
      location: "Guadalajara"
    },
    {
      text: `"El episodio de La Llorona es oro puro. No he podido dormir en tres días, y me encanta."`,
      author: "Carlos",
      location: "Monterrey"
    }
  ];

  return (
    <section className="py-24 bg-coal/10 backdrop-blur-md px-6 md:px-12 border-t border-b border-blood/5 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="font-serif text-4xl text-white mb-16 hover-glitch transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Relatos de nuestros seguidores
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              className="bg-coal/60 backdrop-blur-sm p-8 border border-gray-800 rounded-lg relative group hover:border-blood/50 transition-colors shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Typewriter texture overlay */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=600&auto=format&fit=crop')] opacity-[0.03] pointer-events-none mix-blend-overlay rounded-lg"></div>
              
              <div className="relative z-10">
                <p className="font-serif text-lg text-gray-300 italic mb-6 leading-relaxed group-hover:text-white transition-colors">
                  {t.text}
                </p>
                <div className="font-mono text-sm uppercase tracking-widest text-blood group-hover:text-red-500 transition-colors">
                  - {t.author} <span className="text-gray-600 group-hover:text-gray-400 block text-xs mt-1 transition-colors">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
