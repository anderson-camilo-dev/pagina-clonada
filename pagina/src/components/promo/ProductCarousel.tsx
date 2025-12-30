"use client";

import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductCarousel() {
  const { addItem } = useCart();

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-10 text-center">
        Produtos em Destaque
      </h2>

      {/* Carrossel horizontal */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
        {products.slice(0, 4).map(product => (
          <div
            key={product.id}
            className="min-w-[280px] bg-[#140000] border border-red-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            {/* Imagem do produto */}
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded mb-4"
            />

            {/* Nome do produto */}
            <h3 className="text-xl font-semibold text-white">
              {product.name}
            </h3>

            {/* Preço */}
            <p className="text-red-400 mt-2 text-lg">
              $ {product.price.toFixed(2)}
            </p>

            {/* Botão adicionar ao carrinho */}
            <button
              onClick={() => addItem(product)}
              className="mt-4 w-full bg-red-700 hover:bg-red-800 py-2 rounded font-semibold transition-colors duration-200"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
