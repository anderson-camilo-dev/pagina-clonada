import Image from "next/image";
import { Alfhabet } from "@/components/homepage/Alfhabet";
import { Products } from "@/components/productsCards/Products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white/96">
      <main className=" flex flex-col">
        <Alfhabet />
        <div className="relative size-32 ">
          <div className="absolute inset-y-0 right-0 w-16 flex fustify-intems-end">
            <Products />
          </div>
        </div>
      </main>
    </div>
  );
}


