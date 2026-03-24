"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const PRODUCTS = [
  { imageSrc: "/aceites/aceite1.webp", imageAlt: "Aceite lubricante 1" },
  { imageSrc: "/aceites/aceite2.webp", imageAlt: "Aceite lubricante 2" },
  { imageSrc: "/aceites/aceite3.webp", imageAlt: "Aceite lubricante 3" },
  { imageSrc: "/aceites/aceite4.webp", imageAlt: "Aceite lubricante 4" },
  { imageSrc: "/aceites/aceite5.webp", imageAlt: "Aceite lubricante 5" },
  { imageSrc: "/aceites/aceite6.webp", imageAlt: "Aceite lubricante 6" },
  { imageSrc: "/aceites/aceite7.webp", imageAlt: "Aceite lubricante 7" },
] as const;

const COUNT = PRODUCTS.length;
const wrap = (n: number) => ((n % COUNT) + COUNT) % COUNT;

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((previous) => wrap(previous + 1)), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <button
        type="button"
        aria-label="Producto anterior"
        onClick={() => setCurrent((previous) => wrap(previous - 1))}
        className="rounded-full bg-white/80 p-3 text-brand-700 shadow-md transition hover:bg-white"
      >
        <HiChevronLeft size={24} />
      </button>

      <div className="flex flex-1 items-center justify-center gap-4 overflow-hidden">
        {([-2, -1, 0, 1, 2] as const).map((offset) => {
          const product = PRODUCTS[wrap(current + offset)];
          const isActive = offset === 0;

          return (
            <div
              key={offset}
              className={`flex w-36 shrink-0 items-center justify-center rounded-2xl bg-white/90 p-4 shadow-lg shadow-brand-900/10 transition-all sm:w-44 ${
                isActive ? "scale-105 opacity-100" : "scale-90 opacity-60"
              }`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-50">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain p-3"
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Producto siguiente"
        onClick={() => setCurrent((previous) => wrap(previous + 1))}
        className="rounded-full bg-white/80 p-3 text-brand-700 shadow-md transition hover:bg-white"
      >
        <HiChevronRight size={24} />
      </button>
    </div>
  );
}
