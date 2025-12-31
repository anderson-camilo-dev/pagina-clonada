"use client";

export default function Categories() {
  const categories = [
    "+ 0.3 inch (15)",
    "+ 0.3 inch (15)",
    "+ 7 inch (11)",
    "+ 7.8 inch (1)",
    "+ Accessories (14)",
    "+ All products (57)",
    "+ AVADA - Best Sellers (65)",
    "+ B/W E-ink Tablets (15)",
    "+ Black Friday Deals (16)",
    "+ Case (6) (16)",
    "+ Color E-ink tablets (25)",
    "+ Monitor (5)",
    "+ Photo Frame (1)",
    "+ Replacement Nibs (1)",
    "+ Shop (10)",
    "+ Smartphone (11)",
    "+ Stylus (2)",
    "+ Tablets (19)",
  ];

  return (
    <div className="pl-5">
      <h1 className="text-black/80 font-bold  text-xl mb-2">Categoria de produtos</h1>
      <div className="h-52 overflow-y-auto font-mono scroll-smooth p-2">
        {categories.map((cat, index) => (
          <p
            key={index}
            className="text-black/80 hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            {cat}
          </p>
        ))}
      </div>
    </div>
  );
}
