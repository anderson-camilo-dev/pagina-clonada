import { global } from "styled-jsx/css";
import Image from "next/image";import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  // Função para formatar o preço em Real Brasileiro
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  }
}

