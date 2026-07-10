import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";
import { ContactModalProvider } from "@/contexts/ContactModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Roka | Portfolio",
  description: "Full-stack developer specializing in Next.js, React, and TypeScript",
  keywords: "Next.js, React, TypeScript, Full-stack, Portfolio",
  openGraph: {
    title: "Raj Roka | Portfolio",
    description: "Full-stack developer specializing in Next.js, React, and TypeScript",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ContactModalProvider>
          <Navbar />
          {children}
        </ContactModalProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
