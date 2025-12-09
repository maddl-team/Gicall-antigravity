import { Inter } from "next/font/google"; // Using Inter as per legacy design
import "./globals.css";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import StructuredData from "../components/StructuredData";
import { buildMetadata } from "@/lib/metadata";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = buildMetadata({
  title: "Gicall - Infissi e Serramenti di Qualità",
  description: "Produzione e installazione di serramenti in PVC, Alluminio e Legno. Made in Italy. Showroom a Roma e Orvieto.",
  keywords: "Infissi, Serramenti, Finestre PVC, Finestre Alluminio, Roma, Orvieto",
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.variable} data-scroll-behavior="smooth">
      <body className="antialiased font-sans">
        <SmoothScroll />
        <StructuredData />
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
