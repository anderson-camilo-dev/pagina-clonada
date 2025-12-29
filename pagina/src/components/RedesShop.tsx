"use client";

export default function RedeShop() {
  return (
    <main className="max-w-7xl mx-auto ">
      <div className="items-center pt-30 ">
        <h1 className="max-w-7xl text-black/80 text-4xl font-extrabold text-center pb-10 mx-auto">
          Por que escolher a Bigme?
        </h1>
      </div>
      <div className="grid grid-cols-2 max-w-7xl mx-auto gap-2">
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kcdjBRDd79Y?si=jRuwyclXD7ZOnadL&amp;start=1"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="max-w-3xl  ">
          <h1 className="font-bold text-4xl text-center pt-10 text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pt-10 text-start text-2xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-7xl pt-30 mx-auto gap-2">
        {" "}
        <div className="max-w-3xl ">
          <h1 className="font-bold text-4xl text-center pt-10 text-black/80">
            Bigme na IFA 2024
          </h1>
          <p className="text-black/80 font-semibold pt-10 text-start text-2xl">
            Bigme fez uma grande aparição na IFA 2024 em Berlim, Alemanha,
            apresentando uma variedade de produtos inovadores que cativaram
            tanto os usuários quanto a mídia. Isto aumentou significativamente o
            reconhecimento da Bigme na Europa.
          </p>
        </div>
        <div className="">
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
