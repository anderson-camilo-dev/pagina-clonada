"use client";

export default function RedeShop() {
  return (
    <main className="max-w-7xl pt-30 mx-auto ">
     <div className="max-w-7xl mx-auto pt-10">
    <h1 className="text-5xl text-black/80 font-bold">Bigme nas redes sociais</h1>
  </div>
      <div className="grid grid-cols-2 pt-5  mx-auto ">
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kcdjBRDd79Y?si=jRuwyclXD7ZOnadL&amp;start=1"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="max-w-3xl  ">
          <h1 className="font-semibold text-4xl text-start pt-10 text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pt-10 text-start text-xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-7xl pt-30 mx-auto gap-2">
        {" "}
        <div className="max-w-3xl mr-20">
          <h1 className="font-semibold text-4xl text-end pt-10 text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pt-10 text-end text-xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
        <div className="flex justify-items-end">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/n0elnqfSqCE?si=rNng-LHLtBUUReLs"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
