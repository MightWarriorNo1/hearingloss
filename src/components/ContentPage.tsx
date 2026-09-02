import type { ReactNode } from "react";
import type { PageSection } from "@/lib/types";
import Section from "./Section";

function SectionBody({ section }: { section: PageSection }) {
  return (
    <article>
      {section.title && (
        <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
      )}
      {section.paragraphs && section.paragraphs.length > 0 && (
        <div className={section.title ? "mt-4 space-y-4" : "space-y-4"}>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[var(--foreground)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {section.list && section.list.length > 0 && (
        <ul
          className={`${
            section.title || section.paragraphs?.length ? "mt-4" : ""
          } space-y-2 pl-5 list-disc text-[var(--foreground)] leading-relaxed`}
        >
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function ContentPage({
  title,
  subtitle,
  sections,
  children,
}: {
  title: string;
  subtitle?: string;
  sections?: PageSection[];
  children?: ReactNode;
}) {
  return (
    <Section className="py-16 sm:py-24 max-w-3xl">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">{title}</h1>

      {subtitle && (
        <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>
      )}

      {sections && sections.length > 0 && (
        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <SectionBody
              key={section.title ?? `section-${index}`}
              section={section}
            />
          ))}
        </div>
      )}

      {children}
    </Section>
  );
}
