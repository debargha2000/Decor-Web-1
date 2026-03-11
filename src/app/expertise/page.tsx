"use client";

import { motion } from "framer-motion";
import servicesData from "../../../content/services.json";
import Footer from "@/components/Footer";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-900 mb-8 max-w-4xl">
            Disciplines of Detail
          </h1>
          <p className="text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            We operate across four major pillars of interior architecture, ensuring complete mastery over the atmosphere.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 md:gap-48">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-32 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Massive Image Block */}
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-[#fafafa]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                />
              </div>
              
              {/* Details Block */}
              <div className="w-full md:w-1/2">
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 mb-6 block">0{index + 1} &mdash; Core Discipline</span>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-8">{service.title}</h2>
                <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
                  {service.description}
                </p>
                
                {/* Material Focus (Simulated Data expansion) */}
                <div className="bg-[#fafafa] p-8 md:p-10 border border-gray-100">
                   <h3 className="text-sm font-medium uppercase tracking-widest text-gray-900 mb-4">Material Philosophy</h3>
                   <p className="text-gray-500 font-light text-sm leading-relaxed">
                     Our approach insists on non-synthetic elements. Rare stones, sustainable timber, and forged metals are manipulated to feel organic rather than assembled. Precision is our only absolute.
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-gray-900 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-8">Discuss a Commission</h2>
        <a href="/contact" className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest font-medium text-white hover:text-gray-400 hover:border-gray-400 transition-colors">
          Contact the Studio
        </a>
      </section>

      <Footer />
    </main>
  );
}
