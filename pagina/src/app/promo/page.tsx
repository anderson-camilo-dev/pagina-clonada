"use client";

import HeroPromo from "@/components/promo/HeroPromo";
import RollingText from "@/components/promo/RollingText";
import ProductCarousel from "@/components/promo/ProductCarousel";
import PrizeWheel from "@/components/promo/PrizeWheel";


export default function PromoPage() {
  return (
    <main className="bg-[#0b0000] pb-100 text-white min-h-screen">
      {/* Banner principal da promoção */}
      <HeroPromo />

      {/* Texto rolante ou destaque */}
      <RollingText />

      {/* Carrossel de produtos */}
      <ProductCarousel />

      {/* Roda da sorte / prêmio */}
      <PrizeWheel />
      
      <ProductCarousel />



    </main>
  );
}
