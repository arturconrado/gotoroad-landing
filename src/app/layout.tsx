import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoadTrip | A revolução no planejamento de viagens rodoviárias | MVP Pronto",
  description: "RoadTrip é uma plataforma inovadora que reinventa o planejamento de viagens de carro, conectando viajantes a rotas otimizadas, hospedagens e experiências únicas. MVP pronto para investimento.",
  keywords: "viagem, roadtrip, planejamento de viagem, investimento, startup de viagem, turismo",
  openGraph: {
    title: "RoadTrip | Revolucionando viagens rodoviárias | MVP pronto para investimento",
    description: "Plataforma inovadora que conecta viajantes a rotas otimizadas, hospedagens e experiências únicas.",
    images: [{
      url: "/og-image.jpg",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </div>
      </body>
    </html>
  );
}
