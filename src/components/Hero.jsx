import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
            AI Slide Generator
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight">
            Buat Presentasi Animasi Profesional dalam Hitungan Detik
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            AI Slide Generator — Konten, Desain, dan Animasi Dibuat Otomatis. Hasilkan deck yang bergerak, interaktif, dan memukau dengan sekali klik.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#editor" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-violet-500 to-cyan-400 text-slate-900 font-semibold px-6 py-3 shadow-[0_8px_30px_rgb(79,70,229,0.55)]">
              Buat Presentasi Sekarang
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition px-6 py-3">
              Lihat Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >
          <div className="aspect-video w-full bg-black/40 grid place-items-center">
            <div className="text-center px-6 py-10">
              <p className="text-slate-300">Preview Video Demo</p>
              <p className="text-sm text-slate-400">Animasi halus, transisi futuristik, dan layout cerdas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
