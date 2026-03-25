import type { Metadata } from "next";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/site";
import { montserrat, montserratBold } from "@/ui/fonts";
import GymClassCard from "@/ui/components/Companies/gym_class_card";
import GymMembershipCard from "@/ui/components/Companies/gym_membership_card";

import heroGym from "@/public/Heros/hero_gym.webp";

const MEMBERSHIPS = [
  {
    name: "Mensualidad Individual",
    duration: "1 persona",
    price: "₡25.000",
    savings: "por persona / mes",
    note: "Acceso completo a todas las instalaciones y clases grupales.",
  },
  {
    name: "Plan Pareja",
    duration: "2 personas",
    price: "₡23.500",
    savings: "por persona / mes",
    note: "Entrena en compañía con un precio más conveniente.",
  },
  {
    name: "Plan Trío",
    duration: "3 personas",
    price: "₡22.500",
    savings: "por persona / mes",
    note: "Mayor motivación grupal con mejor tarifa.",
  },
  {
    name: "Plan Grupal",
    duration: "4 personas",
    price: "₡20.000",
    savings: "por persona / mes",
    note: "La opción más conveniente para familias o grupos.",
  },
] as const;

const CLASS_TYPES = [
  {
    title: "Funcional HIIT",
    type: "Funcional",
    description: "Entrenamientos de alta intensidad que combinan fuerza y cardio para maximizar resultados en poco tiempo.",
    schedule: {
      Lunes: "8:30 a.m. / 5:30 p.m.",
      Martes: "5:30 p.m.",
      Miércoles: "8:30 a.m. / 5:30 p.m.",
      Jueves: "5:30 p.m.",
      Viernes: "8:30 a.m. / 5:30 p.m.",
      Sábado: "8:30 a.m.",
      Domingo: "—",
    },
  },
  {
    title: "Cardio Dance",
    type: "Cardio Dance",
    description: "Rutinas de baile energéticas que queman calorías mientras disfrutás de la música y el movimiento.",
    schedule: {
      Lunes: "—",
      Martes: "7:00 p.m.",
      Miércoles: "—",
      Jueves: "7:00 p.m.",
      Viernes: "—",
      Sábado: "9:30 a.m.",
      Domingo: "—",
    },
  },
  {
    title: "Spinning",
    type: "Spinning",
    description: "Clases de ciclismo indoor con música motivadora para mejorar resistencia cardiovascular.",
    schedule: {
      Lunes: "7:00 p.m.",
      Martes: "—",
      Miércoles: "7:00 p.m.",
      Jueves: "—",
      Viernes: "—",
      Sábado: "—",
      Domingo: "—",
    },
  },
] as const;

const TRAINERS = [
  {
    name: "Camila Vargas",
    specialty: "Entrenamiento funcional y movilidad",
    experience: "8 años guiando procesos de transformación física.",
  },
  {
    name: "Andrés Salazar",
    specialty: "Fuerza, CrossFit y acondicionamiento competitivo",
    experience: "Coach certificado L2, ex atleta nacional.",
  },
  {
    name: "Mariana Carvajal",
    specialty: "Yoga terapéutico y mindfulness",
    experience: "Creadora de programas de bienestar corporativo.",
  },
  {
    name: "Luis Porras",
    specialty: "Cycling indoor y HIIT",
    experience: "Apasionado de la música y la medición de resultados.",
  },
] as const;

const MEMBERSHIP_INCLUDES = [
  "Medición InBody",
  "Medición de circunferencias",
  "Rutina mensual enfocada en tu objetivo",
  "Asesoramiento de instructores durante tu estancia",
  "Uso ilimitado de las instalaciones",
  "Revisión con fisioterapeuta (si se requiere)",
  "Clases grupales: Funcional, cardio dance y spinning",
] as const;

const GALLERY_IMAGES = [
  {
    src: "/gym/gym1.webp",
    alt: "Area de maquinas y entrenamiento en Balance Fit",
    caption: "Sala principal con maquinas de fuerza y espacio amplio para entrenar",
  },
  {
    src: "/gym/gym2.webp",
    alt: "Recepcion y exhibicion de suplementos en Balance Fit",
    caption: "Recepcion del gimnasio con exhibicion de suplementos y productos",
  },
  {
    src: "/gym/gym3.webp",
    alt: "Sala de spinning con bicicletas frente a ventanales",
    caption: "Espacio de cycling indoor con bicicletas y vista exterior",
  },
] as const;

const FACILITY_HOURS = [
  { day: "Lunes a Viernes", hours: "5:00 a.m. – 9:00 p.m." },
  { day: "Sábado", hours: "8:00 a.m. – 4:00 p.m." },
  { day: "Domingo", hours: "8:00 a.m. – 12:00 m.d." },
] as const;

const HERO_ACTIONS = [
  {
    label: "Escribinos por WhatsApp",
    href: "https://wa.me/50662976696?text=Hola%2C%20me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20el%20Gimnasio%20Balance%20Fit",
    external: true,
    className: "bg-brand-50 text-brand-900 hover:bg-brand-200",
  },
  {
    label: "Cómo llegar",
    href: "https://waze.com/ul?ll=10.077661627131503,-84.41365297404626&navigate=yes",
    external: true,
    className: "border border-brand-50/40 text-brand-50 hover:bg-brand-50/10",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Gimnasio Balance Fit",
  description:
    "Conoce clases, horarios y membresias de Balance Fit para entrenar con acompanamiento experto en Naranjo.",
  path: "/gimnasio-balance-fit",
});

export default function GimnasioBalanceFitPage() {
  return (
    <div className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={heroGym}
          alt="Gimnasio Balance Fit - Entrena con propósito"
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
            Gimnasio Balance Fit
          </p>
          <h1
            className={`${montserratBold.className} text-[clamp(2rem,4vw,4rem)] leading-tight`}
          >
            Entrena con propósito, recupera con ciencia, vive con energía.
          </h1>
          <p
            className={`${montserrat.className} max-w-3xl text-[clamp(1rem,1.75vw,1.25rem)] text-brand-50/85`}
          >
            Creamos experiencias integrales que combinan entrenamiento inteligente,
            acompañamiento experto y bienestar real para personas que desean ir
            más allá del ejercicio tradicional.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
            {HERO_ACTIONS.map(({ label, href, external, className }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`w-full rounded-md px-6 py-3 text-center text-sm font-semibold transition sm:w-auto ${className}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Membresías */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Membresías
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-900">
            Planes para cada grupo
          </h2>
          <p className="mt-2 text-brand-700">
            Todos los planes incluyen acceso a asesoría inicial y seguimiento con nuestros instructores.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {MEMBERSHIPS.map((m) => (
            <GymMembershipCard key={m.name} {...m} />
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-brand-600">
          * Matrícula única de <span className="font-semibold text-brand-900">₡8.000</span> al inscribirse en cualquier plan.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-white/90 p-6 shadow-lg shadow-brand-900/10">
            <h3 className="text-lg font-bold text-brand-900">Las membresías incluyen</h3>
            <p className="mt-1 text-sm text-brand-700">
              Todos los planes incluyen estos beneficios sin costo adicional.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-800">
              {MEMBERSHIP_INCLUDES.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 rounded-md bg-brand-50 px-4 py-2 shadow-sm shadow-brand-900/5"
                >
                  <span className="mt-px shrink-0 text-brand-600">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-brand-900/90 p-6 text-brand-50 shadow-lg shadow-brand-900/10">
            <h3 className="text-lg font-bold">Horarios de operación</h3>
            <p className="mt-1 text-sm text-brand-50/80">
              Elige cualquiera de nuestros planes y entrena dentro de estos horarios.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {FACILITY_HOURS.map((slot) => (
                <li
                  key={slot.day}
                  className="rounded-md bg-brand-800/70 px-4 py-3 shadow-sm shadow-brand-950/20"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                    {slot.day}
                  </p>
                  <p className="text-base font-semibold text-white">{slot.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clases y eventos */}
      <section className="bg-brand-50/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
              Clases y eventos
            </p>
            <h2 className="mt-2 text-3xl font-bold">Programas para cada estilo</h2>
            <p className="mt-2 max-w-2xl text-brand-700">
              Agenda flexible con horarios definidos para que organices tu rutina con facilidad.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CLASS_TYPES.map((c) => (
              <GymClassCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Entrenadores 
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Entrenadores
          </p>
          <h2 className="mt-2 text-3xl font-bold">Mentores que te acompañan</h2>
          <p className="mt-2 text-brand-700">
            Profesionales certificados que personalizan cada sesión según tus objetivos.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((coach) => (
            <div
              key={coach.name}
              className="rounded-md bg-white/90 p-5 text-center shadow-lg shadow-brand-900/10"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-md bg-brand-200 text-xl font-bold text-brand-800">
                {coach.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-900">{coach.name}</h3>
              <p className="text-sm font-semibold text-brand-700">{coach.specialty}</p>
              <p className="mt-2 text-sm text-brand-700/80">{coach.experience}</p>
            </div>
          ))}
        </div>
      </section>
        */}
      {/* Galería */}
      <section className="bg-brand-200/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
              Galería
            </p>
            <h2 className="mt-2 text-3xl font-bold">Un vistazo a nuestras instalaciones</h2>
            <p className="mt-2 text-brand-700">
              Sala de entrenamiento, recepción y espacio de cycling en imágenes reales del gimnasio.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {GALLERY_IMAGES.map((image) => (
              <figure
                key={image.src}
                className="rounded-xl bg-white/90 p-4 shadow-lg shadow-brand-900/10"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-semibold text-brand-800">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
