"use client";

import { motion } from "framer-motion";
import siteSettings from "../../../content/site-settings.json";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-900 mb-12">
            The Mind<br />Behind the Space
          </h1>
        </motion.div>
      </section>

      {/* 2. Main Visual */}
      <section className="px-6 md:px-12 lg:px-32 max-w-7xl mx-auto mb-32">
        <div className="w-full aspect-[21/9] bg-gray-100 overflow-hidden relative">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={siteSettings.aboutImages[0]} 
            alt="Architectural structure"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Deep Lore & Philosophy */}
      <section className="px-6 md:px-12 lg:px-32 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 sticky top-32">
              Our Legacy
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-light leading-snug text-gray-800 mb-12">
              {siteSettings.philosophy}
            </p>
            <div className="text-lg text-gray-500 font-light leading-relaxed space-y-8">
              <p>
                For thirty years, {siteSettings.architectName} has been at the forefront of spatial design for ultra-high-net-worth individuals across the globe. We don't just build homes; we curate environments that dictate the rhythm of the life lived within them.
              </p>
              <p>
                Every material is sourced meticulously. From the deepest forests for our wooden floorings to the finest European quarries for our luxury bathrooms. The result is an uncompromising dedication to craft, silence, and beauty.
              </p>
              <p>
                The studio operates on the belief that luxury is not abundance—it is the absence of the unnecessary. When every line serves a purpose, space transforms into an emotional experience. We reject the superficial entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Secondary Image */}
      <section className="w-full h-[60vh] bg-gray-100 mb-32">
         <img src={siteSettings.aboutImages[1]} className="w-full h-full object-cover" alt="Studio Detail" />
      </section>

      {/* 5. The Process Walkthrough */}
      <section className="px-6 md:px-12 lg:px-32 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 sticky top-32">
              Methodology
            </h2>
          </div>
          <div className="md:col-span-8">
             <div className="flex flex-col gap-16">
               {siteSettings.process.map((p, idx) => (
                 <div key={idx} className="border-b border-gray-200 pb-12">
                   <span className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 block">{p.step}</span>
                   <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">{p.title}</h3>
                   <p className="text-xl text-gray-500 font-light leading-relaxed">{p.description}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
