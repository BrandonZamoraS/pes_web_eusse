const PHONE_RE = /^(?:\+?506)?\d{8}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type PeddlerContactPayload = {
  name: string;
  service: string;
  phone: string;
  email: string;
};

export type PeddlerContactErrors = Partial<
  Record<keyof PeddlerContactPayload, string>
>;

type BuildMailgunUrlInput = {
  apiBaseUrl: string;
  domain: string;
};

type BuildMailgunMessageInput = {
  fromEmail: string;
  toEmail: string;
  payload: PeddlerContactPayload;
};

type MailgunConfig = {
  apiKey: string;
  apiBaseUrl: string;
  domain: string;
  fromEmail: string;
  toEmail: string;
};

export function normalizePeddlerContactPayload(
  payload: Partial<PeddlerContactPayload>,
): PeddlerContactPayload {
  return {
    name: String(payload.name ?? "").trim(),
    service: String(payload.service ?? "").trim(),
    phone: String(payload.phone ?? "").replace(/[\s()-]/g, "").trim(),
    email: String(payload.email ?? "").trim().toLowerCase(),
  };
}

export function validatePeddlerContactPayload(
  payload: PeddlerContactPayload,
): PeddlerContactErrors {
  const errors: PeddlerContactErrors = {};

  if (!payload.name) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!payload.service) {
    errors.service = "El servicio es obligatorio.";
  }

  if (!PHONE_RE.test(payload.phone)) {
    errors.phone = "Usa un numero valido de Costa Rica.";
  }

  if (!EMAIL_RE.test(payload.email)) {
    errors.email = "Ingresa un correo electronico valido.";
  }

  return errors;
}

export function buildMailgunUrl({
  apiBaseUrl,
  domain,
}: BuildMailgunUrlInput): string {
  return `${apiBaseUrl.replace(/\/+$/, "")}/v3/${domain}/messages`;
}

export function buildMailgunMessage({
  fromEmail,
  toEmail,
  payload,
}: BuildMailgunMessageInput) {
  return {
    from: fromEmail,
    to: toEmail,
    subject: "Nuevo lead de Peddler Combustible",
    text: [
      "Nuevo lead desde el formulario de Peddler Combustible.",
      "",
      `Nombre: ${payload.name}`,
      `Telefono: ${payload.phone}`,
      `Correo: ${payload.email}`,
      `Servicio: ${payload.service}`,
    ].join("\n"),
  };
}

export function buildMailgunRequestBody(
  message: ReturnType<typeof buildMailgunMessage>,
): URLSearchParams {
  const body = new URLSearchParams();
  body.set("from", message.from);
  body.set("to", message.to);
  body.set("subject", message.subject);
  body.set("text", message.text);
  return body;
}

export function getMailgunConfig(
  env: NodeJS.ProcessEnv = process.env,
): MailgunConfig | null {
  const apiKey = env.MAILGUN_API_KEY?.trim();
  const domain = env.MAILGUN_DOMAIN?.trim();
  const fromEmail = env.MAILGUN_FROM_EMAIL?.trim();
  const toEmail = env.PEDDLER_CONTACT_TO_EMAIL?.trim();
  const apiBaseUrl =
    env.MAILGUN_API_BASE_URL?.trim() || "https://api.mailgun.net";

  if (!apiKey || !domain || !fromEmail || !toEmail) {
    return null;
  }

  return {
    apiKey,
    domain,
    fromEmail,
    toEmail,
    apiBaseUrl,
  };
}
