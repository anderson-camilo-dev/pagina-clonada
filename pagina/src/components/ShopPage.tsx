import Link from "next/link";


export default function ShopPage() {
  return (
    <main>
      

      {/* Seção de categorias */}
      <section className="max-w-7xl mx-auto mt-20 flex gap-10">
        
        {/* COLOR E-INK */}
        <Link href="/" className="flex-1">
          <div className="relative group">
            <h1 className="text-black/80 font-extrabold top-10 absolute text-2xl mb-4">
              COLOR E-INK TABLETS
            </h1>

            <img
              src="https://euroshop.bigme.vip/cdn/shop/files/009b2108078ae5ef402cd6888c5dd9a_600x_crop_center.jpg?v=1721187926"
              alt="Color E-Ink"
              className="w-full h-full object-cover rounded"
            />

            <button className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100  text-black/80 bg-white px-4 py-2 rounded-full shadow hover:bg-black hover:text-white">
              Compre agora
            </button>
          </div>
        </Link>

        {/* B/W E-INK */}
        <Link href="/" className="flex-1">
          <div className="relative group">
            <h1 className="text-black/80 font-extrabold top-10 absolute text-2xl mb-4">
              B/W E-INK TABLETS
            </h1>

            <img
              src="https://euroshop.bigme.vip/cdn/shop/files/1_600x_crop_center.jpg?v=1721188022"
              alt="B/W E-Ink"
              className="w-full h-full object-cover rounded"
            />

            <button className="absolute bottom-4 left-4 opacity-0  group-hover:opacity-100 transition text-black/80 bg-white px-4 py-2 rounded-full shadow hover:bg-black hover:text-white">
              Compre agora
            </button>
          </div>
        </Link>

      </section>
    </main>
  );
}
