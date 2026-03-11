"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-gray-400 mb-20 md:mb-32 text-center"
        >
          Selected Works
        </motion.h2>
        
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-8 md:gap-12"
            >
              {/* Minimalist image placeholder */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#f5f5f7] flex items-center justify-center overflow-hidden drop-shadow-sm transition-all duration-700 hover:scale-[1.01]">
                <span className="text-gray-300 font-light tracking-widest uppercase text-xs md:text-sm">Gallery Entry ({project.title})</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest">{project.category} &mdash; {project.year}</p>
                </div>
                <div className="md:w-1/2 hidden md:block" />
                <div className="md:w-1/2">
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
