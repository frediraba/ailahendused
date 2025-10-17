"use client";

import { useCallback, useMemo, useState } from "react";
import { consultationSchema } from "@/app/(marketing)/ai-lahendused/schema";

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  preferredContact: "email" as const,
  projectSummary: "",
  consentGranted: false,
};

type FormState = typeof initialValues;

type MessageState =
  | { type: "idle" }
  | { type: "success"; requestId: string }
  | { type: "duplicate"; message: string }
  | { type: "error"; message: string };

const preferenceOptions = [
  { value: "email", label: "E-post" },
  { value: "phone", label: "Telefon" },
] as const;

export function ConsultationForm() {
  const [values, setValues] = useState<FormState>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<MessageState>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isSubmitDisabled = useMemo(
    () => submitting || !values.consentGranted,
    [submitting, values.consentGranted],
  );

  const updateField = useCallback<
    (key: keyof FormState) => (value: string | boolean) => void
  >(
    (key) => (value) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        setMessage({
          type: "error",
          message:
            "Tundub, et oled v\u00F5rgu\u00FChenduseta. Palun proovi uuesti, kui \u00FChendus taastub.",
        });
        return;
      }

      setSubmitting(true);
      setMessage({ type: "idle" });

      const validation = consultationSchema.safeParse({
        ...values,
        consentGranted: values.consentGranted,
      });

      if (!validation.success) {
        const nextErrors: Record<string, string> = {};
        validation.error.issues.forEach((issue) => {
          const path = issue.path[0];
          if (typeof path === "string") {
            nextErrors[path] = issue.message;
          }
        });
        setErrors(nextErrors);
        setSubmitting(false);
        return;
      }

      setErrors({});

      try {
        const response = await fetch("/api/contact-request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validation.data),
        });

        const json = (await response.json().catch(() => ({}))) as Record<
          string,
          unknown
        >;

        if (response.status === 409 && json.status === "duplicate") {
          setMessage({
            type: "duplicate",
            message:
              (json.message as string) ??
              "Oleme juba saanud sinu päringu. Võtame peagi ühendust.",
          });
          setSubmitting(false);
          return;
        }

        if (!response.ok) {
          setMessage({
            type: "error",
            message:
              (json.message as string) ??
              "Midagi läks valesti. Palun proovi uuesti või kirjuta info@ailahendused.ee.",
          });
          setSubmitting(false);
          return;
        }

        const requestId = (json.requestId as string) ?? "";
        setMessage({ type: "success", requestId });
        resetForm();
      } catch {
        setMessage({
          type: "error",
          message:
            "Serverini ei jõutud. Kontrolli internetiühendust ja proovi uuesti.",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [values, resetForm],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="card gradient-border flex flex-col gap-6 p-6"
      aria-labelledby="consultation-heading"
      action="/api/contact-request"
    >
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/80">
          Kiire tagasiside
        </p>
        <h2 id="consultation-heading" className="text-2xl font-semibold">
          Kirjelda oma vajadust ja leiame kiireima järgmise sammu
        </h2>
        <p className="text-sm text-foreground/70">
          Täida vorm ning võtame sinuga ühendust ühe tööpäeva jooksul, et kinnitada ajakava ja jagada
          esmast soovitust.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Täisnimi"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={(value) => updateField("fullName")(value)}
          error={errors.fullName}
          required
        />
        <Field
          label="Ettevõte"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(value) => updateField("company")(value)}
          error={errors.company}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="E-post"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(value) => updateField("email")(value)}
          error={errors.email}
          required
        />
        <Field
          label="Telefon (soovi korral)"
          name="phone"
          autoComplete="tel"
          value={values.phone}
          onChange={(value) => updateField("phone")(value)}
          error={errors.phone}
          placeholder="+372..."
        />
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-foreground">
          Eelistatud kontaktkanal
        </legend>
        <div className="flex gap-4">
          {preferenceOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                className="h-4 w-4"
                name="preferredContact"
                value={option.value}
                checked={values.preferredContact === option.value}
                onChange={(event) =>
                  updateField("preferredContact")(event.target.value)
                }
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors.preferredContact ? (
          <p className="text-sm text-red-600">{errors.preferredContact}</p>
        ) : null}
      </fieldset>

      <div>
        <label className="flex w-full flex-col gap-2 text-sm font-medium text-foreground">
          Projekti kirjeldus
          <textarea
            name="projectSummary"
            className="min-h-[140px] resize-y rounded-lg border border-foreground/15 bg-background px-4 py-3 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            placeholder="Kirjelda, millist protsessi või klienditeekonda soovid AI abil parandada"
            value={values.projectSummary}
            onChange={(event) => updateField("projectSummary")(event.target.value)}
            required
          />
        </label>
        {errors.projectSummary ? (
          <p className="text-sm text-red-600">{errors.projectSummary}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-foreground">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4"
            checked={values.consentGranted}
            onChange={(event) => updateField("consentGranted")(event.target.checked)}
          />
          <span>
            Luban AI Lahendused meeskonnal minuga ühendust võtta ja salvestada esitatud andmed päringu töötlemiseks.
          </span>
        </label>
        {errors.consentGranted ? (
          <p className="text-sm text-red-600">{errors.consentGranted}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:bg-foreground/40"
          disabled={isSubmitDisabled}
        >
          {submitting ? "Saatmine..." : "Saada päring"}
        </button>
        <p className="text-xs text-foreground/60">
          Vastame ühe tööpäeva jooksul. Vajadusel kirjuta otse: info@ailahendused.ee
        </p>
      </div>

      <Message message={message} />
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  required,
}: FieldProps) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-foreground/15 bg-background px-4 py-3 text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

type MessageProps = {
  message: MessageState;
};

function Message({ message }: MessageProps) {
  if (message.type === "idle") return null;
  if (message.type === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-emerald-600/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
      >
        Tänan! Sinu konsultatsioonisoov on vastu võetud. Viide: {message.requestId}
      </div>
    );
  }

  if (message.type === "duplicate") {
    return (
      <div
        role="status"
        className="rounded-lg border border-amber-500/20 bg-amber-50 px-4 py-3 text-sm text-amber-900"
      >
        {message.message}
      </div>
    );
  }

  return (
    <div
      role="alert"
      className="rounded-lg border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900"
    >
      {message.message}
    </div>
  );
}

