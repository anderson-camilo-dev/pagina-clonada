export default function VideoYoutube() {
  return (
    <main className="mx-auto max-w-7xl ">
      <div className="pt-20  grid grid-cols-2 gap-4  ">
        <div className=" h-100">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8rLxRzzxrH0?si=fUobs97-0JrLAZ9y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className=" h-100">
          <h1 className="text-black text-center text-4xl font-extrabold">
            Olá, prazer em conhecê-lo!
          </h1>
          <p className="text-black/70 text-center text-xl pt-4 font-medium">
            Bem-vindo(a) à Bigme! O fundador e a equipe principal da Bigme
            dedicam-se a toda a cadeia produtiva de telas de tinta eletrônica
            desde 2008, com forte foco em pesquisa e desenvolvimento.&D,
            fabricação, marca e retail.Through Após 17 anos de desenvolvimento e
            transformação contínuos, a Bigme tornou-se uma marca líder na
            indústria de telas de tinta eletrônica coloridas, tendo aprimorado
            profundamente sete gerações de telas de tinta colorida.
          </p>
        </div>
      </div>
      <div className="bg-white/30  shadow-2xl max-w-full">
        <h1 className="text-4xl  text-black font-bold text-center">
          Comprometido com produtos inovadores de tela E-ink
        </h1>
        <p className="text-black font-light text-start pt-4">
          Como um pioneiro em dispositivos coloridos Eink inteligentes , Bigme
          continua a inovar em este campo, refinando produtos por meio de
          iteração rápida para exceder as expectativas do usuário. Com
          comprometida em capacitar usuários para "encontrar um eu mais forte",
          a marca combina corte tecnologia g-edge com design pensativo,
          conduzindo o futuro da cor Eink inovação.
        </p>
      </div>
      <div className="grid grid-cols-4 pt-40 gap-2">
        <div>
          <h1 className="text-black/70 font-bold text-2xl">
            Experiência de usuário amigável e confiável tecnologia para fornecer
            poderosa ferramentas de produtividade para você
          </h1>
        </div>
        <div >
          <h1 className="text-black text-center text-4xl font-extrabold">Mais de 100</h1 > <p className="text-center text-black">Países</p>
        </div>
        <div><h1 className="text-6xl text-black text-center font-extrabold">16</h1> 
        <p className="text-black/80 text-xl text-center font-medium">Experiência de ano</p></div>
        <div><h1 className="text-5xl font-extrabold text-black text-center">9.000 mil +</h1> <p className="text-black/80 font-light text-center">Remessa</p></div>
      </div>
    </main>
  );
}
