"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaYoutube, FaSpotify, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // IMPORTANT: Now using next/link

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#hero" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Episodios", href: "/#episodios" },
    { name: "Colección", href: "/tienda" }, // This points directly to the subpage
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-coal/70 backdrop-blur-md border-b border-gray-800 py-4 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/#hero" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
          <Image 
            src="/logo.jpg" 
            alt="El Umbral de lo Desconocido Logo" 
            width={50} 
            height={50} 
            className="rounded-full shadow-lg border border-blood/20"
            priority
          />
          <span className="font-serif text-xl font-bold text-white tracking-widest group-hover:text-blood transition-colors drop-shadow-md hidden sm:block">
            EL UMBRAL <span className="text-blood">DE LO DESCONOCIDO</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-sans text-gray-300 hover:text-blood transition-colors uppercase tracking-widest font-bold">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-xl drop-shadow-md">
          <a href="https://www.youtube.com/@podcastelumbraldelodesconocido" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all"><FaYoutube /></a>
          <a href="https://open.spotify.com/show/2a8OhWmnHo29V8sZ7sdKVJ?si=21c5eb411a5c482a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] hover:drop-shadow-[0_0_8px_rgba(29,185,84,0.8)] transition-all"><FaSpotify /></a>
          <a href="#" className="text-gray-400 hover:text-[#E1306C] hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)] transition-all"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"><FaTiktok /></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coal/90 backdrop-blur-md border-b border-gray-800 shadow-xl flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-sans text-white hover:text-blood transition-colors uppercase tracking-widest font-bold"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-gray-800 w-full justify-center text-2xl">
            <a href="https://www.youtube.com/@podcastelumbraldelodesconocido" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors"><FaYoutube /></a>
            <a href="https://open.spotify.com/show/2a8OhWmnHo29V8sZ7sdKVJ?si=21c5eb411a5c482a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors"><FaSpotify /></a>
            <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTiktok /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
