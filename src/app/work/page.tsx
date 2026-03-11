"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import projectsData from "../../../content/projects.json";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-900 mb-8 max-w-4xl">
            Selected Archives
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
            Our most definitive spatial interventions across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
          {projectsData.map((project, index) => (
            <Link href={`/work/${project.id}`} key={project.id} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index % 2 === 0 ? 0 : 0.2, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-gray-50 relative">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">{project.title}</h2>
                  <div className="flex justify-between items-center text-sm font-medium text-gray-400 uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
