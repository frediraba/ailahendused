import { heroCopy } from "../src/app/(marketing)/ai-lahendused/strings";

type MockRequest = { json: () => Promise<unknown> };

function countWords(text: string): number {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

async function verifyHeroCopy() {
  const wordCount = countWords(heroCopy.subheading);
  if (wordCount > 60) {
    throw new Error(`Hero subheading exceeds 60 words (actual: ${wordCount}).`);
  }
  console.log(`Hero subheading word count: ${wordCount} (<= 60)`);
}

function createRequest(body: unknown): MockRequest {
  return {
    json: async () => body,
  };
}

async function verifyConsultationFlow() {
  process.env.CONTACT_EMAIL_PROVIDER = "resend";
  process.env.RESEND_API_KEY = "test-api-key";
  process.env.CONTACT_FROM_EMAIL = "consultations@test.local";
  process.env.CONTACT_TO_EMAIL = "info@test.local";

  const { POST } = await import("../src/app/api/contact-request/route");

  let fetchCalls: Array<{ init?: RequestInit }> = [];

  global.fetch = (async (_input: RequestInfo, init?: RequestInit) => {
    fetchCalls.push({ init });
    return new Response(
      JSON.stringify({
        requestId: "mock-request",
        status: "queued",
        submittedAt: new Date().toISOString(),
      }),
      { status: 202, headers: { "Content-Type": "application/json" } },
    );
  }) as typeof fetch;

  const payload = {
    fullName: "Mari Maasikas",
    company: "Test OÜ",
    email: "mari@example.com",
    phone: "+3725555555",
    preferredContact: "email" as const,
    projectSummary:
      "Soovin automatiseerida korduvatele küsimustele vastamist veebivestluses.",
    consentGranted: true,
  };

  const firstRequest = createRequest(payload) as Parameters<typeof POST>[0];
  const firstResponse = await POST(firstRequest);
  const firstJson = await firstResponse.json();

  if (firstResponse.status !== 200 && firstResponse.status !== 202) {
    throw new Error(`Expected consultation success status, received ${firstResponse.status}.`);
  }
  if (firstJson.status !== "queued" && firstJson.status !== "delivered") {
    throw new Error(`Unexpected consultation success payload: ${JSON.stringify(firstJson)}`);
  }
  console.log(`Consultation success check passed (status: ${firstResponse.status}).`);

  fetchCalls = [];
  const duplicateRequest = createRequest(payload) as Parameters<typeof POST>[0];
  const duplicateResponse = await POST(duplicateRequest);
  if (duplicateResponse.status !== 409) {
    const dupJson = await duplicateResponse.json();
    throw new Error(
      `Expected duplicate 409 response. Got ${duplicateResponse.status}: ${JSON.stringify(dupJson)}`,
    );
  }
  const duplicateJson = await duplicateResponse.json();
  if (duplicateJson.status !== "duplicate") {
    throw new Error(`Duplicate payload unexpected: ${JSON.stringify(duplicateJson)}`);
  }
  if (fetchCalls.length !== 0) {
    throw new Error("Duplicate submission should not trigger a second email send.");
  }
  console.log("Consultation duplicate check passed (409).");
}

async function main() {
  await verifyHeroCopy();
  await verifyConsultationFlow();
  console.log("QA checks completed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
