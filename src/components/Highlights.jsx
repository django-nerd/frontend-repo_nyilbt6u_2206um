import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Award, Handshake } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Standar Industri", desc: "Proses pembelajaran mengacu pada SOP hotel profesional." },
  { icon: GraduationCap, title: "Berbasis Praktik", desc: "80% praktik langsung: front office, housekeeping, dan F&B." },
  { icon: Award, title: "Instruktur Berpengalaman", desc: "Dibimbing oleh guru dan praktisi dengan sertifikasi." },
  { icon: Handshake, title: "Jejaring Industri", desc: "Kolaborasi dengan hotel mitra untuk PKL dan magang." },
];

function Highlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Keunggulan</h2>
          <p className="mt-2 text-slate-600">Nilai lebih dalam pendidikan perhotelan di SMKS Pasundan Subang.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, idx) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50"
            >
              <h.icon className="w-6 h-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{h.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
