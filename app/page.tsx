import type { Metadata } from "next";
import AboutSection from "@/ui/components/about_us";
import CareersSection from "@/ui/components/career_section";
import CompanySection from "@/ui/components/company_section";
import HeroCarousel from "@/ui/components/hero_carousel";
import PromotionsSection from "@/ui/components/promotion_section";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Inicio",
  description:
    "Explora las unidades de negocio de Grupo Eusse en combustibles, conveniencia, deporte, empleo y servicio automotriz.",
  path: "/",
});


export default function Home() {
  return (
    <main className="flex-1 bg-brand-50 text-brand-900">
        <HeroCarousel />
        <AboutSection />
        <PromotionsSection />
        <CompanySection />
        <CareersSection />
    </main>
  );
}
