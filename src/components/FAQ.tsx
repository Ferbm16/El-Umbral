"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "¿Cuándo publican nuevos episodios?",
    answer: "Publicamos nuevos episodios todos los martes y viernes a la medianoche. Lo justo para arruinarte el sueño."
  },
  {
    question: "¿Las historias son reales?",
    answer: "Nuestra sección 'Relatos Reales' está basada 100% en testimonios de nuestros seguidores. Las 'Leyendas Mexicanas' son producto de exhaustiva investigación en folclore tradicional."
  },
  {
    question: "¿Hacen envíos internacionales de la tienda?",
    answer: "Actualmente hacemos envíos protegidos a todo México, Estados Unidos y Colombia."
  },
  {
    question: "¿Cómo puedo enviar mi historia?",
    answer: "Mándanos un correo o audios por nuestras redes. Si nos causa escalofríos, lo publicaremos."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section id="faq" className="py-24 bg-transparent px-6 md:px-12 border-t border-gray-800/30 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="font-serif text-4xl text-center text-white mb-16 hover-glitch transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="bg-coal/60 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden transition-colors hover:border-gray-600 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-serif text-xl text-white">{item.question}</span>
                <ChevronDown 
                  className={`text-blood transition-transform duration-300 ${openIdx === idx ? "rotate-180" : "rotate-0"}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-void/30"
                  >
                    <div className="p-6 pt-0 text-gray-300 font-sans leading-relaxed border-t border-gray-900/50 mt-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
