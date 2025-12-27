

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
    <div className="grid grid-cols-12 mb-30 gap-10 p-10">
      {/* COLUNA ESQUERDA */}
      <div className="col-span-4 space-y-4">
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
            className={`rounded-full py-5 w-full  transition-all
              ${
                ativo === value
                  ? "bg-gray-500 text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* COLUNA DIREITA */}
      <div className="col-span-8 flex items-center justify-center text-start">
        {renderConteudo()}
      </div>
    </div>
  );
}
