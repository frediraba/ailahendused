import { z } from "zod";

export const consultationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Sisesta ees- ja perekonnanimi (vähemalt 2 märki)")
      .max(80, "Nimi võib olla kuni 80 märki"),
    company: z
      .string()
      .min(2, "Ettevõtte nimi on kohustuslik")
      .max(120, "Ettevõtte nimi võib olla kuni 120 märki"),
    email: z
      .string()
      .email("Kontrolli e-posti aadressi"),
    phone: z
      .string()
      .optional()
      .transform((value) => value?.trim() ?? "")
      .refine(
        (value) => !value || /^\+[1-9][0-9]{1,14}$/.test(value),
        "Telefon peab olema rahvusvahelises formaadis (+372...)",
      ),
    preferredContact: z.enum(["email", "phone"], {
      required_error: "Vali eelistatud kontaktkanal",
    }),
    projectSummary: z
      .string()
      .min(20, "Kirjelda, mida soovid automatiseerida (min 20 märki)")
      .max(600, "Kirjeldus võib olla kuni 600 märki"),
    consentGranted: z.literal(true, {
      errorMap: () => ({
        message: "Palun kinnita, et võime sinuga ühendust võtta",
      }),
    }),
  })
  .transform((values) => ({
    ...values,
    email: values.email.toLowerCase(),
  }));

export type ConsultationFormValues = z.input<typeof consultationSchema>;
export type ConsultationPayload = z.output<typeof consultationSchema>;

export const duplicateWindowHours = 24;
