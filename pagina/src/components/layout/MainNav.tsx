"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import TooltipLinks from "@/components/TooltipLinks";
import { Container } from "@/ui/Container";

export function MainNav() {
  const { cart, total } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="https://store.bigme.vip/cdn/shop/files/8cf163d1-4537-4a04-89db-5a354edabfd1.png?v=1733881864&width=120"
              alt="Logo"
              className="w-24 md:w-32"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-6 text-lg font-medium text-black/80">
           <Link href="/"> <TooltipLinks
              word="Loja"
              links={[
                { label: "Bigme Euro Shop", href: "/shop/euro" },
                { label: "Loja Bigme E-reader", href: "/shop/store" },
              ]}
            /></Link>
            <Link href="/shop" className="hover:text-red-500 transition-colors">Produtos</Link>
            <Link href="/promo" className="hover:text-red-500 transition-colors">New Year</Link>
           <Link href="/support"> <TooltipLinks
              word="Apoio"
              links={[
                { label: "Garantia", href: "/support/warranty" },
                { label: "Comparação de Modelos", href: "/support/model" },
                { label: "Software Download", href: "/support/software" },
                { label: "Contato", href: "/support/contact" },
              ]}
            /></Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">Quem Somos</Link>
          </div>

          {/* Icons Right */}
          <div className="flex items-center gap-x-4">
            <img
              className="h-6 w-auto"
              src="https://images.icon-icons.com/3205/PNG/96/globe_connection_network_online_communication_internet_website_world_wide_web_icon_195716.png"
              alt="globo"
            />
            <Link href="/shop">
              <img
                className="h-6 w-auto"
                src="https://images.icon-icons.com/494/PNG/512/magnifier_icon-icons.com_48267.png"
                alt="lupa"
              />
            </Link>
            <Link href="/login">
              <img
                className="h-6 w-auto"
                src="https://images.icon-icons.com/2645/PNG/512/person_icon_159921.png"
                alt="pessoa"
              />
            </Link>

            {/* Carrinho */}
            <div className="relative flex flex-col items-center">
              <Link href="/carrinho" className="relative">
                <img
                  className="h-6 w-auto"
                  src="https://images.icon-icons.com/3478/PNG/512/cart_icon_220010.png"
                  alt="Carrinho de compras"
                />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              <span className="text-xs text-gray-700 mt-1 font-medium">
                ${totalQuantity > 0 ? total.toFixed(2) : "0.00"}
              </span>
            </div>

            {/* Hamburger Mobile */}
            <button
              className="md:hidden ml-2 p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/shop"><TooltipLinks
              word="Loja"
              links={[
                { label: "Bigme Euro Shop", href: "/shop/euro" },
                { label: "Loja Bigme E-reader", href: "/shop/store" },
              ]}
              
            /></Link>
            <Link href="/shop" className="block px-2 py-1 text-black/85 hover:bg-gray-100 rounded">Produtos</Link>
            <Link href="/promo" className="block px-2 py-1 text-black/85 hover:bg-gray-100 rounded">New Year</Link>
          <Link href="/support"><h1 className="text-black/80"> <TooltipLinks 
              word="Apoio"
              links={[
                { label: "Garantia", href: "/support/warranty" },
                { label: "Comparação de Modelos", href: "/support/model" },
                { label: "Software Download", href: "/support/software" },
                { label: "Contato", href: "/support/contact" },
              ]}
              
            /></h1></Link> 
            <Link href="/about" className="block px-2 py-1 text-black hover:bg-gray-100 rounded">Quem Somos</Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
