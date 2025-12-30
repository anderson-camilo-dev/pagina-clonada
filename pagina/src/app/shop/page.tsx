"use client";

import { useEffect, useState } from "react";
import { Alfhabet } from "@/components/homepage/Alfhabet";
import { Product } from "@/types/product";
import { BarEnd } from "@/components/layout/BarEnd";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/homepage/Categories";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<"az" | "za" | "price-asc" | "price-desc">("az");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // <-- estado de loading

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
        setLoading(false); // <-- desliga o loading
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
    <main className="min-h-screen bg-white/98 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="pt-2.5">
          <BarEnd />
        </div>

        <div className="max-w-7xl grid grid-cols-10">
          <div className="col-span-2 col-end-6 items-end">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="col-span-1 col-end-10">
            <Alfhabet onChangeOrder={setOrder} />
          </div>
        </div>

        {loading ? (
          <div className="col-span-3 flex justify-center items-center mt-10 text-xl text-black/70">
            Carregando produtos...
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            <div>
              <Categories />
            </div>

            <div
              className="col-span-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
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
