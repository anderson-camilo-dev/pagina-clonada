'use client'

export default function ApoioCard() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mx-auto">
        {/* Envio rápido */}
        <div className="rounded-2xl bg-gray-800 p-4 flex flex-col items-center">
          <img
            className="rounded-full pt-5"
            src="/icone/caminhao.gif"
            alt="Envio rápido"
            width={120}
            height={120}
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-5 font-bold text-gray-400">
            Envio rápido
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center pt-4 sm:pt-6 mx-2 font-semibold">
            Envio dentro de 72 horas por DHL, Fedex ou UPS e 3 a 7 dias para chegar
          </p>
        </div>

        {/* Suporte ao Cliente */}
        <div className="rounded-2xl bg-gray-800 p-4 flex flex-col items-center">
          <img
            className="rounded-full pt-5"
            src="/icone/presente.gif"
            alt="Suporte ao Cliente"
            width={120}
            height={120}
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-5 font-bold text-gray-400">
            Suporte ao Cliente
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center pt-2 sm:pt-4 mx-3 font-semibold">
            Responde rapidamente e comprometido em resolver os problemas dos clientes.
          </p>
        </div>

        {/* Garantia */}
        <div className="rounded-2xl bg-gray-800 p-4 flex flex-col items-center">
          <img
            className="rounded-full pt-5"
            src="/icone/seta.gif"
            alt="Garantia"
            width={120}
            height={120}
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-5 font-bold text-gray-400">
            Garantia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center pt-4 sm:pt-6 mx-3 font-semibold">
            A garantia de 1 ano para hardware garante todas as compras e experiências...
          </p>
        </div>

        {/* Anos de experiência */}
        <div className="rounded-2xl bg-gray-800 p-4 flex flex-col items-center">
          <img
            className="rounded-full pt-5"
            src="/icone/16-number.gif"
            alt="Anos de experiência"
            width={120}
            height={120}
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-5 font-bold text-gray-400">
            Anos de experiência
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center pt-2 sm:pt-4 mx-3 font-semibold">
            Garantimos a qualidade dos produtos e a pontualidade das atualizações de software...
          </p>
        </div>
      </div>
    </main>
  )
}
