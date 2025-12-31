// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import ProductPageClient from "@/components/ProductPageClient";
import { Product } from "@/types/product";

// Função para buscar o produto
async function fetchProduct(id: string): Promise<Product> {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  return res.json();
}

// Server Component que passa os dados para o Client Component
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);
  return <ProductPageClient product={product} />;
}
