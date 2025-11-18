function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold">SMKS Pasundan Subang</h4>
          <p className="mt-2 text-slate-400">Hotel praktik untuk pembelajaran perhotelan.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Alamat</h4>
          <p className="mt-2 text-slate-400">Jl. (isi alamat lengkap sekolah), Subang, Jawa Barat</p>
          <p className="text-slate-400">Telepon: (0260) 123456</p>
          <p className="text-slate-400">Email: info@smkspasundansubang.sch.id</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Sosial Media</h4>
          <div className="mt-2 flex gap-4 text-slate-300">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SMKS Pasundan Subang. All rights reserved.</p>
          <p>Didesain dengan cinta untuk pendidikan.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
