import { motion } from "framer-motion";

function About() {
  return (
    <section id="profil" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Tentang Hotel
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Hotel SMKS Pasundan Subang merupakan fasilitas praktik perhotelan yang dirancang untuk mendukung pembelajaran dengan standar industri. Lingkungan yang profesional, peralatan lengkap, dan budaya kerja nyata menjadikan tempat ini sebagai laboratorium terbaik bagi siswa untuk mempelajari hospitality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs uppercase tracking-wider text-slate-500">Visi</p>
                <p className="mt-2 font-semibold text-slate-900">Menjadi pusat pembelajaran perhotelan yang unggul, modern, dan berkarakter.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs uppercase tracking-wider text-slate-500">Misi</p>
                <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
                  <li>Menghadirkan pengalaman belajar yang nyata.</li>
                  <li>Menumbuhkan etos kerja profesional.</li>
                  <li>Berjejaring dengan industri perhotelan.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs uppercase tracking-wider text-slate-500">Tujuan</p>
                <p className="mt-2 text-slate-700">Mempersiapkan lulusan kompeten yang siap kerja di dunia hospitality.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1974&auto=format&fit=crop"
                alt="Hotel practice area"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
