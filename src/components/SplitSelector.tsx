"use client";

import { Headphones, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SplitSelector() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-screen bg-void">
      {/* Lado A (El Espectador) - Azul Misterioso */}
      <div className="flex-1 bg-gradient-to-br from-void to-phantom-blue/40 p-10 md:p-20 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-phantom-glow/20 group hover:from-phantom-blue/30 hover:to-phantom-blue/80 transition-all duration-700 relative overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phantom-glow/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <motion.div className="relative z-10" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Headphones className="w-20 h-20 text-blue-400 mb-6 mx-auto group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all duration-500" />
          <h2 className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-md">El Espectador</h2>
          
          <div className="mb-10 font-sans text-gray-400 space-y-4 max-w-md">
            <p><strong>El Vacío:</strong> ¿Cansado de la rutina y de historias aburridas que no te provocan absolutamente nada?</p>
            <p className="text-gray-200"><strong>La Puerta:</strong> Sumérgete en la narrativa. Relatos reales que enfriarán tu sangre y leyendas que susurran en la noche.</p>
          </div>

          <Link href="/episodios">
            <button className="bg-transparent border-2 border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center mx-auto gap-3">
              <Headphones size={20} />
              Entrar a la Oscuridad
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Lado B (El Coleccionista) - Rojo Carmesí */}
      <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1509316785289-025f8b964344?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center p-10 md:p-20 flex flex-col justify-center items-center text-center relative group">
        <div className="absolute inset-0 bg-void/90 group-hover:bg-blood/90 mix-blend-multiply transition-colors duration-1000"></div>
        
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crimson-glow/30 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <motion.div className="relative z-10" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <ShoppingBag className="w-20 h-20 text-red-500 mb-6 mx-auto group-hover:scale-110 group-hover:text-red-400 group-hover:drop-shadow-[0_0_20px_rgba(255,15,15,0.8)] transition-all duration-500" />
          <h2 className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-md">El Coleccionista</h2>
          
          <div className="mb-10 font-sans text-gray-400 space-y-4 max-w-md">
            <p><strong>La Maldición:</strong> ¿Tu identidad se pierde entre las sombras de ropa genérica, sin vida y aburrida?</p>
            <p className="text-gray-200"><strong>El Antídoto:</strong> Reclama <i>La Piel del Umbral</i>. Ropa maldita pero exclusiva que infunde respeto y temor.</p>
          </div>

          <Link href="/tienda">
            <button className="bg-transparent border-2 border-blood text-red-400 hover:bg-blood hover:text-white hover:border-blood hover:shadow-[0_0_25px_rgba(255,15,15,0.8)] font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center mx-auto gap-3">
              <ShoppingBag size={20} />
              Reclamar mi Piel
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
