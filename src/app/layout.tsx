import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Created with Next.js 15 + Tailwind 4",
  openGraph: {
    title: "Personal Portfolio - Hashmi",
    description: "My personal portfolio showcasing my projects and skills. Created with Next.js 15 + Tailwind 4.",
    url: "https://your-portfolio-url.com", // TODO: Replace with actual URL
    siteName: "Personal Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // TODO: Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Personal Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Portfolio - Hashmi",
    description: "My personal portfolio showcasing my projects and skills. Created with Next.js 15 + Tailwind 4.",
    creator: "@your_twitter_handle", // TODO: Replace with actual Twitter handle
    images: ["https://your-portfolio-url.com/twitter-image.jpg"], // TODO: Replace with actual Twitter image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-100`}
      >
      
          <Navbar />
          <main className="min-h-screen pt-24 bg-slate-900">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}