import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimson = Crimson_Text({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-crimson" 
});

export const metadata: Metadata = {
  title: "El Umbral de lo Desconocido | Podcast & Leyendas",
  description: "Bienvenido a El Umbral de lo Desconocido. El misterio se vuelve una experiencia que puedes escuchar y vestir.",
  keywords: ["podcast de terror", "leyendas mexicanas podcast", "playeras de terror originales", "historias de miedo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.variable} ${crimson.variable} font-sans bg-transparent text-white min-h-screen flex flex-col relative`}>
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
