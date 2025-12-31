import { notFound } from "next/navigation";
import { headers } from "next/headers";
import ProductPageClient from "@/components/ProductPageClient";

export default async function ProductPage({ params }) {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/products/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const product = await res.json();
  return <ProductPageClient product={product} />;
}
