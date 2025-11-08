import { Rocket, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
            <Rocket size={18} />
          </span>
          <span className="text-white font-semibold tracking-wide text-lg">
            SlideNova
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#features" className="hover:text-white transition">Fitur</a>
          <a href="#templates" className="hover:text-white transition">Template</a>
          <a href="#pricing" className="hover:text-white transition">Harga</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex text-slate-200 hover:text-white transition px-3 py-1.5 rounded-md">
            Lihat Demo
          </button>
          <button className="inline-flex items-center gap-2 bg-gradient-to-tr from-violet-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow-[0_8px_30px_rgb(99,102,241,0.45)]">
            Buat Presentasi
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition" aria-label="Masuk">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
