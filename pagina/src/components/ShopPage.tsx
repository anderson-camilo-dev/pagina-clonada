"use client";
import Link from "next/link";
import ProductById from "./ProductById";
import VideoCarousel3D from "./VideoCarousel3D";
import ApoioCard from "./ApoioCards";
import RedeShop from "./RedesShop";

export default function ShopPage() {
  return (
    <main className="w-full bg-white px-4 sm:px-6 lg:px-8">
      {/* Título e ver mais */}
      <div className="max-w-7xl grid grid-cols-2 mx-auto pt-10 pb-5">
        <div>
          <h1 className="text-3xl text-start font-bold text-black/70">
            Produtos em destaque
          </h1>
        </div>
        <Link href="/shop">
          <div>
            <h1 className="text-end text-black/70">Ver mais...</h1>
          </div>
        </Link>
      </div>

      {/* Grid de produtos */}
      <div className="max-w-7xl gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductById id={1} />
        <ProductById id={2} />
        <ProductById id={3} />
        <ProductById id={4} />
      </div>

      {/* Vídeo 3D */}
      <div className="w-full pt-12">
        <VideoCarousel3D />
      </div>

      {/* Por que escolher a Bigme */}
      <div className="pt-12 text-center">
        <h1 className="max-w-7xl text-black/80 text-4xl font-extrabold pb-10 mx-auto">
          Por que escolher a Bigme?
        </h1>
      </div>

      {/* Apoio e redes */}
      <div className="pb-12">
        <ApoioCard />
      </div>
      <div className="pb-12">
        <RedeShop />
      </div>
    </main>
  );
}
