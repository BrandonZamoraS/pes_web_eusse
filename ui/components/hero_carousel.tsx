'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { satisfy, montserratBold } from '@/ui/fonts';

const slides = [
  {
    image: '/Heros/main_naranjo.jpg',
    subtitle: 'Energía y confianza para cada kilómetro',
  },
  {
    image: '/Heros/main_barranca.jpg',
    subtitle: 'Innovación que impulsa tu camino',
  },
  {
    image: '/Heros/main_guapiles.jpg',
    subtitle: 'Moviendo a Costa Rica con pasión',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[50vh]  md:h-[90vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          {/* Fondo */}
          <div className="absolute inset-0">
            <Image
              src={s.image}
              alt={s.subtitle}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/70 to-brand-700/0" />
          </div>

          {/* Contenido */}
          <div className="relative flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${montserratBold.className} mb-6 text-3xl font-bold leading-tight text-brand-50 md:text-6xl`}
                >
                  &ldquo;Somos el combustible de{" "}
                  <span
                    className={`${satisfy.className} text-4xl text-brand-50 md:text-7xl`}
                  >
                    tu vida.&rdquo;
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8 text-xl text-brand-50/90 md:text-2xl"
                >
                  {s.subtitle}
                </motion.p>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-[width,background-color] duration-300 ${
              i === current ? 'w-8 bg-brand-50' : 'w-3 bg-brand-50/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
