"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/logo-eusse-reducido.webp"
          alt="Grupo Eusse"
          width={80}
          height={40}
          className="object-contain block md:hidden"
        />
        <Image
          src="/logo-eusse-completo.webp"
          alt="Grupo Eusse"
          width={100}
          height={60}
          className="object-contain hidden md:block"
        />

        <div className="text-center text-[12px] md:text-sm leading-tight">
          <p className="font-semibold">SOMOS EL COMBUSTIBLE DE SU VIDA</p>
          <p className="text-gray-300">
            Copyright © 2026{" "}
            <span className="font-semibold">Grupo Empresarial Eusse™</span>
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <Link
            href="https://www.facebook.com/grupoeusse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.instagram.com/grupoeusse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}
