import { NextResponse, type NextRequest } from "next/server";
import {
  consultationSchema,
  duplicateWindowHours,
} from "@/app/(marketing)/ai-lahendused/schema";
import { submitConsultationRequest } from "@/lib/contact/submitRequest";

const duplicateWindowMs = duplicateWindowHours * 60 * 60 * 1000;
const recentRequests = new Map<string, { requestId: string; submittedAt: number }>();

function isRecentDuplicate(email: string) {
  const existing = recentRequests.get(email);
  if (!existing) return false;
  return Date.now() - existing.submittedAt < duplicateWindowMs;
}

function rememberSubmission(email: string, requestId: string, submittedAt: string) {
  recentRequests.set(email, {
    requestId,
    submittedAt: new Date(submittedAt).getTime(),
  });
}

export async function POST(request: NextRequest) {
  let parsed;
  try {
    const json = await request.json();
    const result = consultationSchema.safeParse(json);
    if (!result.success) {
      const issues = result.error.issues.map((issue) => issue.message);
      return NextResponse.json(
        { status: "error", message: "Vormis esines vigu", details: issues },
        { status: 400 },
      );
    }
    parsed = result.data;
  } catch {
    return NextResponse.json(
      { status: "error", message: "Vormi ei \u00F5nnestunud lugeda" },
      { status: 400 },
    );
  }

  const email = parsed.email;

  if (isRecentDuplicate(email)) {
    const existing = recentRequests.get(email);
    return NextResponse.json(
      {
        status: "duplicate",
        existingRequestId: existing?.requestId ?? "",
        message:
          "Oleme juba saanud sinu p\u00F6\u00F6rdumise viimase 24 tunni jooksul. Meeskond v\u00F5tab sinuga peagi \u00FChendust.",
      },
      { status: 409 },
    );
  }

  const submission = await submitConsultationRequest(parsed);

  if (submission.type === "duplicate") {
    if (submission.existingRequestId) {
      rememberSubmission(email, submission.existingRequestId, new Date().toISOString());
    }
    return NextResponse.json(
      {
        status: "duplicate",
        existingRequestId: submission.existingRequestId,
        message: submission.message,
      },
      { status: 409 },
    );
  }

  if (submission.type === "error") {
    return NextResponse.json(
      {
        status: "error",
        message: submission.message,
      },
      { status: submission.statusCode },
    );
  }

  rememberSubmission(email, submission.requestId, submission.submittedAt);

  return NextResponse.json({
    status: submission.type,
    requestId: submission.requestId,
    submittedAt: submission.submittedAt,
  });
}
