"use client";

import { useState } from "react";

const prizes = [
  "10% OFF",
  "20% OFF",
  "FRETE GRÁTIS",
  "NÃO FOI DESSA VEZ 😅",
  "30% OFF",
];

export default function PrizeWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function spinWheel() {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    // Simula o giro da roleta
    setTimeout(() => {
      const prize = prizes[Math.floor(Math.random() * prizes.length)];
      setResult(prize);
      setSpinning(false);
    }, 2500); // duração da animação
  }

  return (
    <section className="bg-[#120000] py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        🎡 Gire e Ganhe um Prêmio
      </h2>

      <div className="max-w-md mx-auto text-center">
        {/* Roleta */}
        <div
          className={`h-40 w-40 mx-auto rounded-full border-8 border-red-700 flex items-center justify-center text-xl font-bold transition-transform duration-[2500ms] ${
            spinning ? "rotate-[1080deg]" : ""
          }`}
        >
          🎁
        </div>

        {/* Botão para girar */}
        <button
          onClick={spinWheel}
          disabled={spinning}
          className="mt-6 bg-red-700 hover:bg-red-800 px-8 py-3 rounded-full font-bold disabled:opacity-50"
        >
          {spinning ? "Girando..." : "Girar Roleta"}
        </button>

        {/* Resultado do prêmio */}
        {result && (
          <p className="mt-6 text-2xl text-red-400 font-bold">
            Você ganhou: {result}
          </p>
        )}
      </div>
    </section>
  );
}
