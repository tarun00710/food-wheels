"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "../../assets/burger.jpg";
import curryImg from "../../assets/curry.jpg";
import dumplingsImg from "../../assets/dumplings.jpg";
import macncheeseImg from "../../assets/macncheese.jpg";
import pizzaImg from "../../assets/pizza.jpg";
import schnitzelImg from "../../assets/schnitzel.jpg";
import tomatoSaladImg from "../../assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[600px] h-[300px] rounded-lg overflow-hidden shadow-md  pt-3">
      {images?.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          fill
          className={`absolute top-0 left-0 object-cover transition-all duration-500 ease-in-out ${
            index === currentImageIndex
              ? "z-10 opacity-100 scale-100 translate-x-0 rotate-0"
              : "z-0 opacity-0 scale-110 -translate-x-4 rotate-[-5deg]"
          }`}
        />
      ))}
    </div>
  );
}
