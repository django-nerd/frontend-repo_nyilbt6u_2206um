import { BedDouble, DoorClosed } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  {
    type: "Standard",
    total: 12,
    desc: "Kamar nyaman untuk praktik housekeeping dan tata kamar.",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "Deluxe",
    total: 8,
    desc: "Lebih luas dengan perlengkapan industri untuk simulasi layanan.",
    image:
      "https://images.unsplash.com/photo-1551776235-460c238f8518?q=80&w=2069&auto=format&fit=crop",
  },
  {
    type: "Suite",
    total: 4,
    desc: "Area terpisah untuk simulasi front office & room service.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
];

function Rooms() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Jumlah Kamar</h2>
            <p className="mt-2 text-slate-600">Visualisasi tipe kamar dan total unit untuk kegiatan pembelajaran.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-600">
            <BedDouble className="w-5 h-5" />
            <DoorClosed className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={room.image} alt={room.type} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{room.type}</h3>
                  <span className="text-blue-600 font-bold">{room.total} Kamar</span>
                </div>
                <p className="mt-2 text-slate-600">{room.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
