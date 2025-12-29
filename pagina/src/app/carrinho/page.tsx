"use client";

import { useCart } from "@/context/CartContext";

export default function CarrinhoPage() {
  const { cart, increase, decrease, removeItem, total } = useCart();

  return (
    <div className="max-w-w-full bg-white mx-auto min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-black/80 mb-6">Seu Carrinho</h1>
 
      {cart.length === 0 ? (
        <p className="text-black/80">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
              >
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-black/80 text-lg">{item.name}</p>
                  <p className="text-black/80">$ {item.price.toFixed(2)}</p>
                </div>

                <div className="flex  items-center gap-2">
                  <button onClick={() => decrease(item.id)} className="px-3 py-1  bg-black rounded hover:bg-gray-300 hover:text-black">-</button>
                  <span className="px-2 text-black/80">{item.quantity}</span>
                  <button onClick={() => increase(item.id)} className="px-3 py-1 bg-black rounded hover:bg-gray-300 hover:text-black">+</button>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end items-center gap-6">
            <p className="text-xl text-black/80 font-bold">Total: $ {total.toFixed(2)}</p>
            <button className="bg-black cursor-pointer text-white px-6 py-3 rounded hover:bg-gray-800">
              Finalizar Compra
            </button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}
