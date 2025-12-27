"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopPage from "../ShopPage";

const images = [
  {
    src: "https://euroshop.bigme.vip/cdn/shop/files/1880-720_2_5.jpg?v=1721188077",
    alt: "Imagem 1",
  },
  {
    src: "https://euroshop.bigme.vip/cdn/shop/files/Hibreak_pro_color-PC.jpg?v=1763025863",
    alt: "Imagem 2",
  },
  {
    src: "https://euroshop.bigme.vip/cdn/shop/files/cfe4deebc5c245fc3563bcfddf78f8e.jpg?v=1721188849",
    alt: "Imagem 3",
  },
];

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  );
}

export default function ImageCarousel() {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="h-[500px] md:h-[700px]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      
    </div>
    
  );
}
