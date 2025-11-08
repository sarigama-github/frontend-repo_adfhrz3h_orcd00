import { Sparkles, Wand2, PlaySquare, Brush, Cloud, Download } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wand2,
    title: "AI Slide Writer",
    desc: "Tulis judul & poin, AI menyusun narasi slide lengkap otomatis.",
  },
  {
    icon: Brush,
    title: "Animated Templates",
    desc: "Perpustakaan tema modern, clean, dan animatif untuk berbagai kebutuhan.",
  },
  {
    icon: Sparkles,
    title: "Smart Design",
    desc: "Auto layout & komposisi visual cerdas agar terlihat profesional.",
  },
  {
    icon: Cloud,
    title: "Cloud Workspace",
    desc: "Simpan, kolaborasi, dan lanjutkan project kapan saja.",
  },
  {
    icon: Download,
    title: "Exporter PPTX & MP4",
    desc: "Unduh slide dalam PPTX dan video MP4 kualitas HD.",
  },
  {
    icon: PlaySquare,
    title: "Real-time Editor",
    desc: "Edit teks, ikon, gambar, dan animasi secara langsung.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(34,211,238,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Fitur Unggulan</h2>
          <p className="mt-3 text-slate-300">Semua yang Anda butuhkan untuk membuat presentasi animasi yang menakjubkan.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-violet-500 to-cyan-400 text-slate-900 grid place-items-center shadow-lg">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
