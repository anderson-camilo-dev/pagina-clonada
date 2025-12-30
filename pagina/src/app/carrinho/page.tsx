"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CarrinhoPage() {
  const { cart, increase, decrease, removeItem, total } = useCart();

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-black/80 mb-6 text-center sm:text-left">
          Seu Carrinho
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-black/60 text-xl sm:text-2xl mb-4">
              Seu carrinho está vazio.
            </p>
            <Link href="/shop" className="inline-block">
              <div className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2 transition">
                Comprar agora!
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded"
                  />

                  <div className="flex-1 w-full">
                    <p className="font-semibold text-black/80 text-lg sm:text-xl">
                      {item.name}
                    </p>
                    <p className="text-black/80 text-sm sm:text-base">
                      $ {item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrease(item.id)}
                        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-700 transition"
                      >
                        -
                      </button>
                      <span className="px-2 text-black/80">{item.quantity}</span>
                      <button
                        onClick={() => increase(item.id)}
                        className="px-3 py-1 bg-black text-white rounded hover:bg-gray-700 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end mt-2 sm:mt-0">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 mb-2"
                    >
                      Remover
                    </button>
                    <p className="text-black/70 text-sm">
                      Total: $ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total geral */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xl sm:text-2xl text-black/80 font-bold">
                Total: $ {total.toFixed(2)}
              </p>
              <button className="bg-black text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-gray-800 transition">
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
