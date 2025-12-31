'use client';

export default function RedeShop() {
  return (
    <main className="max-w-7xl pt-12 mx-auto px-4 sm:px-6">
      <div className="pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black/80 font-bold text-center sm:text-start">
          Bigme nas redes sociais
        </h1>
      </div>

      {/* Primeira linha */}
      <div className="grid grid-cols-1 md:grid-cols-2  pt-5">
        <div className="w-full h-auto">
          <iframe
            className="w-full h-[200px] sm:h-[315px]"
            src="https://www.youtube.com/embed/kcdjBRDd79Y?si=jRuwyclXD7ZOnadL&amp;start=1"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-2xl sm:text-3xl pl-6 md:text-4xl text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pt-4 pl-6 text-base sm:text-lg md:text-xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
      </div>

      {/* Segunda linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col justify-center text-center md:text-end">
          <h1 className="font-semibold text-2xl pr-6 sm:text-3xl md:text-4xl text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pr-6 pt-4 text-base sm:text-lg md:text-xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
        <div className="w-full h-auto">
          <iframe
            className="w-full h-[200px] sm:h-[315px]"
            src="https://www.youtube.com/embed/n0elnqfSqCE?si=rNng-LHLtBUUReLs"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
