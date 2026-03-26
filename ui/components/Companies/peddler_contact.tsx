"use client";

import ServiceContactForm from "@/ui/components/Companies/service_contact_form";

const CONTACT_INFO = [
  { label: "Línea directa", value: "+506 7295 5709", href: "tel:+50672955709" },
  { label: "Correo",        value: "info1@grupoeusse.com", href: "mailto:info1@grupoeusse.com" },
] as const;

export default function PeddlerContact() {
  return (
    <section id="contacto-peddler" className="bg-brand-200/30 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-2xl shadow-brand-900/10 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-600">Contacto</p>
            <h2 className="mt-2 text-3xl font-bold text-brand-900">Coordinemos tu plan</h2>
            <p className="mt-2 text-brand-700">
              Completá tu teléfono, correo, nombre y requerimiento. Te respondemos en menos de 24
              horas y podemos coordinar visitas técnicas para validar puntos de descarga.
            </p>
            <address className="not-italic mt-6 flex flex-col gap-4">
              {CONTACT_INFO.map(({ label, value, href }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-md bg-brand-50 px-4 py-3 text-center text-brand-900 shadow-sm shadow-brand-900/5 hover:bg-brand-100 transition-colors"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">{label}</p>
                  <p className="mt-1 text-2xl font-bold">{value}</p>
                </a>
              ))}
            </address>
          </div>

          <ServiceContactForm
            variant="light"
            apiPath="/api/peddler-contact"
            submitLabel="Solicitar contacto"
            successMessage="Gracias. Nuestro equipo Peddler te contactará muy pronto."
          />

        </div>
      </div>
    </section>
  );
}
