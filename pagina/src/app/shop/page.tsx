"use client";

import { useEffect, useState } from "react";
import { Alfhabet } from "@/components/homepage/Alfhabet";
import { Product } from "@/types/product";
import { BarEnd } from "@/components/layout/BarEnd";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/homepage/Categories";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<
  "az" | "za" | "price-asc" | "price-desc"
>("az");



  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  const orderedProducts = [...products].sort((a, b) => {
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

        <div className="pb-8">
          <Alfhabet onChangeOrder={setOrder} />
        </div>

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
      </div>

      <Footer />
    </main>
  );
}
