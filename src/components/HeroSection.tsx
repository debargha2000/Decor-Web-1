"use client";

import { motion } from "framer-motion";

interface HeroProps {
  architectName: string;
  tagline: string;
  heroImage?: string;
}

export default function HeroSection({ architectName, tagline, heroImage }: HeroProps) {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-32 overflow-hidden bg-white">
      {heroImage && (
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={heroImage} className="w-full h-full object-cover" alt="Hero Background" />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10"></div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="text-center relative z-20 mix-blend-multiply"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-light tracking-tighter text-gray-900">
          {architectName}
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 md:mt-12 text-lg md:text-2xl text-gray-800 font-medium tracking-[0.2em] text-center uppercase max-w-2xl relative z-20"
      >
        {tagline}
      </motion.p>
    </section>
  );
}
