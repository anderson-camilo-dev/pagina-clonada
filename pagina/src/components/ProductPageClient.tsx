"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import PriceHover from "@/components/PriceHover";
import Button from "./Button";

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const { addItem } = useCart();

  const formatBR = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
        {/* Imagem do produto */}
        <div className="col-span-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="col-span-2 columns-1">
          <h1 className="text-4xl font-semibold text-gray-900">
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
            <div className="text-red-500 font-bold text-2xl ">
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
          <div className="text-black/60 my-5 font-bold ">
            <p>Esteja à frente com as promoções da Black Friday.</p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => addItem(product)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-black transition-colors"
            >
              Comprar Agora
            </button>

            <button
              onClick={() => addItem(product)}
              className="bg-black/30 cursor-pointer text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-black transition-transform"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          {/* Descrição/Informações extras */}
        </div>
      </div>
    </main>
  );
}
