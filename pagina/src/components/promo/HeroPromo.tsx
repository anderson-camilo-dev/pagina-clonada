"use client";

import Link from "next/link";

export default function HeroPromo() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo.png')" }} // imagem de fundo
    >
      {/* Overlay escuro para contraste com o texto */}
      <div className="absolute inset-0 bg-red-900/70" />

      {/* Conteúdo central */}
      <div className="relative text-center px-4">
        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl font-extrabold uppercase">
          Dark Sale
        </h1>

        {/* Subtítulo / destaque */}
        <p className="mt-4 text-red-200 tracking-widest">
          ATÉ 40% OFF • TEMPO LIMITADO
        </p>

        {/* Botão de ação */}
        <Link href="/">
          <button className="mt-6 bg-red-700 hover:bg-red-800 px-8 py-3 rounded-full font-bold transition">
            Comprar Agora
          </button>
        </Link>
      </div>
    </section>
  );
}
