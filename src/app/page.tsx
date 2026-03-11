import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import siteSettings from "../../content/site-settings.json";
import projectsData from "../../content/projects.json";
import servicesData from "../../content/services.json";

export default function Home() {
  const featuredProject = projectsData[0];
  const secondaryProject = projectsData[1];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Cinematic Hero */}
      <HeroSection 
        architectName={siteSettings.architectName} 
        tagline={siteSettings.tagline} 
        heroImage={siteSettings.heroImage}
      />
      
      {/* 2. Philosophy Teaser (Deep Text) */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400 sticky top-32">
              The Architecture of Silence
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-3xl md:text-5xl font-light leading-snug lg:leading-tight text-gray-900 mb-12">
              {siteSettings.philosophy}
            </p>
            <Link href="/about" className="inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest font-medium hover:text-gray-500 hover:border-gray-500 transition-colors">
              The Mind Behind The Space
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Immersive Image Break */}
      <section className="w-full h-[60vh] md:h-screen bg-gray-100 overflow-hidden relative">
         <img src={siteSettings.aboutImages[0]} alt="Architectural Detail" className="w-full h-full object-cover" />
      </section>

      {/* 4. The Stats Bar */}
      <section className="py-24 px-6 md:px-12 lg:px-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {siteSettings.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-light text-gray-900">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Archives (Extended) */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400">Selected Works</h2>
            <Link href="/work" className="hidden md:inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest font-medium hover:text-gray-500 hover:border-gray-500 transition-colors">
              View All Archives
            </Link>
          </div>
          
          <div className="flex flex-col gap-32">
            {/* Primary Feature */}
            <Link href={`/work/${featuredProject.id}`} className="group block">
              <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-gray-200 overflow-hidden relative mb-12">
                <img src={featuredProject.images[0]} alt={featuredProject.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              </div>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <h3 className="text-4xl md:text-6xl font-light text-gray-900 group-hover:opacity-70 transition-opacity">{featuredProject.title}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{featuredProject.category} &mdash; {featuredProject.location}</p>
              </div>
            </Link>

            {/* Secondary Feature - Asymmetrical */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <h3 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">{secondaryProject.title}</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">{secondaryProject.description}</p>
                <Link href={`/work/${secondaryProject.id}`} className="inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest font-medium hover:text-gray-500 hover:border-gray-500 transition-colors">
                  Explore Project
                </Link>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <Link href={`/work/${secondaryProject.id}`}>
                  <div className="w-full aspect-square md:aspect-[4/5] overflow-hidden group">
                    <img src={secondaryProject.images[0]} alt={secondaryProject.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
             <Link href="/work" className="md:hidden inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest font-medium">
              View All Archives
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Modular Services Preview Grid */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
             <h2 className="text-4xl md:text-7xl font-light text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
               Disciplines of Detail
             </h2>
             <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">From the sprawling layout down to the texture of the timber.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {servicesData.slice(0, 4).map((service) => (
               <Link href="/expertise" key={service.id} className="group relative w-full aspect-square overflow-hidden bg-gray-900 block">
                 <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105 group-hover:opacity-40" alt={service.title} />
                 <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                   <h3 className="text-2xl md:text-3xl font-light text-white mb-2">{service.title}</h3>
                   <span className="text-white/70 text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 block">Discover</span>
                 </div>
               </Link>
             ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/expertise" className="inline-block bg-gray-900 text-white uppercase tracking-widest text-sm font-medium py-5 px-10 hover:bg-black transition-colors rounded-none">
              Explore All Disciplines
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
