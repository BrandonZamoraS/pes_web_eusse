"use client";

import { Gift, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PromotionsSection() {
  return (
    <section
      id="promotions"
      className="bg-brand-100/40 py-16 magnify-disable-reveal"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative py-12 bg-white overflow-hidden rounded-2xl">

          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 px-4"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#1CA9C9]/10 to-[#003366]/10 px-6 py-2 rounded-full mb-4">
              <Gift className="w-5 h-5 text-[#1CA9C9]" aria-hidden="true" />
              <span className="text-[#003366] font-semibold">
                Promoción Exclusiva
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
              Comprá y ganá con Eusse
            </h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0.7 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-24 h-1 bg-linear-to-r from-[#003366] to-[#1CA9C9] mx-auto rounded-full origin-left"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-r from-[#1CA9C9] to-[#003366] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src="/promocion-eusse.webp"
                  alt="Promoción Eusse – gana un SWM G01F 2025"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#003366]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#1CA9C9]" aria-hidden="true" />
                  <span className="text-white font-bold text-xl">
                    SWM G01F 2025
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Detalles */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-linear-to-br from-[#F9FAFB] to-white rounded-2xl p-8 shadow-lg border border-[#1CA9C9]/20"
            >
              <h3 className="text-3xl font-bold text-[#003366] mb-6">
                ¡Tu oportunidad de ganar un vehículo nuevo!
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Por cada compra igual o superior a{" "}
                <span className="font-bold text-[#1CA9C9]">₡5,000</span>,
                participás por un{" "}
                <span className="font-bold text-[#003366]">SWM G01F 2025</span>
              </p>

              <ul className="space-y-4 mb-8" aria-label="Beneficios de la promoción">
                {[
                  "Vehículo SWM G01F 2025",
                  "Participación por cada compra igual o superior a ₡5,000",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1CA9C9]/20 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-[#1CA9C9]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.eussepremia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-linear-to-r from-[#1CA9C9] to-[#003366] hover:from-[#1CA9C9]/90 hover:to-[#003366]/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-4"
              >
                Participá acá
              </a>

              <a
                href="https://www.eussepremia.com/Terminos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#003366] hover:text-[#1CA9C9] hover:translate-x-0.5 transition-all duration-200 mx-auto w-max"
              >
                <span className="text-sm underline">
                  Términos y condiciones
                </span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
