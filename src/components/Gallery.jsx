import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1551776235-460c238f8518?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501117716987-c8e3b2f1f3d7?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1974&auto=format&fit=crop",
];

function Gallery() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Galeri Foto</h2>
          <p className="mt-2 text-slate-600">Suasana hotel, kamar, dan fasilitas pembelajaran.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img src={src} alt="Galeri hotel" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
