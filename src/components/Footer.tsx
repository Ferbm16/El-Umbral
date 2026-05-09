"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaYoutube, FaSpotify, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Agregado

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 bg-black/60 backdrop-blur-xl text-white border-t border-blood/20 relative z-20">
      <motion.div 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800/50 pb-12 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Marca */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/#hero" className="group block mb-6">
            <div className="flex flex-col items-start gap-4">
              <Image 
                src="/logo.jpg" 
                alt="El Umbral de lo Desconocido Logo" 
                width={80} 
                height={80} 
                className="rounded-lg shadow-2xl border border-blood/20 group-hover:opacity-80 transition-opacity"
              />
              <h3 className="font-serif text-xl font-bold hover-glitch group-hover:text-blood transition-colors">
                EL UMBRAL<br/><span className="text-blood">DE LO DESCONOCIDO</span>
              </h3>
            </div>
          </Link>
          <p className="text-gray-400 text-sm mb-6">El misterio se vuelve una experiencia que puedes escuchar y vestir. No mires atrás.</p>
          <div className="flex space-x-4 text-lg">
            <a href="https://www.youtube.com/@podcastelumbraldelodesconocido" target="_blank" rel="noopener noreferrer" className="bg-ash/50 p-3 rounded-full hover:bg-[#FF0000] hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"><FaYoutube /></a>
            <a href="https://open.spotify.com/show/2a8OhWmnHo29V8sZ7sdKVJ?si=21c5eb411a5c482a" target="_blank" rel="noopener noreferrer" className="bg-ash/50 p-3 rounded-full hover:bg-[#1DB954] hover:text-black transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"><FaSpotify /></a>
            <a href="#" className="bg-ash/50 p-3 rounded-full hover:bg-[#E1306C] hover:text-white transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"><FaInstagram /></a>
            <a href="#" className="bg-ash/50 p-3 rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"><FaTiktok /></a>
          </div>
        </div>

        {/* Enlaces */}
        <div className="col-span-1">
          <h4 className="font-sans font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Explora</h4>
          <ul className="space-y-3">
            <li><Link href="/#hero" className="text-gray-300 hover:text-blood transition-colors">Inicio</Link></li>
            <li><Link href="/#episodios" className="text-gray-300 hover:text-blood transition-colors">Episodios</Link></li>
            <li><Link href="/tienda" className="text-gray-300 hover:text-blood transition-colors">Tienda Especial</Link></li>
            <li><Link href="/#faq" className="text-gray-300 hover:text-blood transition-colors">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h4 className="font-sans font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Términos del Servicio</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Devoluciones</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="col-span-1">
          <h4 className="font-sans font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <Mail className="text-blood" size={18} />
              <span>Voces@ElUmbralPodcast.com</span>
            </li>
            <li className="flex items-center justify-start space-x-3 text-gray-300">
              <MapPin className="text-blood" size={18} />
              <span>En algún rincón oscuro de México.</span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} El Umbral de lo Desconocido. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0 font-serif italic text-gray-400">"El miedo es la emoción más antigua de la humanidad."</p>
      </motion.div>
    </footer>
  );
}
