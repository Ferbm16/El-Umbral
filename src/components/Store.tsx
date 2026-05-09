"use client";

import { motion } from "framer-motion";
import { Tag, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link"; // Agregado

export default function Store({ hideButton = false }: { hideButton?: boolean }) {
  const products = [
    { title: "Playera El Nahual", price: "$25.00", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400&h=500" },
    { title: "Sudadera Voces Ocultas", price: "$45.00", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400&h=500" },
    { title: "Playera La Llorona", price: "$25.00", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400&h=500" },
  ];

  return (
    <section className="py-24 bg-transparent px-6 md:px-12 relative z-10 border-t border-b border-blood/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="bg-blood/10 backdrop-blur-md border border-blood rounded-lg p-6 mb-16 flex flex-col md:flex-row items-center justify-between shadow-[0_0_20px_rgba(127,29,29,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Tag className="w-8 h-8 text-blood animate-pulse" />
            <div>
              <h3 className="text-white font-bold text-xl">Oferta Especial</h3>
              <p className="text-gray-400 text-sm">Vístete con el misterio antes de que se agote.</p>
            </div>
          </div>
          <p className="text-lg text-white font-sans text-center md:text-left">
            Usa el código <span className="font-mono bg-blood text-white px-3 py-1 rounded font-bold shadow-lg shadow-blood/50 ml-1">UMBRAL10</span> y recibe 10% de descuento
          </p>
        </motion.div>

        <motion.h2 
          className="font-serif text-4xl text-center text-white mb-16 hover-glitch transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          La Piel del Umbral
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              className="bg-coal/40 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 p-5 group hover:border-blood transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] relative flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-ash/20">
                <img src={product.img} alt={product.title} className="object-cover w-full h-full mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-3 right-3 bg-black/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-gray-700 shadow-md">
                  Exclusivo
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-white font-bold mb-1 group-hover:text-blood transition-colors">{product.title}</h3>
                <p className="text-gray-400 text-lg mb-6 font-mono">{product.price}</p>
                
                <button className="mt-auto w-full bg-ash/80 group-hover:bg-blood text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
                  Lo Quiero
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!hideButton && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/tienda">
              <motion.button 
                className="inline-flex items-center gap-3 bg-transparent border-2 border-blood text-white font-bold py-4 px-10 rounded-full hover:bg-blood transition-all group shadow-[0_0_15px_rgba(127,29,29,0.2)] hover:shadow-[0_0_30px_rgba(127,29,29,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver la Colección Completa
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
