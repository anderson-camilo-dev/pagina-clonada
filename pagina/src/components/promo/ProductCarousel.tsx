"use client";

import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductCarousel() {
  const { addItem } = useCart();

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-900 via-black to-red-950 animate-pulse-slow"></div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg animate-pulse">
        COMPRE AGORA
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pt-10 pb-10 px-2">
        {products.slice(0, 4).map(product => (
          <div
            key={product.id}
            className="min-w-[280px]  bg-[#140000] border border-red-800 rounded-2xl p-6 relative hover:scale-105 transition-transform duration-300 shadow-xl shadow-red-800/50 animate-fade-in"
          >
           

            {/* Imagem do produto */}
            <div className="relative z-10">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-xl mb-4 hover:brightness-110 transition-all duration-300 shadow-lg shadow-red-700/70"
              />
            </div>

            <h3 className="text-xl line-clamp-2 font-semibold text-white mb-2 relative z-10">
              {product.name}
            </h3>

            <p className="text-red-400 mt-1 text-lg font-bold relative z-10 animate-pulse">
              $ {product.price.toFixed(2)}
            </p>

            <button
              onClick={() => addItem(product)}
              className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 py-2 rounded-xl font-semibold text-white text-lg shadow-md shadow-red-900/50 transition-all duration-300 relative z-10 hover:scale-105"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease forwards; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
