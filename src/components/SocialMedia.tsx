"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaSpotify, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  const socials = [
    {
      name: "YouTube",
      desc: "Episodios completos y misterios visuales.",
      link: "https://www.youtube.com/@podcastelumbraldelodesconocido",
      colorClass: "text-[#FF0000]",
      hoverClass: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
      icon: <FaYoutube className="w-16 h-16 mb-4 drop-shadow-[0_0_12px_rgba(255,0,0,0.4)]" />
    },
    {
      name: "Spotify",
      desc: "Lleva el terror en tus oídos vayas donde vayas.",
      link: "https://open.spotify.com/show/2a8OhWmnHo29V8sZ7sdKVJ?si=21c5eb411a5c482a",
      colorClass: "text-[#1DB954]",
      hoverClass: "hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954]",
      icon: <FaSpotify className="w-16 h-16 mb-4 drop-shadow-[0_0_12px_rgba(29,185,84,0.4)]" />
    },
    {
      name: "Instagram",
      desc: "Detrás de cámaras y evidencia visual.",
      link: "#",
      colorClass: "text-[#E1306C]",
      hoverClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent",
      icon: <FaInstagram className="w-16 h-16 mb-4 drop-shadow-[0_0_12px_rgba(225,48,108,0.4)]" />
    },
    {
      name: "TikTok",
      desc: "Clips rápidos para no dormir esta noche.",
      link: "#",
      colorClass: "text-white",
      hoverClass: "hover:bg-white hover:text-black hover:border-white hover:shadow-[3px_3px_0_#00f2fe,-3px_-3px_0_#fe0979]",
      icon: <FaTiktok className="w-16 h-16 mb-4 drop-shadow-[2px_2px_0_#fe0979,-2px_-2px_0_#00f2fe]" />
    }
  ];

  return (
    <section id="redes" className="py-24 bg-transparent px-6 md:px-12 border-t border-gray-800/30 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-serif text-4xl text-center text-white mb-6 hover-glitch transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Únete a la Comunidad
        </motion.h2>
        <motion.p 
          className="font-sans text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ¿No tuviste suficiente miedo? Síguenos en todas nuestras redes oficiales para interactuar, ver evidencia y enterarte de los próximos episodios.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {socials.map((social, idx) => (
            <motion.a 
              href={social.link}
              key={idx}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-800 ${social.colorClass} bg-coal/40 backdrop-blur-md transition-all duration-500 ${social.hoverClass} group shadow-lg`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {social.icon}
              <h3 className="font-sans font-bold text-2xl mb-2">{social.name}</h3>
              <p className="text-sm text-center opacity-70 group-hover:opacity-100 transition-opacity">
                {social.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
