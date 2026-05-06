import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HomeLoginForm } from "@/app/HomeLoginForm";

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

          {/* Formulario (mock: redirige a /jobs) */}
          <HomeLoginForm />

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
