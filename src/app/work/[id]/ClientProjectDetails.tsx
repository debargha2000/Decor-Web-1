"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  client: string;
  location: string;
}

export default function ClientProjectDetails({ project }: { project: Project }) {
  return (
    <article className="pt-32 pb-24">
      <header className="px-6 md:px-12 lg:px-32 max-w-7xl mx-auto mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-light tracking-tighter text-gray-900 mb-8"
        >
          {project.title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-400"
        >
          <span>Category &mdash; {project.category}</span>
          <span>Location &mdash; {project.location}</span>
          <span>Year &mdash; {project.year}</span>
        </motion.div>
      </header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="w-full h-[60vh] md:h-[85vh] mb-24"
      >
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="px-6 md:px-12 lg:px-32 max-w-5xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 sticky top-32">
            The Concept
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl md:text-4xl font-light leading-snug text-gray-800">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-32 max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        {project.images.slice(1).map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`w-full ${idx % 2 === 0 ? 'md:w-3/4 ml-auto' : 'md:w-3/4 mr-auto'}`}
          >
            <img src={img} alt={`Detail ${idx + 2}`} className="w-full auto object-cover bg-gray-50" />
          </motion.div>
        ))}
      </div>
    </article>
  );
}
