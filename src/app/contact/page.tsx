"use client";

import { motion } from "framer-motion";
import siteSettings from "../../../content/site-settings.json";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 min-h-[80vh]">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-light tracking-tighter text-gray-900 mb-8"
          >
            Begin the<br/>Dialogue.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-500 font-light max-w-md mb-16"
          >
            We take a limited number of commissions per year to ensure absolute devotion to your space.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8 text-gray-900 font-light"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 mb-2">Email</p>
              <a href={`mailto:${siteSettings.contact.email}`} className="text-2xl hover:opacity-50 transition-opacity">{siteSettings.contact.email}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 mb-2">Phone</p>
              <a href={`tel:${siteSettings.contact.phone}`} className="text-2xl hover:opacity-50 transition-opacity">{siteSettings.contact.phone}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 mb-2">Studio</p>
              <p className="text-2xl">{siteSettings.contact.location}</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center bg-[#fafafa] p-8 md:p-16"
        >
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 transition-colors text-lg font-light text-gray-900" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Your Email</label>
              <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 transition-colors text-lg font-light text-gray-900" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Project Details</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900 transition-colors text-lg font-light text-gray-900 resize-none" placeholder="Tell us about the space..."></textarea>
            </div>
            <button type="button" className="mt-4 bg-gray-900 text-white uppercase tracking-widest text-sm font-medium py-5 px-10 hover:bg-black transition-colors self-start w-full md:w-auto">
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </section>
      <Footer />
    </main>
  );
}
