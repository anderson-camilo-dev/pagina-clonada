"use client";

import { useState } from "react";

type OrderType = "az" | "za" | "price-asc" | "price-desc";

type Props = {
  onChangeOrder: (order: OrderType) => void;
};

export function Alfhabet({ onChangeOrder }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<OrderType>("az");

  function handleSelect(order: OrderType) {
    setSelected(order);
    onChangeOrder(order);
    setOpen(false);
  }

  return (
    <div>
      <div className=" mx-auto flex  w-70 ">
        <div className="relative ">
          {/* BOTÃO */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2  flex items-center  border border-black/50 cursor-pointer bg-white rounded-full font-medium text-black"
          >
            {selected === "az" && "Alfabeticamente, de A a Z"}
            {selected === "za" && "Alfabeticamente, de Z a A"}
            {selected === "price-asc" && "Menor preço"}
            {selected === "price-desc" && "Maior preço"}
          </button>

          {/* CAIXINHA */}
          {open && (
            <div className="absolute right-0 mt-2 text-black bg-white   shadow-lg min-w-[220px] z-50">
              <button
                onClick={() => handleSelect("az")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Alfabeticamente, de A a Z
              </button>

              <button
                onClick={() => handleSelect("za")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Alfabeticamente, de Z a A
              </button>

              <button
                onClick={() => handleSelect("price-asc")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Menor preço
              </button>

              <button
                onClick={() => handleSelect("price-desc")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Maior preço
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
