"user clint";

import Image from "next/image";
import { Alfhabet } from "@/components/homepage/Alfhabet";
import { Product } from "@/types/product";
import { BarEnd } from "@/components/layout/BarEnd";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/homepage/Categories";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store", // Garante que pegaremos dados frescos sempre
  });

  if (!response.ok) {
    throw new Error("Falha ao buscar produtos");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-white/98  py-2">
      <div className="max-w-7xl mx-auto">
        <div className="pt-2.5">
          <BarEnd />
        </div >
        <div className="pb-8">
        <Alfhabet/>
        </div>
        <div className=" grid grid-cols-4 gap-2 ">
          <div className="  ">
            <Categories/>

          </div>
          <div className=" col-span-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
