import Image from "next/image";

export default function AddUserPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-start">
      {/* latar  */}
      <Image
        src="/new.jpg"
        alt="Pink Background"
        fill
        className="object-cover object-right -z-10"
      />

      <div className="min-h-screen flex flex-col items-center justify-center px-40 py-10">
        {/* Welcome */}
        <h1 className="text-5xl font-serif font-bold text-gray-800 mb-8 text-center">
          Welcome New User
        </h1>

        {/* Form */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-lg w-full max-w-md backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-rose-700 mb-2 text-center">
            Add user
          </h2>
          <p className="text-rose-500 mb-6 text-center">
            Isi data pengguna baru di bawah ini
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-rose-700 mb-1 font-medium">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full p-2 border border-rose-300 rounded-md focus:ring-2 focus:ring-rose-400 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block text-rose-700 mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full p-2 border border-rose-300 rounded-md focus:ring-2 focus:ring-rose-400 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block text-rose-700 mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full p-2 border border-rose-300 rounded-md focus:ring-2 focus:ring-rose-400 focus:outline-none text-black"
              />
            </div>

            <div>
              <label className="block text-rose-700 mb-1 font-medium">
                Role
              </label>
              <select className="w-full p-2 border border-rose-300 rounded-md focus:ring-2 focus:ring-rose-400 focus:outline-none text-black">
                <option value="">Pilih Role</option>
                <option value="siswa">Siswa</option>
                <option value="karyawan">Karyawan</option>
              </select>
            </div>

            <button
              type="button"
              className="w-full bg-rose-500 text-white py-2 rounded-md font-semibold hover:bg-rose-600 transition-all"
            >
              <a href="presensi" className="hover:text-red-900 transition">
                Add user
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
