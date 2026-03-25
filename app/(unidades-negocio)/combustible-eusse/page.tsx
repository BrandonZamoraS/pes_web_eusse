import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/site";
import { montserrat, montserratBold } from "@/ui/fonts";
import MapComponent from "@/ui/components/Companies/map_component";
import PeddlerExplainer from "@/ui/components/Companies/peddler_explainer";
import PeddlerOfferings from "@/ui/components/Companies/peddler_offerings";
import PeddlerContact from "@/ui/components/Companies/peddler_contact";

import dronNaranjo from "@/public/dron_naranjo.webp";

const HERO_CTAS = [
  { href: "#mapa-estaciones", label: "Explorar estaciones", style: "bg-brand-50 text-brand-900 hover:bg-brand-200" },
  { href: "#peddler",         label: "Ver Peddler",         style: "border border-brand-50/60 bg-transparent text-brand-50 hover:bg-brand-50/10" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Combustible Eusse",
  description:
    "Ubica estaciones de servicio Grupo Eusse y conoce su red de combustible, rutas y soluciones para viajeros y flotillas.",
  path: "/combustible-eusse",
});

export default function Home() {
  return (
    <div className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={dronNaranjo}
          alt="Combustible Eusse - Vista de una estación"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-900/70 via-brand-800/60 to-brand-600/50" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center text-brand-50 md:items-start md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
            Combustible Eusse
          </p>
          <h1 className={`${montserratBold.className} text-[clamp(2rem,4vw,4rem)] leading-tight`}>
            Energía para cada ruta, con servicio humano.
          </h1>
          <p className={`${montserrat.className} max-w-3xl text-[clamp(1rem,1.75vw,1.25rem)] text-brand-50/85`}>
            Nuestras estaciones cubren las rutas clave del país con combustible certificado,
            atención rápida y espacios pensados para flotillas, particulares y viajeros.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
            {HERO_CTAS.map(({ href, label, style }) => (
              <a
                key={href}
                href={href}
                className={`w-full rounded-md px-6 py-3 text-center text-sm font-semibold transition sm:w-auto ${style}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <MapComponent />

      {/* Peddler */}
      <section id="peddler">
        <PeddlerExplainer />
        <PeddlerOfferings />
        <PeddlerContact />
      </section>
    </div>
  );
}
