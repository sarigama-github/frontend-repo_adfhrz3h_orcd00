import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} SlideNova. All rights reserved.</p>
        <div className="text-sm flex items-center gap-4">
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
          <a href="#privacy" className="hover:text-white transition">Privasi</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
