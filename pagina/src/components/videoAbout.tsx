"use client";

import Completo from "./divsPageQuem/Complet";

export default function VideoYoutube() {
  return (
    <main className="bg-white">
      {/* Seção de topo com imagem e título */}
      <div className="relative h-[80vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://blog.alegra.com/wp-content/uploads/2019/05/bump-collaboration-colleagues-1068523.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-blue-400 opacity-50" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-8xl font-extrabold uppercase">
          QUEM SOMOS
        </h1>
      </div>

      {/* Seção do vídeo + texto */}
      <div className="container mx-auto px-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full aspect-video">
          <iframe
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/8rLxRzzxrH0?si=fUobs97-0JrLAZ9y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-semibold mb-4">
            Olá, prazer em conhecê-lo!
          </h1>
          <p className="text-black/70 text-lg md:text-xl leading-relaxed">
            Bem-vindo(a) à Bigme! O fundador e a equipe principal da Bigme dedicam-se
            a toda a cadeia produtiva de telas de tinta eletrônica desde 2008,
            com forte foco em pesquisa e desenvolvimento, fabricação, marca e retail.
            Após 17 anos de desenvolvimento e transformação contínuos, a Bigme tornou-se
            uma marca líder na indústria de telas de tinta de cor, tendo aprimorado profundamente
            sete gerações de telas coloridas.
          </p>
        </div>
      </div>

      {/* Seção de estatísticas */}
      <div className="bg-blue-100 shadow-2xl shadow-black/5 w-full py-10 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-black/70 font-bold text-2xl">
              Experiência de usuário amigável e confiável
            </h2>
            <p className="text-black/70 mt-2">
              Tecnologia para fornecer poderosas ferramentas de produtividade
            </p>
          </div>
          <div>
            <h2 className="text-black/70 text-4xl font-extrabold">Mais de 100</h2>
            <p className="text-black/70">Países</p>
          </div>
          <div>
            <h2 className="text-black/70 text-4xl font-extrabold">16</h2>
            <p className="text-black/70">Anos de Experiência</p>
          </div>
          <div>
            <h2 className="text-black/70 text-4xl font-extrabold">9.000+</h2>
            <p className="text-black/70">Remessas</p>
          </div>
        </div>
      </div>

      {/* Seção de texto sobre inovação */}
      <div className="container mx-auto px-6 py-20 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Comprometido com produtos inovadores de tela E-ink
        </h1>
        <p className="text-black/70 text-lg md:text-xl leading-relaxed">
          Como um pioneiro em dispositivos coloridos E Ink inteligentes, a Bigme continua a
          inovar neste campo, refinando produtos por meio de iteração rápida para exceder
          as expectativas do usuário. Com comprometimento em capacitar usuários para
          "encontrar um eu mais forte", a marca combina tecnologia de ponta com design
          pensado, conduzindo o futuro da inovação em E Ink colorida.
        </p>
      </div>

      {/* Seção de visão e missão */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        <div>
          <img
            src="https://store.bigme.vip/cdn/shop/files/01_1.jpg?v=1734418087&width=700"
            alt="predio"
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-semibold text-black mb-6">Nossa Visão</h2>
          <p className="text-black/70 text-2xl leading-relaxed">
            Concentre-se de todo o coração nos produtos e serviços atuais, busque a
            excelência, repita rapidamente e tenha como objetivo ser um player de destaque
            no nicho dentro de três a cinco anos.
          </p>
        </div>

        <div className="order-2 md:order-3 flex flex-col justify-center">
          <h2 className="text-5xl font-semibold text-black mb-6 text-right">Nossa Missão</h2>
          <p className="text-black/70 text-2xl leading-relaxed text-right">
            Detecte e conecte as necessidades dos consumidores e criadores, crie valor
            para os consumidores e compartilhe os benefícios com os criadores.
          </p>
        </div>
        <div className="order-3 md:order-4">
          <img
            src="https://store.bigme.vip/cdn/shop/files/02_1.jpg?v=1734418124&width=700"
            alt="missao"
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Seção Completo */}
      <div className="container mx-auto px-6 py-20">
        <Completo />
      </div>
    </main>
  );
}
