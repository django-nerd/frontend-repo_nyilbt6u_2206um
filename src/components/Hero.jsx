import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Hotel SMKS Pasundan Subang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl"
          >
            Fasilitas Pembelajaran Perhotelan dengan Standar Industri
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="#profil"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm md:text-base font-semibold shadow-lg shadow-blue-600/20 transition-colors"
            >
              Lihat Profil Hotel
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
