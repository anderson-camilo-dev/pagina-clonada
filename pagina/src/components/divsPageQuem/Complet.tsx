"use client";

import { useState } from "react";
import Pragmatico from "./Progmat";
import Empreend from "./Emprend";
import Inov from "./Inov";
import Colab from "./Colab";
import Compatibile from "./Compartible";

export default function Completo() {
  const [ativo, setAtivo] = useState("pragmatico");

  function renderConteudo() {
    switch (ativo) {
      case "pragmatico":
        return <Pragmatico />;
      case "empreendedor":
        return <Empreend />;
      case "inovador":
        return <Inov />;
      case "colaborativo":
        return <Colab />;
      case "compartilhamento":
        return <Compatibile />;
      default:
        return null;
    }
  }

  return (
    <div className="grid grid-cols-1  md:grid-cols-12 gap-6 md:gap-10 p-4 md:p-10 mb-10">
      {/* COLUNA ESQUERDA */}
      <div className="col-span-1 md:col-span-4 space-y-4">
        {[
          ["Pragmático", "pragmatico"],
          ["Empreendedor", "empreendedor"],
          ["Inovador", "inovador"],
          ["Colaborativo", "colaborativo"],
          ["Compartilhamento", "compartilhamento"],
        ].map(([label, value]) => (
          <button
            key={value}
            onClick={() => setAtivo(value)}
            className={`w-full py-4 md:py-5 rounded-full font-semibold transition-all duration-300 focus:outline-none
              ${
                ativo === value
                  ? "bg-red-700 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-red-600 hover:text-white"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* COLUNA DIREITA */}
      <div className="col-span-1 md:col-span-8 flex items-start justify-center h-120 text-start transition-all duration-300">
        {renderConteudo()}
      </div>
    </div>
  );
}
