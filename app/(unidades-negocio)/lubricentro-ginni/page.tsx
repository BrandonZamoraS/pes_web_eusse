import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/site";
import { montserrat, montserratBold } from "@/ui/fonts";
import ServiceContactForm from "@/ui/components/Companies/service_contact_form";
import ProductCarousel from "@/ui/components/Companies/product_carousel";

import heroLubri from "@/public/Heros/hero_lubri.webp";
import { FEATURED_SERVICES, SERVICE_GROUPS } from "./content.mjs";

const SCHEDULE = [
  { days: "Lunes a Viernes", hours: "7:00 a.m. - 6:00 p.m." },
  { days: "Sabado", hours: "7:00 a.m. - 4:00 p.m." },
  { days: "Domingo", hours: "Cerrado" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Lubricentro Ginni",
  description:
    "Agenda servicios de lubricacion, frenos, llantas y diagnostico en Lubricentro Ginni, en Naranjo de Alajuela.",
  path: "/lubricentro-ginni",
});

export default function LubricentroGinni() {
  return (
    <div className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={heroLubri}
          alt="Lubricentro Ginni - Cuidamos tu vehiculo"
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
            Lubricentro Ginni
          </p>
          <h1 className={`${montserratBold.className} text-[clamp(2rem,4vw,4rem)] leading-tight`}>
            Cuidamos tu vehiculo con precision y productos certificados.
          </h1>
          <p
            className={`${montserrat.className} max-w-3xl text-[clamp(1rem,1.75vw,1.25rem)] text-brand-50/85`}
          >
            Servicios rapidos, asesoria especializada y marcas premium para mantener tu
            vehiculo listo para cualquier ruta.
          </p>
          <a
            href="#contacto-ginni"
            className="rounded-md bg-brand-50 px-6 py-3 text-center text-sm font-semibold text-brand-900 transition hover:bg-brand-200"
          >
            Agenda tu servicio
          </a>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="bg-brand-50/60 py-16">
        <div className="mx-auto max-w-5xl rounded-md bg-white/90 p-8 text-center shadow-xl shadow-brand-900/10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Ubicacion
          </p>
          <h2 className="mt-2 text-3xl font-bold">Encuentranos en Naranjo de Alajuela</h2>
          <p className="mt-3 text-brand-700">
            75 m norte del Parque Central de Naranjo. Amplio estacionamiento y acceso
            inmediato desde la ruta 141.
          </p>
          <a
            href="tel:+50687628632"
            className="mt-6 mx-auto flex w-fit flex-col rounded-md bg-brand-50 px-6 py-3 shadow-sm shadow-brand-900/5 transition-colors hover:bg-brand-100"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
              Telefono
            </span>
            <span className="mt-1 font-semibold text-brand-900">+506 87628632</span>
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-linear-to-b from-brand-50 via-white to-brand-100/40 py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
              Servicios
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-900 sm:text-4xl">
              Servicio integral para equipo liviano y pesado
            </h2>
            <p className="mt-3 text-brand-700">
              Reunimos lubricacion, llantas, frenos, diagnostico y repuestos en una
              seccion mas clara, moderna y facil de recorrer.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {["Equipo liviano", "Equipo pesado", "Diagnostico", "Repuestos"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-sm shadow-brand-900/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {FEATURED_SERVICES.map(({ title, label, description, imageSrc }, index) => (
              <article
                key={title}
                className={`group relative isolate overflow-hidden rounded-3xl bg-brand-900 text-brand-50 shadow-xl shadow-brand-900/15 ${
                  index === 0 ? "md:col-span-2 xl:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-80 min-h-80 md:h-full" : "h-72"}`}>
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1280px) 100vw, 50vw"
                        : "(max-width: 1280px) 50vw, 25vw"
                    }
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-950 via-brand-900/45 to-brand-600/10" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                  <span className="w-fit rounded-full border border-brand-50/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-100">
                    {label}
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
                  <p className="max-w-md text-sm leading-6 text-brand-50/82">{description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-2xl shadow-brand-900/8 backdrop-blur sm:p-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {SERVICE_GROUPS.map(({ title, items }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-brand-100/70 bg-brand-50/70 p-5 shadow-sm shadow-brand-900/5"
                >
                  <h4 className="text-lg font-semibold text-brand-900">{title}</h4>
                  <ul className="mt-4 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-800">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-brand-200/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
              Productos destacados
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-900">Marcas con garantia</h2>
            <p className="mt-2 text-brand-700">
              Aceites, filtros y baterias con respaldo de fabrica para cualquier tipo de
              vehiculo.
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Horarios */}
      <section className="bg-brand-50/70 py-16">
        <div className="mx-auto max-w-5xl rounded-md bg-white/90 p-8 shadow-xl shadow-brand-900/10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Horario
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-900">Siempre a tiempo</h2>
          <ul className="mt-6 space-y-4">
            {SCHEDULE.map(({ days, hours }) => (
              <li
                key={days}
                className="flex flex-col rounded-md bg-brand-50 px-4 py-3 shadow-sm shadow-brand-900/5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-semibold text-brand-900">{days}</span>
                <span className="text-brand-700">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto-ginni"
        className="bg-linear-to-br from-brand-900 via-brand-800 to-brand-600 py-20 text-brand-50"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-2xl bg-white/5 p-8 shadow-2xl shadow-brand-900/30 sm:p-12">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
              Agenda tu servicio
            </p>
            <h2 className="mt-2 text-3xl font-bold">Comparti tus datos y te contactamos</h2>
            <p className="mt-2 text-brand-100/80">
              Dejanos tu numero telefonico, correo, tu nombre y el servicio que necesitas
              para asignarte un asesor.
            </p>
          </div>
          <ServiceContactForm
            variant="dark"
            apiPath="/api/lubricentro-contact"
            submitLabel="Enviar solicitud"
            successMessage="Gracias. Un asesor se pondra en contacto muy pronto."
          />
        </div>
      </section>
    </div>
  );
}
