import AboutSection from "@/ui/components/about_us";
import CompanySection from "@/ui/components/company_section";
import HeroCarousel from "@/ui/components/hero_carousel";
import PromotionsSection from "@/ui/components/promotion_section";

export default function Home() {
  return (
    <main className="flex-1 bg-brand-50 text-brand-900">
        <HeroCarousel />
        <AboutSection />
        <PromotionsSection />
        <CompanySection />
    </main>
  );
}
