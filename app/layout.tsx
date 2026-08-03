import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";
import { ContactModalProvider } from "@/contexts/ContactModalContext";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: "variable",
  axes: ["wdth"],
  subsets: ["latin"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Roka — Full-Stack Developer",
  description:
    "Portfolio of Raj Roka — full-stack developer shipping products end to end with Next.js, TypeScript, Node.js, and MongoDB.",
  keywords: "Next.js, React, TypeScript, Full-stack, Portfolio, MongoDB",
  openGraph: {
    title: "Raj Roka — Full-Stack Developer",
    description:
      "Portfolio of Raj Roka — full-stack developer shipping products end to end with Next.js, TypeScript, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plex.variable} antialiased`}>
        <ContactModalProvider>
          <Navbar />
          {children}
        </ContactModalProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
