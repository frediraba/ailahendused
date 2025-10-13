import { ConsultationPayload } from "@/app/(marketing)/ai-lahendused/schema";

export type SubmissionResult =
  | { type: "queued"; requestId: string; submittedAt: string }
  | { type: "delivered"; requestId: string; submittedAt: string }
  | { type: "duplicate"; existingRequestId: string; message: string }
  | { type: "error"; statusCode: number; message: string };

const webhookUrl = process.env.CRM_WEBHOOK_URL;
const webhookToken = process.env.CRM_WEBHOOK_TOKEN;

function assertEnv(variable: string | undefined, name: string) {
  if (!variable) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return variable;
}

export async function submitConsultationRequest(
  payload: ConsultationPayload,
): Promise<SubmissionResult> {
  const url = assertEnv(webhookUrl, "CRM_WEBHOOK_URL");
  const token = assertEnv(webhookToken, "CRM_WEBHOOK_TOKEN");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...payload,
      metadata: {
        source: "landing-page",
      },
    }),
  });

  if (response.status === 409) {
    const json = await response.json().catch(() => null);
    return {
      type: "duplicate",
      existingRequestId: json?.existingRequestId ?? "",
      message:
        json?.message ??
        "Oleme juba saanud sinu pöördumise viimase 24 tunni jooksul.",
    };
  }

  if (!response.ok) {
    let message = "Kahjuks ei õnnestunud pöördumist edastada.";
    try {
      const json = (await response.json()) as { message?: string };
      if (json?.message) {
        message = json.message;
      }
    } catch {
      // Ignore parse errors; keep default message
    }

    return {
      type: "error",
      statusCode: response.status,
      message,
    };
  }

  const json = (await response.json().catch(() => ({}))) as {
    requestId?: string;
    status?: "queued" | "delivered";
    submittedAt?: string;
  };

  return {
    type: json.status === "delivered" ? "delivered" : "queued",
    requestId: json.requestId ?? crypto.randomUUID(),
    submittedAt: json.submittedAt ?? new Date().toISOString(),
  };
}

