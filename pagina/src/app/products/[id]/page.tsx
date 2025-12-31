// src/app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import ProductPageClient from "@/components/ProductPageClient";

interface Params {
  id: string;
}

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = params;

  const res = await fetch(`/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const product = await res.json();

  return <ProductPageClient product={product} />;
}
