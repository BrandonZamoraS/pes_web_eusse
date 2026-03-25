import {
  buildMailgunMessage,
  buildMailgunRequestBody,
  buildMailgunUrl,
  getMailgunConfig,
  normalizePeddlerContactPayload,
  validatePeddlerContactPayload,
} from "@/lib/peddler-contact";

export async function POST(request: Request) {
  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return Response.json(
      { error: "Solicitud invalida. Intenta nuevamente." },
      { status: 400 },
    );
  }

  const payload = normalizePeddlerContactPayload(
    (rawPayload as Record<string, unknown>) ?? {},
  );
  const errors = validatePeddlerContactPayload(payload);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        error: "Revisa los datos enviados e intenta nuevamente.",
        fields: errors,
      },
      { status: 400 },
    );
  }

  const config = getMailgunConfig();

  if (!config) {
    console.error(
      "Missing Mailgun configuration for /api/peddler-contact.",
    );
    return Response.json(
      { error: "El servicio de contacto no esta disponible en este momento." },
      { status: 500 },
    );
  }

  const message = buildMailgunMessage({
    fromEmail: config.fromEmail,
    toEmail: config.toEmail,
    payload,
  });

  try {
    const response = await fetch(
      buildMailgunUrl({
        apiBaseUrl: config.apiBaseUrl,
        domain: config.domain,
      }),
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: buildMailgunRequestBody(message),
      },
    );

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("Mailgun request failed for peddler contact.", detail);

      return Response.json(
        { error: "No se pudo enviar el formulario. Intenta nuevamente." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected Mailgun error for peddler contact.", error);

    return Response.json(
      { error: "No se pudo enviar el formulario. Intenta nuevamente." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
