import type { Metadata } from "next";
import Image from "next/image";
import VideoSection from "@/ui/components/video_section";
import CareersSection from "@/ui/components/career_section";
import { WhyChooseUs } from "@/ui/components/Jobs/why_chose_us";
import EmployeeTestimonials from "@/ui/components/Jobs/employee_testimonials";
import { montserratBold, montserrat } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Empleo | Grupo Eusse",
  description:
    "Sumate al equipo de Grupo Eusse. Conocé nuestras oportunidades laborales, cultura de trabajo y beneficios.",
};

export default function EmpleoPage() {
  return (
    <main className="bg-brand-50 text-brand-900">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/Heros/eusse_empleo.webp"
          alt="Personas trabajando en Eusse"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-900/70 via-brand-800/60 to-brand-600/50" />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center text-brand-50 md:items-start md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
            Empleo Eusse
          </p>
          <h1
            className={`${montserratBold.className} text-[clamp(2rem,4vw,4rem)] leading-tight`}
          >
            Trabajá con un equipo que impulsa el futuro energético del país
          </h1>
          <p
            className={`${montserrat.className} max-w-3xl text-[clamp(1rem,1.75vw,1.25rem)] text-brand-50/85`}
          >
            Creemos en el crecimiento compartido, la capacitación continua y el
            bienestar de las personas que hacen posible cada proyecto.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-white/90 p-6 shadow-xl shadow-brand-900/10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-700">
            Vida en Eusse
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Historias de nuestro equipo
          </h2>
          <div className="mt-8">
            <VideoSection
              videoId="8y6n12TkNYU"
              posterSrc="/Video_Covers/video_cover3.webp"
              className="mx-auto w-full max-w-4xl"
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CareersSection />
      <EmployeeTestimonials />
    </main>
  );
}
