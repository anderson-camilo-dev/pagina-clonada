import Image from "next/image";
import { notFound } from "next/navigation";
import PriceHover from "@/components/PriceHover";
import Tooltip from "@/components/TooltipLinks";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <main className="flex  flex-col   bg-white min-h-screen">
      <div>
        <div className="flex mx-auto max-w-6xl">
          <h1 className="my-4  text-xs  text-neutral-400">
            <b className="text-black/80"> Home</b> → {product.name}{" "}
          </h1>
        </div>
      </div>

      <div className="flex p-4 mx-auto max-w-7xl w-full ">
        <div className="flex grid grid-cols-5 my-10 gap-2">
          <div className="col-span-3">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="col-span-2 columns-1">
            <h1 className="text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <div className=" my-3 flex flex-row ">
              <img
                className="h-7 "
                src="https://media.istockphoto.com/id/495602140/pt/vetorial/cinco-estrelas-de-ouro.jpg?s=612x612&w=0&k=20&c=KtiotL3hF1IWe2ykn05dyZLn80mrEmbjfNGLgaIKsEQ="
                alt=" estrelas"
              />
              <p className="font-light hover:underline text-xm cursor-pointer text text-black/60">
                avaliações
              </p>
            </div>
            <div className="flex my-3 flex-row">
              <div className="text-red-500 font-bold text-2xl ">
                <h1 className="p-1">
                  Preço: <PriceHover usdPrice={product.price} />
                </h1>
              </div>

              <div className="flex bg-orange-600 mt-2 mx-2 font-bold rounded-sm items-center h-6  max-w-xl ">
                <h1 className="p-2">desconto %</h1>
              </div>
            </div>
            <div>
              <img
                className="rounded-t-lg"
                src="https://store.bigme.vip/cdn/shop/files/01-B6.png?v=1763802474"
                alt="black fralde"
              />
            </div>
            <div className="text-black/60 my-5 font-bold ">
              <p>Esteja à frente com as promoções da Black Friday.</p>
            </div>
            <div className=" cursor-pointer ">
              <div className="flex text-3xl font-extrabold rounded-lg bg-blue-500 px-28 py-4 text-white transition-colors hover:bg-black disabled:cursor-not-allowed
               disabled:opacity-50 disabled:hover:bg-blue-600">
                <span className="hidden sm:inline items-center">
                  Comprar Agora
                </span>
              </div>
              <div className="flex mt-5 text-xl  font-extrabold rounded-lg  align-middle bg-black/30 px-27 py-5 text-white transition-colors hover:bg-black
               disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600">
                <span className="hidden sm:inline mx-auto">
                  Adicionar ao Carrinho
                </span>
                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
