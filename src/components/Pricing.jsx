import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    badge: "Watermark",
    features: [
      "AI Slide Writer dasar",
      "Template gratis",
      "Export dengan watermark",
      "Penyimpanan 1 GB",
    ],
  },
  {
    name: "Pro",
    price: "129",
    highlight: true,
    badge: "Best Value",
    features: [
      "Export PPTX & MP4 tanpa watermark",
      "Template premium + animasi lanjutan",
      "Brand Kit & Font kustom",
      "Penyimpanan 50 GB",
      "Prioritas support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Harga yang Fleksibel</h2>
          <p className="mt-3 text-slate-300">Mulai gratis, upgrade kapan saja untuk fitur premium.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl border p-6 backdrop-blur-md ${
                p.highlight
                  ? "border-violet-400/30 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-cyan-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {p.badge && (
                <span className="inline-flex mb-3 text-[11px] font-semibold uppercase tracking-wide rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-5xl font-extrabold">{p.price}</span>
                <span className="mb-2 text-slate-300">/bulan</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-200">
                    <span className="mt-0.5 text-cyan-300"><Check size={16} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 font-semibold ${
                p.highlight
                  ? "bg-gradient-to-tr from-violet-500 to-cyan-400 text-slate-900"
                  : "bg-white/10 hover:bg-white/20 text-white transition"
              }`}>
                {p.highlight ? "Pilih Pro" : "Mulai Gratis"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
