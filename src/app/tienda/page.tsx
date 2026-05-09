import Navbar from "@/components/Navbar";
import Store from "@/components/Store";
import Footer from "@/components/Footer";

export default function TiendaPage() {
  return (
    <main className="flex min-h-screen flex-col items-stretch overflow-x-hidden bg-void">
      <Navbar />
      
      {/* Spacer for sticky navbar */}
      <div className="pt-24 md:pt-32">
        <Store hideButton={true} />
      </div>

      <Footer />
    </main>
  );
}