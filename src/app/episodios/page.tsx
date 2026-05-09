import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EpisodiosPage() {
  return (
    <main className="flex min-h-screen flex-col items-stretch overflow-x-hidden bg-void">
      <Navbar />
      
      {/* Hero Section for Episodes */}
      <section className="pt-32 pb-16 px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            Relatos Desde el Abismo
          </h1>
          <p className="font-sans text-xl text-gray-400 max-w-2xl mx-auto">
            Explora la colección completa de nuestros episodios. Advertencia: No nos hacemos responsables de lo que escuches en la oscuridad.
          </p>
        </div>
      </section>

      {/* Spotify Full Show Embed */}
      <section className="pb-24 px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-coal/40 backdrop-blur-md rounded-2xl overflow-hidden border border-phantom-glow/20 p-2 md:p-6 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
            <iframe 
              style={{borderRadius: "12px"}} 
              src="https://open.spotify.com/embed/show/2a8OhWmnHo29V8sZ7sdKVJ?utm_source=generator&theme=0" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="shadow-2xl border border-gray-800"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
