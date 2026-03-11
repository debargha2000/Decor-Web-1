import Link from "next/link";
import siteSettings from "../../content/site-settings.json";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 flex items-center justify-between px-6 md:px-12 lg:px-32 py-6">
      <Link href="/" className="text-xl font-medium tracking-tight text-gray-900 hover:opacity-70 transition-opacity">
        {siteSettings.architectName}
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-gray-500">
        <Link href="/about" className="hover:text-black transition-colors">About</Link>
        <Link href="/expertise" className="hover:text-black transition-colors">Expertise</Link>
        <Link href="/work" className="hover:text-black transition-colors">Work</Link>
        <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
      </div>
      <button className="md:hidden text-gray-900 uppercase tracking-widest text-xs font-medium">Menu</button>
    </nav>
  );
}
