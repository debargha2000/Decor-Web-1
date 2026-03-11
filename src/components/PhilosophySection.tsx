"use client";

import { motion } from "framer-motion";

interface PhilosophyProps {
  philosophy: string;
}

export default function PhilosophySection({ philosophy }: PhilosophyProps) {
  return (
    <section className="py-32 md:py-56 px-6 md:px-12 lg:px-32 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-gray-400 mb-12"
      >
        Our Philosophy
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight lg:leading-tight font-light text-center tracking-tight text-gray-800"
      >
        {philosophy}
      </motion.p>
    </section>
  );
}
