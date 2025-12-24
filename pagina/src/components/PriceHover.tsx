"use client";

import { useState } from "react";

interface PriceHoverProps {
  usdPrice: number;
  exchangeRate?: number;
}

export default function PriceHover({ usdPrice, exchangeRate = 5.20 }: PriceHoverProps) {
  const formatBRL = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  const formatUSD = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const [displayPrice, setDisplayPrice] = useState(formatUSD(usdPrice));

  return (
    <span
      className="cursor-pointer text-blue-600 font-semibold transition-colors duration-300 hover:text-green-600"
      onMouseEnter={() => setDisplayPrice(formatBRL(usdPrice * exchangeRate))}
      onMouseLeave={() => setDisplayPrice(formatUSD(usdPrice))}
    >
      {displayPrice}
    </span>
  );
}
