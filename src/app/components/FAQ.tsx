import { faqCopy } from "@/app/(marketing)/ai-lahendused/strings";

type FaqItem = (typeof faqCopy)[number];

type FAQProps = {
  items?: FaqItem[];
};

export function FAQ({ items = faqCopy }: FAQProps) {
  return (
    <dl className="space-y-6">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-2xl border border-foreground/10 bg-background/40 p-6 shadow-sm"
        >
          <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
          <dd className="mt-3 text-sm leading-relaxed text-foreground/75">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}

