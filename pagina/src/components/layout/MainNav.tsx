"use client"; // necessário para usar hooks de cliente como useCart

import { Container } from "@/ui/Container";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import TooltipLinks from "@/components/TooltipLinks";

export function MainNav() {
  const { cart, total } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img
              src="https://store.bigme.vip/cdn/shop/files/8cf163d1-4537-4a04-89db-5a354edabfd1.png?v=1733881864&width=120"
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>

          {/* Menu de links */}
          <div className="meu-texto texto-hover flex items-center text-xl gap-19">
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/">
                <TooltipLinks
                  word="Loja"
                  links={[
                    { label: "Bigme Euro Shop", href: "/shop/euro" },
                    { label: "Loja Bigme E-reader", href: "/shop/store" },
                  ]}
                />
              </Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/shop">Produtos</Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/BlackFraud">Black Fraud</Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/support">
                <TooltipLinks
                  word="Apoio"
                  links={[
                    { label: "Garantia", href: "/support/warranty" },
                    { label: "Comparação de Modelos", href: "/support/model" },
                    { label: "Software Download", href: "/support/software" },
                    { label: "Contato", href: "/support/contact" },
                  ]}
                />
              </Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/about">Quem Somos</Link>
            </h1>
          </div>

          {/* Ícones do lado direito */}
          <div className="gap-4 flex items-center">
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

            {/* Carrinho com quantidade e total */}
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
          </div>
        </div>
      </Container>
    </nav>
  );
}
