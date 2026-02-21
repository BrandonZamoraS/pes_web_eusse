import Image from "next/image";
import { montserrat, montserratBold } from "@/ui/fonts";
import PromoCarousel from "@/ui/components/Companies/promo_carousel";
import MapComponent from "@/ui/components/Companies/map_component";

const CTA_LINKS = [
  {
    href: "#promociones",
    label: "Ver promociones",
    className: "bg-brand-50 text-brand-900 hover:bg-brand-200",
  },
  {
    href: "#ubicaciones",
    label: "Ubicaciones",
    className: "border border-brand-50/40 text-brand-50 hover:bg-brand-50/10",
  },
] as const;

export default function EusseMarketPage() {
  return (
    <div className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/dron_naranjo.jpg"
          alt="Eusse Market - Conveniencia en tus estaciones"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-900/70 via-brand-800/60 to-brand-600/50" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center text-brand-50 md:items-start md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
            Eusse Market
          </p>
          <h1
            className={`${montserratBold.className} text-[clamp(2rem,4vw,4rem)] leading-tight`}
          >
            El marketplace de conveniencia dentro de tus estaciones Eusse.
          </h1>
          <p
            className={`${montserrat.className} max-w-3xl text-[clamp(1rem,1.75vw,1.25rem)] text-brand-50/85`}
          >
            Productos frescos, combos corporativos y recargas para el camino. Todo en un solo lugar y
            con la atención que nos caracteriza.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
            {CTA_LINKS.map(({ href, label, className }) => (
              <a
                key={href}
                href={href}
                className={`w-full rounded-md px-6 py-3 text-center text-sm font-semibold transition sm:w-auto ${className}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section id="promociones" className="bg-brand-200/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
              Promociones
            </p>
            <h2 className="mt-2 text-3xl font-bold">Combos y ofertas en rotación</h2>
          </div>
          <PromoCarousel />
        </div>
      </section>

      {/* Ubicaciones + Horario */}
      <section id="ubicaciones" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
              Ubicaciones
            </p>
            <h2 className="mt-2 text-3xl font-bold">Visitá nuestras tiendas Eusse Market</h2>
            <p className="mt-2 text-brand-700">
              Operamos dentro de las principales estaciones Eusse para que encontrés snacks, bebidas
              y productos de conveniencia sin desviar tu ruta.
            </p>
          </div>
          <MapComponent
            copy={{
              eyebrow: "Tiendas minimarket",
              title: "Ubicá tu minimarket Eusse",
              description:
                "Elegí la estación Eusse para conocer el horario de la tienda Market disponible en cada ubicación.",
              quickSelectLabel: "Seleccioná una tienda",
              activeHint: "Tienda activa · revisá su horario debajo",
              generalHint: "Explorá todas las tiendas disponibles en el mapa",
            }}
          />
        </div>
      </section>
    </div>
  );
}
