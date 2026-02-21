import Image from "next/image";
import heroHorus from "@/public/Heros/hero_horus.jpg";

const GALLERY = [
  {
    src: "/gym/gym1.jpg",
    caption: "Cancha techada con césped sintético de última generación.",
  },
  {
    src: "/gym/gym2.jpg",
    caption: "Zona de hidratación y descanso para equipos completos.",
  },
  {
    src: "/gym/gym3.jpg",
    caption: "Iluminación LED para partidos nocturnos sin sombras.",
  },
] as const;


export default function CentroDeportivoHorusPage() {
  return (
    <div className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-brand-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-brand-900/95 via-brand-800/80 to-brand-700/70" />
          <Image
            src={heroHorus}
            alt="Centro Deportivo Horus"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 md:items-start md:py-28 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
            Centro Deportivo Horus
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Vive el fútbol 5 con canchas profesionales y servicios premium.
          </h1>
          <p className="max-w-2xl text-lg text-brand-50/85">
            Entrena, compite y celebra con tu equipo en instalaciones diseñadas para
            mantener el ritmo del partido en todo momento.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <a
              href="https://wa.me/50688889090?text=Hola%20quiero%20reservar%20una%20cancha%20en%20Centro%20Deportivo%20Horus"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-md bg-brand-50 px-6 py-3 text-center text-sm font-semibold text-brand-900 transition hover:bg-brand-200 sm:w-auto"
            >
              Reservar cancha
            </a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Instalaciones
          </p>
          <h2 className="mt-2 text-3xl font-bold">Un recorrido por Horus</h2>
          <p className="mt-2 text-brand-700">
            Espacios diseñados para que cada partido se sienta profesional.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {GALLERY.map((item) => (
            <div
              key={item.caption}
              className="rounded-md bg-white/90 p-3 shadow-lg shadow-brand-900/10"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-brand-800">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto-horus" className="bg-brand-50/60 py-16">
        <div className="mx-auto max-w-4xl rounded-md bg-white/90 px-6 py-10 text-center shadow-xl shadow-brand-900/10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">
            Aparta tu espacio
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-900">
            Agenda tu partido hoy mismo
          </h2>
          <p className="mt-3 text-brand-700">
            Canchas de fútbol 5 listas para torneos, entrenamientos y encuentros corporativos.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <address className="not-italic rounded-md bg-brand-50 px-4 py-3 text-brand-900 shadow-sm shadow-brand-900/5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                WhatsApp &amp; Teléfono
              </p>
              <a
                href="tel:+50688889090"
                className="mt-1 block text-lg font-bold hover:underline"
              >
                +506 8888-9090
              </a>
            </address>
            <a
              href="https://wa.me/50688889090?text=Hola%20quiero%20reservar%20una%20cancha%20en%20Centro%20Deportivo%20Horus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-md bg-brand-900 px-4 py-3 text-sm font-semibold text-brand-50 shadow-sm shadow-brand-900/15 transition hover:bg-brand-800"
            >
              Reservar por WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
