import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SplitSelector from "@/components/SplitSelector";
import PodcastFeed from "@/components/PodcastFeed";
import Store from "@/components/Store";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch overflow-x-hidden">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      <About />
      
      <SplitSelector />
      
      <div id="episodios">
        <PodcastFeed />
      </div>
      
      <div id="tienda">
        <Store />
      </div>
      
      <Testimonials />
      
      <div id="faq">
        <FAQ />
      </div>

      <SocialMedia />
      
      <Footer />
    </main>
  );
}
