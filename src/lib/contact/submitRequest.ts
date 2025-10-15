import { ConsultationPayload } from "@/app/(marketing)/ai-lahendused/schema";

export type SubmissionResult =
  | { type: "queued"; requestId: string; submittedAt: string }
  | { type: "delivered"; requestId: string; submittedAt: string }
  | { type: "duplicate"; existingRequestId: string; message: string }
  | { type: "error"; statusCode: number; message: string };

type EmailProvider = "resend" | "postmark";

function assertEnv(variable: string | undefined, name: string) {
  if (!variable) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return variable;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (match) => {
    switch (match) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return match;
    }
  });
}

function createEmailContent(payload: ConsultationPayload) {
  const subject = `Uus konsultatsioonisoov: ${payload.company}`;
  const escaped = {
    fullName: escapeHtml(payload.fullName),
    company: escapeHtml(payload.company),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone ?? "-"),
    preferredContact: escapeHtml(payload.preferredContact),
    projectSummary: escapeHtml(payload.projectSummary),
  };

  const html = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
      <h2 style="color: #0f172a;">Uus konsultatsioonisoov</h2>
      <p style="margin: 0 0 16px 0;">Landing-lehe vorm esitas järgneva päringu.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 8px; font-weight: 600; border: 1px solid #e2e8f0;">Nimi</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0;">${escaped.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 600; border: 1px solid #e2e8f0;">Ettevõte</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0;">${escaped.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 600; border: 1px solid #e2e8f0;">E-post</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0;">${escaped.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 600; border: 1px solid #e2e8f0;">Telefon</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0;">${escaped.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: 600; border: 1px solid #e2e8f0;">Eelistatud kontakt</td>
            <td style="padding: 8px; border: 1px solid #e2e8f0;">${escaped.preferredContact}</td>
          </tr>
        </tbody>
      </table>
      <h3 style="margin-top: 24px; color: #0f172a;">Projekti kokkuvõte</h3>
      <p style="white-space: pre-wrap; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px;">${escaped.projectSummary}</p>
    </div>
  `;

  const text = `Uus konsultatsioonisoov\n\n` +
    `Nimi: ${payload.fullName}\n` +
    `Ettevõte: ${payload.company}\n` +
    `E-post: ${payload.email}\n` +
    `Telefon: ${payload.phone || "-"}\n` +
    `Eelistatud kontakt: ${payload.preferredContact}\n\n` +
    `Projekti kokkuvõte:\n${payload.projectSummary}`;

  return { subject, html, text };
}

async function sendWithResend(payload: ConsultationPayload): Promise<SubmissionResult> {
  const apiKey = assertEnv(process.env.RESEND_API_KEY, "RESEND_API_KEY");
  const fromEmail = assertEnv(process.env.CONTACT_FROM_EMAIL, "CONTACT_FROM_EMAIL");
  const toEmail = assertEnv(process.env.CONTACT_TO_EMAIL, "CONTACT_TO_EMAIL");
  const { subject, html, text } = createEmailContent(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
      reply_to: payload.email,
      tags: [
        { name: "source", value: "landing-page" },
        { name: "preferred_contact", value: payload.preferredContact },
      ],
    }),
  });

  const submittedAt = new Date().toISOString();
  if (!response.ok) {
    let message = "Kahjuks ei õnnestunud päringut edastada.";
    try {
      const errorBody = (await response.json()) as { message?: string; name?: string };
      if (errorBody?.message) {
        message = errorBody.message;
      } else if (errorBody?.name) {
        message = errorBody.name;
      }
    } catch {
      // ignore parsing errors
    }

    return {
      type: "error",
      statusCode: response.status,
      message,
    };
  }

  type ResendResponse = { id?: string; status?: string };
  const json = (await response.json().catch(() => ({}))) as ResendResponse;

  return {
    type: json.status === "delivered" ? "delivered" : "queued",
    requestId: json.id ?? crypto.randomUUID(),
    submittedAt,
  };
}

async function sendWithPostmark(payload: ConsultationPayload): Promise<SubmissionResult> {
  const serverToken = assertEnv(process.env.POSTMARK_SERVER_TOKEN, "POSTMARK_SERVER_TOKEN");
  const fromEmail = assertEnv(process.env.CONTACT_FROM_EMAIL, "CONTACT_FROM_EMAIL");
  const toEmail = assertEnv(process.env.CONTACT_TO_EMAIL, "CONTACT_TO_EMAIL");
  const messageStream = process.env.POSTMARK_MESSAGE_STREAM ?? "outbound";
  const { subject, html, text } = createEmailContent(payload);

  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Postmark-Server-Token": serverToken,
    },
    body: JSON.stringify({
      From: fromEmail,
      To: toEmail,
      Subject: subject,
      HtmlBody: html,
      TextBody: text,
      ReplyTo: payload.email,
      MessageStream: messageStream,
      Metadata: {
        source: "landing-page",
        preferred_contact: payload.preferredContact,
      },
    }),
  });

  const json = (await response.json().catch(() => ({}))) as {
    MessageID?: string;
    SubmittedAt?: string;
    ErrorCode?: number;
    Message?: string;
  };

  if (!response.ok || json?.ErrorCode) {
    return {
      type: "error",
      statusCode: response.status,
      message:
        json?.Message ?? "Kahjuks ei õnnestunud päringut edastada.",
    };
  }

  return {
    type: "delivered",
    requestId: json.MessageID ?? crypto.randomUUID(),
    submittedAt: json.SubmittedAt ?? new Date().toISOString(),
  };
}

export async function submitConsultationRequest(
  payload: ConsultationPayload,
): Promise<SubmissionResult> {
  try {
    const providerValue = assertEnv(
      process.env.CONTACT_EMAIL_PROVIDER,
      "CONTACT_EMAIL_PROVIDER",
    ).toLowerCase() as EmailProvider;

    if (providerValue === "resend") {
      return await sendWithResend(payload);
    }

    if (providerValue === "postmark") {
      return await sendWithPostmark(payload);
    }

    return {
      type: "error",
      statusCode: 500,
      message: "Tundmatu e-postiteenus. Palun kontrolli CONTACT_EMAIL_PROVIDER väärtust.",
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Päringu saatmine ebaõnnestus ootamatu vea tõttu.";
    return {
      type: "error",
      statusCode: 500,
      message,
    };
  }
}
