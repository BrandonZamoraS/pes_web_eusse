"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMagnify } from "@/ui/components/Magnify_comps/magnify-provider";

const PHONE_RE = /^(?:\+?506)?\d{8}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  phone: string;
  name: string;
  email: string;
  serviceDetail: string;
  phoneError: string | null;
  emailError: string | null;
  status: Status;
  message: string | null;
};

const EMPTY: FormState = {
  phone: "", name: "", email: "", serviceDetail: "",
  phoneError: null, emailError: null, status: "idle", message: null,
};

// Keeps duplicated Magnify panes in sync.
const store = new Map<string, FormState>();
const listeners = new Map<string, Set<() => void>>();

function storeSet(key: string, next: FormState) {
  store.set(key, next);
  listeners.get(key)?.forEach((fn) => fn());
}

function storeSubscribe(key: string, fn: () => void) {
  if (!listeners.has(key)) listeners.set(key, new Set());
  listeners.get(key)!.add(fn);
  return () => listeners.get(key)?.delete(fn);
}

export type Props = {
  className?: string;
  variant?: "light" | "dark";
  submitLabel?: string;
  successMessage?: string;
  apiPath?: string;
};

export default function ServiceContactForm({
  className = "",
  variant = "light",
  submitLabel = "Enviar solicitud",
  successMessage = "¡Gracias! Un asesor te contactará muy pronto.",
  apiPath = "/api/lubricentro-contact",
}: Props) {
  const pathname = usePathname();
  const { isMagnifyEnabled } = useMagnify();
  const key = useMemo(() => `${pathname}::${apiPath}`, [pathname, apiPath]);

  const [form, setFormRaw] = useState<FormState>(() =>
    isMagnifyEnabled ? (store.get(key) ?? EMPTY) : EMPTY
  );

  // Always-current ref — lets handleSubmit read state without a stale closure.
  const formRef = useRef(form);
  formRef.current = form;

  // Prevents re-applying our own store writes back to state (double-update bug).
  const isSelfWriting = useRef(false);

  useEffect(() => {
    if (!isMagnifyEnabled) return;
    if (!store.has(key)) store.set(key, formRef.current);
    const unsubscribe = storeSubscribe(key, () => {
      if (!isSelfWriting.current) setFormRaw(store.get(key) ?? EMPTY);
    });
    return () => void unsubscribe();
  }, [isMagnifyEnabled, key]); // eslint-disable-line react-hooks/exhaustive-deps

  function setForm(updater: FormState | ((prev: FormState) => FormState)) {
    setFormRaw((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (isMagnifyEnabled) {
        isSelfWriting.current = true;
        storeSet(key, next);
        isSelfWriting.current = false;
      }
      return next;
    });
  }

  const isDark = variant === "dark";

  const inputCls = isDark
    ? "rounded-md border border-white/30 bg-white/10 px-4 py-3 text-brand-50 placeholder:text-brand-100/60 focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-200/50 w-full"
    : "rounded-md border border-brand-100 bg-white px-4 py-3 text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 w-full";

  const labelCls = isDark
    ? "text-sm font-semibold tracking-wide text-brand-100"
    : "text-sm font-semibold tracking-wide text-brand-700";

  const errorCls = `text-sm ${isDark ? "text-brand-200" : "text-brand-600"}`;
  const feedbackCls = `md:col-span-2 text-sm ${isDark ? "text-brand-100" : "text-brand-700"}`;

  const btnCls = `md:col-span-2 rounded-md px-6 py-3 text-center text-sm font-semibold transition
    disabled:cursor-not-allowed disabled:opacity-70
    ${isDark ? "bg-brand-50 text-brand-900 hover:bg-brand-200" : "bg-brand-900 text-brand-50 hover:bg-brand-800"}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, serviceDetail, phone, email } = formRef.current;

    const trimName    = name.trim();
    const trimService = serviceDetail.trim();
    const cleanPhone  = phone.replace(/[\s()-]/g, "");
    const trimEmail   = email.trim();

    if (!trimName || !trimService) {
      setForm((p) => ({ ...p, status: "error", message: "Completá tu nombre y describí el servicio requerido." }));
      return;
    }

    if (!PHONE_RE.test(cleanPhone)) {
      setForm((p) => ({ ...p, status: "error", phoneError: "Usá un número válido de Costa Rica (8 dígitos, opcional +506)." }));
      return;
    }

    if (!EMAIL_RE.test(trimEmail)) {
      setForm((p) => ({ ...p, status: "error", emailError: "Ingresá un correo electrónico válido." }));
      return;
    }

    setForm((p) => ({ ...p, status: "loading", message: null, phoneError: null, emailError: null }));

    try {
      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimName, service: trimService, phone: cleanPhone, email: trimEmail }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error ?? "No se pudo enviar el formulario.");

      setForm({ ...EMPTY, status: "success", message: successMessage });
    } catch (err) {
      setForm((p) => ({
        ...p,
        status: "error",
        message: err instanceof Error ? err.message : "No se pudo enviar el formulario. Intentá nuevamente.",
      }));
    }
  }

  return (
    <form
      className={`grid gap-6 md:grid-cols-2 ${className}`}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de contacto de servicio"
    >
      {/* Teléfono */}
      <div className="space-y-2">
        <label htmlFor="phone" className={labelCls}>Número telefónico</label>
        <input
          id="phone" name="phone" type="tel" required autoComplete="tel"
          placeholder="Tu telefono"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value, phoneError: null }))}
          className={inputCls}
          aria-invalid={!!form.phoneError}
          aria-describedby={form.phoneError ? "phone-error" : undefined}
        />
        {form.phoneError && <p id="phone-error" role="alert" className={errorCls}>{form.phoneError}</p>}
      </div>

      {/* Nombre */}
      <div className="space-y-2">
        <label htmlFor="full-name" className={labelCls}>Nombre completo</label>
        <input
          id="full-name" name="name" type="text" required autoComplete="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className={inputCls}
        />
      </div>

      {/* Correo */}
      <div className="space-y-2">
        <label htmlFor="email" className={labelCls}>Correo electrónico</label>
        <input
          id="email" name="email" type="email" required autoComplete="email"
          placeholder="Correo electronico"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value, emailError: null }))}
          className={inputCls}
          aria-invalid={!!form.emailError}
          aria-describedby={form.emailError ? "email-error" : undefined}
        />
        {form.emailError && <p id="email-error" role="alert" className={errorCls}>{form.emailError}</p>}
      </div>

      {/* Servicio */}
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="service-detail" className={labelCls}>Servicio requerido</label>
        <textarea
          id="service-detail" name="service" rows={4} required
          placeholder="Contanos que necesitas"
          value={form.serviceDetail}
          onChange={(e) => setForm((p) => ({ ...p, serviceDetail: e.target.value }))}
          className={inputCls}
        />
      </div>

      <button type="submit" disabled={form.status === "loading"} className={btnCls}>
        {form.status === "loading" ? "Enviando..." : submitLabel}
      </button>

      {form.message && (
        <p
          className={feedbackCls}
          aria-live="polite"
          role={form.status === "error" ? "alert" : "status"}
        >
          {form.message}
        </p>
      )}
    </form>
  );
}
