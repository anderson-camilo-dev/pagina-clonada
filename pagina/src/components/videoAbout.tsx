import Completo from "./divsPageQuem/Complet";

export default function VideoYoutube() {
  return (
    <main
      className="bg-white
      "
    >
      <div className="   ">
        <div className="h-100 w-full relative bg-blue-400">
          <div
            className=" border-b-2 border-blue-600 
        grayscale
        h-100
        w-full
        absolute 
        opacity-50
        bg-[url('https://blog.alegra.com/wp-content/uploads/2019/05/bump-collaboration-colleagues-1068523.jpg')]
        bg-cover
        bg-center
        bg-no-repeat"
          ></div>
        </div>

        <div className="pt-20  grid  grid-cols-2 max-w-7xl mx-auto gap-4  ">
          <div className=" h-100">
            <iframe className="rounded-lg"
            
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8rLxRzzxrH0?si=fUobs97-0JrLAZ9y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className=" h-100">
            <h1 className="text-black text-start max-w-7xl mx-auto text-4xl font-semibold">
              Olá, prazer em conhecê-lo!
            </h1>
            <p className="text-black/70 text-start max-w-7xl mx-auto text-xl pt-4 font-medium">
              Bem-vindo(a) à Bigme! O fundador e a equipe principal da Bigme
              dedicam-se a toda a cadeia produtiva de telas de tinta eletrônica
              desde 2008, com forte foco em pesquisa e desenvolvimento.&D,
              fabricação, marca e retail.Through Após 17 anos de desenvolvimento
              e transformação contínuos, a Bigme tornou-se uma marca líder na
              indústria de telas de tinta eletrônica coloridas, tendo aprimorado
              profundamente sete gerações de telas de tinta colorida.
            </p>
          </div>
        </div>
        <div className=" bg-blue-100 shadow-2xl shadow-black/5  w-full    ">
          <div className="grid  grid-cols-4 mx-auto items-center gap-2 py-10 max-w-7xl">
            <div>
              <h1 className="text-black/70 max-w-7xl mx-auto font-bold text-2xl">
                Experiência de usuário amigável e confiável tecnologia para
                fornecer poderosa ferramentas de produtividade para você
              </h1>
            </div>
            <div>
              <h1 className="text-black/70 max-w-7xl mx-auto text-center text-4xl font-extrabold">
                Mais de 100
              </h1>{" "}
              <p className="text-center max-w-7xl mx-auto text-black/70">Países</p>
            </div>
            <div>
              <h1 className="text-6xl text-black/70 max-w-7xl mx-auto text-center font-extrabold">
                16
              </h1>
              <p className="text-black/70 max-w-7xl mx-auto text-xl text-center font-medium">
                Experiência de ano
              </p>
            </div>
            <div>
              <h1 className="text-5xl max-w-7xl mx-auto font-extrabold text-black/70 text-center">
                9.000 mil +
              </h1>{" "}
              <p className="text-black/70 max-w-7xl mx-auto font-light text-center">
                Remessa
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 max-w-7xl py-30 mx-auto  ">
          <h1 className="text-4xl  text-black max-w-7xl mx-auto font-bold text-center">
            Comprometido com produtos inovadores de tela E-ink
          </h1>
          <p className="text-black font-light text-start pt-4">
            Como um pioneiro em dispositivos coloridos Eink inteligentes , Bigme
            continua a inovar em este campo, refinando produtos por meio de
            iteração rápida para exceder as expectativas do usuário. Com
            comprometida em capacitar usuários para "encontrar um eu mais
            forte", a marca combina corte tecnologia g-edge com design
            pensativo, conduzindo o futuro da cor Eink inovação.
          </p>
        </div>

        <div className="grid grid-cols-2 max-w-7xl mx-auto  pt-20">
          <div>
            <img
              className=""
              src="https://store.bigme.vip/cdn/shop/files/01_1.jpg?v=1734418087&width=700"
              alt="predio"
            />
          </div>
          <div className="ml-10">
            <h1 className="text-start  text-5xl max-w-7xl  mx-auto text-black font-semibold">
              Nossa Visão
            </h1>
            <p className="text-black/70 max-w-7xl mx-auto pt-10 text-start text-2xl">
              Concentre-se de todo o coração nos produtos e serviços atuais,
              busque a excelência, repita rapidamente e tenha como objetivo ser
              um player de destaque no nicho dentro de três a cinco anos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 max-w-7xl mx-auto  ">
          <div className="mr-10">
            <h1 className="text-black max-w-7xl mx-auto font-semibold text-5xl  text-end pb-10 pt-20">
              Nossa Missão
            </h1>
            <p className="text-black/70 max-w-7xl mx-auto  text-end text-2xl ">
              Detecte e conecte as necessidades dos consumidores e criadores,
              crie valor para os consumidores e compartilhe os benefícios com os
              criadores.
            </p>
          </div>
          <div>
            <img
              className="h-100"
              src="https://store.bigme.vip/cdn/shop/files/02_1.jpg?v=1734418124&width=700"
              alt=""
            />
          </div>
        </div>
        <div className="pt-20 max-w-7xl mx-auto">
          <Completo />
        </div>
      </div>
    </main>
  );
}
