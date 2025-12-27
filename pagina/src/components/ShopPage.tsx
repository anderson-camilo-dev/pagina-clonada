"use client"
import Link from "next/link";
import ProductCard from "./ProductCard";
import ProductById from "./ProductById";
import VideoCarousel3D from "./VideoCarousel3D";

export default function ShopPage() {
  return (
    <main className="w-full bg-white  ">
      <div className="max-w-7xl grid grid-cols-2 mx-auto pt-10 pb-5">
        <div><h1 className="text-3xl text-start font-bold text-black/70 ">Produtos em destaque</h1></div>
     < Link href="/shop">
        <div><h1 className="text-end text-black/70">Ver mais...</h1></div></Link>
      </div>
    <div className="max-w-7xl gap-2  mx-auto  grid grid-cols-4 ">
      <div><ProductById id={1} /></div>
      <div><ProductById id={2} /></div>
      <div><ProductById id={3} /></div>
      <div><ProductById id={4} /></div>
    </div>
   <div className="w-full ">
<VideoCarousel3D/>
   </div>
    </main>
  );
}
