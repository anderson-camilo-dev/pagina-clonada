import { useState } from "react";

const premios = [
  { nome: "$10", peso: 10, cor: "from-yellow-400 via-yellow-500 to-yellow-600" },
  { nome: "ZERO 🤣🤣", peso: 30, cor: "from-gray-400 via-gray-500 to-gray-600" },
  { nome: "$2", peso: 20, cor: "from-green-400 via-green-500 to-green-600" },
  { nome: "$50", peso: 5, cor: "from-red-400 via-red-500 to-red-600" },
  { nome: "$1", peso: 25, cor: "from-blue-400 via-blue-500 to-blue-600" },
  { nome: "$5", peso: 20, cor: "from-purple-400 via-purple-500 to-purple-600" },
  { nome: "$20", peso: 8, cor: "from-pink-400 via-pink-500 to-pink-600" },
  { nome: "JACKPOT", peso: 2, cor: "from-yellow-300 via-orange-400 to-red-500" },
  { nome: "$15", peso: 10, cor: "from-teal-400 via-teal-500 to-teal-600" },
  { nome: "$100", peso: 1, cor: "from-gold-400 via-yellow-500 to-red-600" },
  { nome: "$1", peso: 25, cor: "from-blue-400 via-blue-500 to-blue-600" },
  { nome: "$5", peso: 20, cor: "from-purple-400 via-purple-500 to-purple-600" },
];

function escolherPremio() {
  const totalPeso = premios.reduce((acc, premio) => acc + premio.peso, 0);
  let sorteio = Math.random() * totalPeso;
  for (let premio of premios) {
    if (sorteio < premio.peso) return premio;
    sorteio -= premio.peso;
  }
  return premios[0];
}

export default function Roleta() {
  const [girando, setGirando] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [premioGanho, setPremioGanho] = useState(null);

  const ajustePonteiro = 5;

  const girarRoleta = () => {
    if (girando) return;
    setGirando(true);
    setPremioGanho(null);

    const premio = escolherPremio();
    const premioIndex = premios.findIndex(p => p.nome === premio.nome);

    const numFatias = premios.length;
    const anguloPorFatia = 360 / numFatias;
    const centroDaFatia =
      premioIndex * anguloPorFatia + anguloPorFatia / 2 - ajustePonteiro;

    const rotacaoAtual = rotation % 360;
    const grausParaAlinhar = 360 - centroDaFatia - rotacaoAtual;
    const voltas = 5;
    const grausTotal = voltas * 360 + grausParaAlinhar;

    setRotation(rotation + grausTotal);

    setTimeout(() => {
      setGirando(false);
      setPremioGanho(premio);
    }, 5000);
  };

  return (
    <div className="flex flex-col h-screen items-center pt-20 bg-[url('/fundo4.jpg')] bg-cover  mt-10 space-y-6 px-4 relative overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg animate-pulse">
        GIRE A ROLETA E GANHE!
      </h1>

      <div className="relative w-full max-w-[400px] aspect-square">
        <img
          src="/roleta/roleta.webp"
          alt="Roleta"
          className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: girando
              ? "transform 5s cubic-bezier(0.33, 1, 0.68, 1)"
              : "none",
          }}
        />
        <img
          src="/roleta/ponteiro.webp"
          alt="Ponteiro"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] sm:w-[12%] md:w-[10%] pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,0,0.9)] "
        />
        {!girando && (
          <button
            onClick={girarRoleta}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            Girar
          </button>
        )}
      </div>

      {premioGanho && (
        <div className="relative mt-6 flex flex-col items-center justify-center">
          {/* Glow do prêmio */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${premioGanho.cor} blur-2xl opacity-60 animate-pulse`}
          />

          

          {/* Cartão do prêmio animado */}
          <div className="relative z-10 bg-black/80 backdrop-blur-md border border-yellow-400/50 rounded-3xl px-10 py-8 text-center animate-[pop_0.8s_ease-out] shadow-xl shadow-yellow-400/50">
            <p className="text-lg uppercase tracking-widest text-yellow-300 mb-3 animate-bounce">
              🎉 Parabéns!
            </p>
            <p
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${premioGanho.cor} drop-shadow-xl animate-pulse`}
            >
              {premioGanho.nome}
            </p>
            <p className="mt-3 text-base sm:text-lg text-yellow-200 animate-fade-in">
              Você acabou de ganhar esse prêmio 🎁
            </p>
          </div>

          <style jsx>{`
            @keyframes pop {
              0% { transform: scale(0.5); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes fall {
              0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
              100% { transform: translateY(150px) rotate(360deg); opacity: 0; }
            }
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes fade-in {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-fall { animation: fall 2s linear infinite; }
            .animate-bounce { animation: bounce 1s infinite; }
            .animate-fade-in { animation: fade-in 1s ease forwards; }
          `}</style>
        </div>
      )}
    </div>
  );
}
