"use client";

import { Users, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";
import VideoSection from "@/ui/components/video_section";

const stats = [
  { icon: Users, value: "500+", label: "Colaboradores", delay: 0.1 },
  { icon: Award, value: "20+", label: "Años", delay: 0.2 },
  { icon: Heart, value: "100K+", label: "Clientes", delay: 0.3 },
];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="magnify-disable-reveal mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#F9FAFB] p-6 shadow-xl shadow-brand-900/10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            id="about-heading"
            className="mb-4 text-4xl font-bold text-[#003366] md:text-5xl"
          >
            Sobre Nosotros
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0.7 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto h-1 w-24 origin-left rounded-full bg-linear-to-r from-[#003366] to-[#1CA9C9]"
          />
        </motion.div>

        {/* Texto */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-bold text-[#003366]"
          >
            Impulsando Costa Rica desde hace más de dos décadas
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-lg leading-relaxed text-gray-700"
          >
            Grupo Eusse es una empresa costarricense orgullosa de su compromiso
            con la excelencia y la innovación. Desde nuestros inicios, hemos
            trabajado para brindar servicios de calidad en combustibles,
            automotriz y deportes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-lg leading-relaxed text-gray-700"
          >
            Nuestra misión es ser el motor que impulsa el progreso de cada
            familia, cada negocio, y cada sueño en Costa Rica. Con pasión,
            confianza y dedicación, seguimos construyendo un futuro más
            brillante para todos.
          </motion.p>

          {/* Stats 
          <div className="mb-12 grid grid-cols-3 justify-items-center">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: s.delay }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="w-30 md:w-50 rounded-md bg-white p-4 text-center shadow-sm hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-[#003366] to-[#1CA9C9]">
                  <s.icon className="h-8 w-8 text-white" aria-hidden />
                </div>
                <p className="text-2xl font-bold text-[#003366]">{s.value}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </motion.div>
            ))}
          </div>
          */}
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <VideoSection
            videoId="H6Bw3KxEaQY"
            posterSrc="/Video_Covers/video_cover1.webp"
            className="mx-auto mt-6 w-full max-w-4xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
