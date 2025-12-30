"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const convertedPrice = product.price * 5.54;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
      price
    );

  const formatBR = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  return (
    <div className="group relative flex flex-col overflow-hidden bg-white shadow-md rounded-lg">
      {/* Imagem do produto */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100 rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="rounded bg-red-500 px-3 py-1 text-sm font-semibold text-black">
                Esgotado
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Informações do produto */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-2 text-lg font-mono text-black line-clamp-2 hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Preço */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-lg font-semibold mb-4 cursor-pointer transition-colors text-black/80 hover:text-blue-500"
        >
          {isHovered ? formatBR(convertedPrice) : formatPrice(product.price)}
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <button
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-black/80 px-4 py-2 text-white font-semibold transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            Comprar
          </button>
          <button
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            className="w-12 flex items-center justify-center rounded-lg bg-gray-400 hover:bg-gray-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
