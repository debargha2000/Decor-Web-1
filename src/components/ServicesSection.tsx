"use client";

import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesProps) {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-gray-400 mb-20 md:mb-32 text-center"
        >
          Areas of Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <h3 className="text-3xl font-light mb-6 text-gray-900 group-hover:text-black transition-colors">{service.title}</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-light">{service.description}</p>
              <div className="h-px w-full bg-gray-200 mt-12 group-hover:bg-gray-400 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
