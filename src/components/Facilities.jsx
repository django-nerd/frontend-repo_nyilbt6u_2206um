import { Building2, LayoutGrid, Hotel, ShowerHead, Wifi, ParkingCircle, Users, UtensilsCrossed, Presentation } from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  { icon: Building2, title: "Lobby Hotel", desc: "Area resepsionis untuk simulasi front office." },
  { icon: Users, title: "Front Office", desc: "Counter pelayanan tamu dengan sistem standar." },
  { icon: Hotel, title: "Housekeeping Room", desc: "Ruang peralatan housekeeping dan praktik." },
  { icon: ShowerHead, title: "Ruang Laundry", desc: "Mesin cuci, dryer, dan area setrika industri." },
  { icon: UtensilsCrossed, title: "Dining Area", desc: "Ruang restoran untuk layanan F&B dasar." },
  { icon: ParkingCircle, title: "Area Parkir", desc: "Luas dan mudah diakses untuk tamu dan kegiatan." },
  { icon: Wifi, title: "Wi‑Fi", desc: "Akses internet untuk kebutuhan belajar dan presentasi." },
  { icon: Presentation, title: "Ruang Meeting", desc: "Ruang rapat untuk simulasi event dan MICE." },
];

function Facilities() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Fasilitas</h2>
          <p className="mt-2 text-slate-600">Fasilitas lengkap untuk menunjang proses pembelajaran perhotelan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg bg-slate-50/50"
            >
              <f.icon className="w-6 h-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
