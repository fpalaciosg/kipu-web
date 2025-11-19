import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* HERO SECTION: Estilo "Brutalista/Salvaje" */}
      <section className="relative w-full py-32 px-4 overflow-hidden border-b border-zinc-800">
        
        {/* Efecto de fondo sutil (Gradiente radial oscuro) */}
        {/* Nota: En Tailwind v4 los valores arbitrarios como este a veces generan advertencias si la sintaxis es compleja, pero es funcional */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-40 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
            RU<span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">TEK</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light">
            La bitácora digital para quienes buscan lo salvaje. Registra, explora y domina la ruta.
          </p>

          {/* BUSCADOR MINIMALISTA */}
          <div className="max-w-lg mx-auto relative group">
            {/* CORRECCIÓN AQUÍ: bg-gradient-to-r cambiado por bg-linear-to-r */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-green-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative flex bg-black rounded-lg border border-zinc-800">
              <input 
                type="text" 
                placeholder="Busca un cerro, parque o sendero..." 
                className="w-full bg-transparent text-white px-6 py-4 focus:outline-none placeholder-zinc-600"
              />
              <button className="bg-white text-black font-bold uppercase tracking-wide px-8 py-2 m-1 rounded hover:bg-gray-200 transition-colors">
                Ir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS RÁPIDAS (Grid Minimalista) */}
      <section className="py-10 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Senderismo', 'Alta Montaña', 'Parques', 'Escalada'].map((cat) => (
              <div key={cat} className="cursor-pointer border border-zinc-800 p-4 rounded hover:border-green-500/50 hover:text-white transition-all duration-300">
                <span className="uppercase text-sm tracking-widest font-bold">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTADO DE RUTAS (Estilo Tarjeta Oscura) */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Rutas <span className="text-blue-500">Populares</span></h2>
            <Link href="/explorar" className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all pb-1">Ver Todo</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* TARJETA 1: MEDIA (AZUL) */}
          <article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
            <div className="h-64 w-full bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                <span className="absolute top-4 left-4 bg-blue-900/80 text-blue-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border border-blue-500/30 backdrop-blur-sm">
                  Media
                </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Cerro San Cristóbal</h3>
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono mt-4">
                <span className="flex items-center gap-1">📍 Santiago</span>
                <span className="flex items-center gap-1">⏱ 1h 30m</span>
              </div>
              <button className="w-full mt-6 py-3 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Ver Ficha
              </button>
            </div>
          </article>

           {/* TARJETA 2: FÁCIL (VERDE) */}
           <article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-colors duration-300">
            <div className="h-64 w-full bg-zinc-800 relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-green-900/80 text-green-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border border-green-500/30 backdrop-blur-sm">
                  Fácil
                </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Salto del Laja</h3>
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono mt-4">
                <span className="flex items-center gap-1">📍 Biobío</span>
                <span className="flex items-center gap-1">⏱ 45m</span>
              </div>
              <button className="w-full mt-6 py-3 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Ver Ficha
              </button>
            </div>
          </article>

          {/* TARJETA 3: DIFÍCIL (ROJO) */}
          <article className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-colors duration-300">
            <div className="h-64 w-full bg-zinc-800 relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-red-900/80 text-red-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border border-red-500/30 backdrop-blur-sm">
                  Extrema
                </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">Volcán Villarrica</h3>
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-mono mt-4">
                <span className="flex items-center gap-1">📍 Araucanía</span>
                <span className="flex items-center gap-1">⏱ 6h 00m</span>
              </div>
              <button className="w-full mt-6 py-3 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Ver Ficha
              </button>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}