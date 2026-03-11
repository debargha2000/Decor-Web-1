import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteSettings from "../../content/site-settings.json";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteSettings.architectName} | ${siteSettings.tagline}`,
  description: siteSettings.philosophy,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans text-gray-900 bg-white pt-24`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
