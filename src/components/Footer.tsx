import siteSettings from "../../content/site-settings.json";

export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12 lg:px-32 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-4">{siteSettings.siteName}</h2>
          <p className="text-gray-500 font-light leading-relaxed max-w-sm">Every space holds a story. Reach out to begin drafting yours.</p>
          <p className="text-gray-400 text-sm mt-4 font-light">{siteSettings.contact.location}</p>
        </div>
        
        <div className="flex flex-col md:items-end gap-3 text-gray-500 font-light">
          <a href={`mailto:${siteSettings.contact.email}`} className="hover:text-black transition-colors">
            {siteSettings.contact.email}
          </a>
          <a href={`tel:${siteSettings.contact.phone}`} className="hover:text-black transition-colors">
            {siteSettings.contact.phone}
          </a>
          <a href={siteSettings.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-black transition-colors mt-2">
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 text-center md:text-left text-xs text-gray-400 font-light flex flex-col md:flex-row justify-between">
        <span>&copy; {new Date().getFullYear()} {siteSettings.architectName}. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Built Minimal. Extensively Modular.</span>
      </div>
    </footer>
  );
}
