"use client";

import { useEffect, useState } from "react";
import { Alfhabet } from "@/components/homepage/Alfhabet";
import { Product } from "@/types/product";
import { BarEnd } from "@/components/layout/BarEnd";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/homepage/Categories";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<"az" | "za" | "price-asc" | "price-desc">("az");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const orderedProducts = [...filteredProducts].sort((a, b) => {
    switch (order) {
      case "az":
        return a.name.localeCompare(b.name);
      case "za":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-white/98 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Barra inferior superior */}
        <div className="pt-2.5">
          <BarEnd />
        </div>

        {/* Layout principal */}
        {loading ? (
          <div className="flex justify-center items-center mt-10 text-xl text-black/70 w-full">
            Carregando produtos...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            {/* Lateral esquerda */}
            <div className="md:col-span-1 space-y-4">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Alfhabet onChangeOrder={setOrder} />
              <Categories />
            </div>

            {/* Produtos */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {orderedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
