import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // Importamos el menú desde src/components

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rutek - Bitácora de Aventuras",
  description: "Explora senderos y registra tus visitas en Chile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}