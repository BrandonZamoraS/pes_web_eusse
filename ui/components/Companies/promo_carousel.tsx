'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const PROMOTIONS = [
  {
    title: "Canasta saludable",
    description: "Frutas frescas y snacks funcionales con 15% de descuento.",
    imageSrc: "/alimento-1.jpg",
    imageAlt: "Selección de frutas frescas en canasta promocional",
  },
  {
    title: "Combos para la oficina",
    description: "Café premium + repostería artesanal para reuniones.",
    imageSrc: "/alimento-2.jpg",
    imageAlt: "Combo de café y repostería listo para oficina",
  },
  {
    title: "Recarga deportiva",
    description: "Energizantes y barras proteicas 2x1 cada jueves.",
    imageSrc: "/alimento-3.jpg",
    imageAlt: "Bebidas energizantes y barras proteicas en exhibición",
  },
] as const;

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % PROMOTIONS.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Promoción anterior"
          onClick={() =>
            setCurrent((prev) => (prev - 1 + PROMOTIONS.length) % PROMOTIONS.length)
          }
          className="rounded-full bg-white p-3 text-brand-700 shadow-md transition hover:bg-brand-50"
        >
          <HiChevronLeft size={22} />
        </button>
        <div className="flex w-full max-w-2xl items-center justify-center gap-4 overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            const index =
              (current + offset + PROMOTIONS.length) % PROMOTIONS.length;
            const item = PROMOTIONS[index];
            const isActive = offset === 0;
            return (
              <div
                key={`${item.title}-${offset}`}
                className={`w-64 shrink-0 rounded-2xl bg-white px-5 py-6 text-center shadow-lg transition-all ${
                  isActive ? "scale-105 opacity-100" : "scale-95 opacity-60"
                }`}
              >
                <div className="relative mb-4 h-32 w-full overflow-hidden rounded-xl bg-brand-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 256px, 288px"
                    className="object-cover"
                    priority={isActive}
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-900">{item.title}</h3>
                {isActive && (
                  <p className="mt-2 text-sm text-brand-700">{item.description}</p>
                )}
              </div>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Promoción siguiente"
          onClick={() => setCurrent((prev) => (prev + 1) % PROMOTIONS.length)}
          className="rounded-full bg-white p-3 text-brand-700 shadow-md transition hover:bg-brand-50"
        >
          <HiChevronRight size={22} />
        </button>
      </div>

    </div>
  );
}
