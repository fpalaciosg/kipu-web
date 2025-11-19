"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-zinc-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO / NOMBRE */}
          <div className="shrink-0 font-bold text-xl tracking-wider text-green-400">
            <Link href="/">RUTEK</Link>
          </div>

          {/* MENÚ ESCRITORIO (Hidden en móvil) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/explorar" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Explorar
              </Link>
              <Link href="/ranking" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Ranking
              </Link>
              <Link href="/login" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Iniciar Sesión
              </Link>
            </div>
          </div>

          {/* BOTÓN MENÚ MÓVIL (Hamburguesa) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/explorar" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Explorar
            </Link>
            <Link href="/ranking" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Ranking
            </Link>
            <Link href="/login" className="bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}