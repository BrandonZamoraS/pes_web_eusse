"use client";

import CompanyCardGrid from "@/ui/components/company_card";
import { motion } from "framer-motion";

const COMPANIES = [
  {
    logo: "/logo-eusse-reducido.png",
    title: "Combustible Eusse",
    href: "/combustible-eusse",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
  {
    logo: "/logos/logo-ginni-lubri.jpg",
    title: "Lubricentro Ginni",
    href: "/lubricentro-ginni",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
  {
    logo: "/logos/logo-eusse-market.jpg",
    title: "MiniMarket Eusse",
    href: "/eusse-market",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
  {
    logo: "/logos/logo-escudo-liberia.png",
    title: "Equipo Liberia F.C.",
    href: "https://admliberia.com/",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
  {
    logo: "/logos/logo-balancefit.jpg",
    title: "Gimnasio Balance Fit",
    href: "/gimnasio-balance-fit",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
  {
    logo: "/logos/logo-horus.jpg",
    title: "Centro Deportivo Horus",
    href: "/centro-deportivo-horus",
    phone: "+506 8888-8888",
    email: "grupo.eusse@geusse.com",
  },
];

export default function CompanySection() {
  return (
    <section
      id="companias-del-grupo"
      className="bg-brand-50 text-brand-900 mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center magnify-disable-reveal"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
          Compañías del grupo
        </p>
        <h2 className="mt-2 text-4xl font-extrabold">
          Soluciones de servicio Eusse
        </h2>
        <p className="mt-2 text-brand-700">
          Un portafolio que cubre estaciones, lubricentros, minimarkets y
          abastecimiento empresarial, deportivo y de bienestar.
        </p>
      </motion.div>

      <CompanyCardGrid companies={COMPANIES} />
    </section>
  );
}
