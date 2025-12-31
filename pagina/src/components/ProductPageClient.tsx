"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import PriceHover from "@/components/PriceHover";

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        {/* Imagem do Produto */}
        <div className="md:col-span-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Informações do Produto */}
        <div className="md:col-span-2 flex flex-col">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className=" my-3 flex flex-row ">
            <img
              className="h-7 "
              src="https://media.istockphoto.com/id/495602140/pt/vetorial/cinco-estrelas-de-ouro.jpg?s=612x612&w=0&k=20&c=KtiotL3hF1IWe2ykn05dyZLn80mrEmbjfNGLgaIKsEQ="
              alt=" estrelas"
            />
            <p className="font-light hover:underline text-xm cursor-pointer text text-black/60">
              avaliações
            </p>
          </div>
          <div className="flex my-3 flex-row">
            <div className="text-red-500 font-bold text-4xl ">
              <h1 className="p-1">
                Preço: <PriceHover usdPrice={product.price} />
              </h1>
            </div>

            <div className="flex bg-orange-600 mt-2 mx-2 font-bold rounded-sm items-center h-6  max-w-xl ">
              <h1 className="p-2">desconto %</h1>
            </div>
          </div>
          <div>
            <img
              className="rounded-t-lg"
              src="https://store.bigme.vip/cdn/shop/files/01-B6.png?v=1763802474"
              alt="black fralde"
            />
          </div>
          {/* Botões */}
          <div className="flex flex-col gap-4 mt-auto">
            <button
              onClick={() => addItem(product)}
              className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:scale-105"
            >
              Comprar Agora
            </button>

            <button
              onClick={() => addItem(product)}
              className="w-full bg-black/30 hover:bg-black text-white px-6 py-4 rounded-xl text-lg font-bold shadow-md transition-all transform hover:scale-105"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          {/* Descrição / Promo */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-700">
              Aproveite nossas promoções e garanta o melhor preço neste produto!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
