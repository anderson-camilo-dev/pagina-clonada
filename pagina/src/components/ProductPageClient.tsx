"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import PriceHover from "@/components/PriceHover";

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({
  product,
}: ProductPageClientProps) {
  const { addItem } = useCart();

  return (
    <main className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        
        {/* Imagem */}
        <div className="md:col-span-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Informações */}
        <div className="md:col-span-2 flex flex-col">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <div className="my-3">
            <h2 className="text-red-500 font-bold text-xl md:text-2xl">
              Preço: <PriceHover usdPrice={product.price} />
            </h2>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={() => addItem(product)}
              className="w-full bg-blue-500 text-white px-6 py-4 rounded-lg text-lg font-bold hover:bg-black transition-colors"
            >
              Comprar Agora
            </button>

            <button
              onClick={() => addItem(product)}
              className="w-full bg-black/30 text-white px-6 py-4 rounded-lg text-lg font-bold hover:bg-black transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
