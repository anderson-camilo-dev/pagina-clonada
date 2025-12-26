"use client"

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}



export default function ProductCard({ product }: ProductCardProps) {
  // Função para formatar o preço em Real Brasileiro
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatBR = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };


const [isHovered, setIsHovered] = useState(false);
  const convertedPrice = product.price * 5.54;

  return (
    <div className="group relative flex flex-col overflow-hidden   bg-white 0">
      {/* Envolvemos a imagem e o título em um Link para a página de detalhes */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square font-mono w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="mb-2 text-lg font-mono text-black line-clamp-2 hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        
        <div>
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-lg font-semibold mb-2 cursor-pointer  transition-colors text-black/50 duration-300 hover:text-blue-500"
          >
            
            {
              isHovered
                ? formatBR(convertedPrice) // valor multiplicado
                : formatPrice(product.price) // valor original
            }
          </div>

          <button
            disabled={!product.inStock}
            className="flex items-center gap-2 rounded-lg bg-black/50 px-4 py-2 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="hidden sm:inline">Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
