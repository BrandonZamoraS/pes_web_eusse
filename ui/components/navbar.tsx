"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BurgerBtn from "./burguer_btn";
import { useMagnify } from './Magnify_comps/magnify-provider';

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "¿Quiénes somos?" },
  { href: "/empleo", label: "Eusse Empleo" },
  { href: "/#companias-del-grupo", label: "Compañías del Grupo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [companiesInView, setCompaniesInView] = useState(false);
  const { isMagnifyEnabled, toggleMagnify } = useMagnify();
  /*
    Esta función tiene el fin de remarcar en el navbar el enlace de "Compañías del Grupo" 
    cuando el usuario esté viendo esa sección en la página de inicio. Si el usuario no está 
    en la página de inicio, o si la sección no está visible, el enlace se mostrará como inactivo.
    */
  useEffect(() => {
    if (pathname !== "/") {
      setCompaniesInView(false);
      return;
    }

    const el = document.getElementById("companias-del-grupo");
    if (!el) {
      setCompaniesInView(false);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        setCompaniesInView(entries.some((e) => e.isIntersecting));
      },
      { threshold: 0.35 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    const [base, frag] = href.split("#");
    const baseHref = base || "/";
    const hrefHash = frag ? `#${frag}` : "";

    if (baseHref === "/" && hrefHash === "#companias-del-grupo")
      return pathname === "/" && companiesInView;

    if (baseHref === "/") return pathname === "/" && !companiesInView;

    return pathname.startsWith(baseHref);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-50/80 backdrop-blur">
      <nav className="relative mx-auto min-h-14 lg:min-h-[7vh] px-4 py-1 flex items-center lg:mx-[5vw]">
        <Link
          href="/"
          className="h-full shrink-0 sm:shrink basis-200px sm:basis-240px md:basis-200px"
        >
          <img
            src="/logo-eusse-completo.png"
            alt="Eusse"
            className="h-full max-h-14 w-auto object-contain transition-[height] duration-200 hidden sm:block"
          />
          <img
            src="/logo-eusse-reducido.png"
            alt="Eusse"
            className="h-full max-h-14 w-auto object-contain transition-[height] duration-200 block sm:hidden"
          />
        </Link>

        <div className="flex-1" />

        <ul className="hidden sm:flex items-center gap-x-[clamp(0.5rem,2.2vw,1.25rem)] whitespace-nowrap">
          {LINKS.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link
                href={l.href}
                prefetch={true}
                className={`transition-colors duration-200 text-[clamp(1rem,1.5vw,1.3rem)]   ${
                  isActive(l.href)
                    ? "text-accent font-semibold border-b-2 border-accent pb-1"
                    : "text-brand-900 hover:text-accent/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleMagnify}
          aria-pressed={isMagnifyEnabled}
          aria-label={isMagnifyEnabled ? "Desactivar lupa" : "Activar lupa"}
          className={`hidden md:inline-flex ml-3 h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
            isMagnifyEnabled
              ? "border-accent bg-accent/20 text-brand-900"
              : "border-brand-900/20 text-brand-900 hover:border-accent/60 hover:text-accent"
          }`}
        >
          <img src="/svg/icono_lupa.svg" alt="" className="h-5 w-5" />
        </button>
        <div className="md:hidden ml-2 shrink-0">
          <BurgerBtn links={LINKS} />
        </div>
      </nav>
    </header>
  );
}
