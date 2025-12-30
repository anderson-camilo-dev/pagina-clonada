

import ImageCarousel from "@/components/carousel/imageCarousel";
import ShopPage from "@/components/ShopPage";


export default function Shop() {
  return (
    <main className="bg-white pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div>
        <ImageCarousel />
      </div>
      <div>
        <ShopPage />
      </div>
    </main>
  );
}
