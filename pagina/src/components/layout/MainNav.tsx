import { Container } from "@/ui/Container";
import image from "next/image";
import { global } from "styled-jsx/css";
import Link from "next/link";


export function MainNav() {

  
  return (
    <nav className=" bg-white">
      <Container>
        <div className="flex h-16  items-center justify-between">
          <Link href="/">
          <img
            src="https://store.bigme.vip/cdn/shop/files/8cf163d1-4537-4a04-89db-5a354edabfd1.png?v=1733881864&width=120"
            alt="Logo"
            width={120}
            height={40}
          />
          </Link>

          <div className=" meu-texto texto-hover flex items-center text-xl gap-19">
            <h1 className="text-black hover:text-red-500 transition-colors  duration-300">
              <Link href="/shop">
              Loja 
             </Link>
            </h1>

            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/product">
              Produtos
              </Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="BlackFraud">
              black Fraud
              </Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/support">
              Apoio
              </Link>
            </h1>
            <h1 className="text-black hover:text-red-500 transition-colors duration-300">
              <Link href="/about">
              Quem Somos
              </Link>
            </h1>
          </div>
          <div className=" gap-4 flex items-center"> 
            <img className="h-6 w-auto"
              src="https://images.icon-icons.com/3205/PNG/96/globe_connection_network_online_communication_internet_website_world_wide_web_icon_195716.png"
              alt="globo"
            />

            <img className="h-6 w-auto" 
              src="https://images.icon-icons.com/494/PNG/512/magnifier_icon-icons.com_48267.png"
              alt="lupa"
            />

            <img className="h-6 w-auto"
              src="https://images.icon-icons.com/2645/PNG/512/person_icon_159921.png"
              alt="pessoa"
            />

            <img className="h-6 w-auto"
              src="https://images.icon-icons.com/3478/PNG/512/cart_icon_220010.png"
              alt="carrinho de compra "
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
