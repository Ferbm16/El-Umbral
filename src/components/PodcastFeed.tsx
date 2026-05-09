"use client";

import { motion } from "framer-motion";
import { Youtube, Podcast } from "lucide-react";

export default function PodcastFeed() {
  return (
    <section id="episodios" className="py-24 bg-transparent px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-serif text-4xl text-center text-white mb-4 hover-glitch transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Mejores Episodios
        </motion.h2>
        <motion.p 
          className="font-sans text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Escucha y mira lo más aterrador directamente desde aquí. 
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* YouTube Embed */}
          <motion.div 
            className="bg-coal/40 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 p-6 flex flex-col group hover:border-red-900/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)] transition-all duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Youtube className="w-8 h-8 text-red-600" />
              <h3 className="font-serif text-2xl text-white font-bold group-hover:text-red-500 transition-colors">Lo Mejor en YouTube</h3>
            </div>
            
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-lg border border-gray-800 group-hover:border-red-500/30 transition-colors">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/videoseries?list=UU5EgvxrY_p7S7QJTbPaQiXA" 
                title="YouTube Episodio" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <a href="https://www.youtube.com/@podcastelumbraldelodesconocido" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full transition-colors">
                Ir a nuestro Canal
              </a>
            </div>
          </motion.div>

          {/* Spotify Embeds */}
          <motion.div 
            className="bg-coal/40 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 p-6 flex flex-col group hover:border-green-900/50 hover:shadow-[0_0_30px_rgba(29,185,84,0.2)] transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Podcast className="w-8 h-8 text-green-500" />
              <h3 className="font-serif text-2xl text-white font-bold group-hover:text-green-500 transition-colors">Escúchanos en Spotify</h3>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
               <iframe 
                  style={{borderRadius: "12px"}} 
                  src="https://open.spotify.com/embed/show/2a8OhWmnHo29V8sZ7sdKVJ?utm_source=generator&theme=0" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="shadow-lg border border-gray-800/50 group-hover:border-green-500/30 transition-colors"
                ></iframe>
                
               <iframe 
                  style={{borderRadius: "12px"}} 
                  src="https://open.spotify.com/embed/show/2a8OhWmnHo29V8sZ7sdKVJ?utm_source=generator&theme=0" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="shadow-lg border border-gray-800/50 group-hover:border-green-500/30 transition-colors"
                ></iframe>
            </div>

            <div className="mt-6 text-center">
              <a href="https://open.spotify.com/show/2a8OhWmnHo29V8sZ7sdKVJ?si=21c5eb411a5c482a" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-full transition-colors">
                Seguir en Spotify
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
