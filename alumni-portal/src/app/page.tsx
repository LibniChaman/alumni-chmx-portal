import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {

  return (
    <main className="relative flex items-center justify-center min-h-screen">
      {/* Fondo con imagen difusa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ch.jpg"
          alt="Fondo difuso"
          fill
          className="object-cover blur-lg"
          priority
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">

        {/* Columna izquierda con imagen */}
        <div className="relative hidden md:block w-1/2">
          <Image
            src="/ch.jpg"
            alt="Personas trabajando"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Columna derecha con formulario */}
        <div className="w-full md:w-1/2 p-15 gap-3 flex flex-col justify-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
            CareerHub
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Find Your Next Opportunity
          </p>

          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 text-gray-400 rounded-lg text-sm placeholder:text-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-400 placeholder:text-gray-300 focus:ring-2  focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-10 py-1 rounded-2xl bg-blue-600 text-white justify-center hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </form>

          {/* Links crear cuenta */}
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
            <a href="/register" className="hover:underline">
              Create an account
            </a>
          </div>

          {/* Redes sociales */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-3">Or social networks</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <FaFacebookF className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <FaInstagram className="text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
