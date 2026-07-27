import { siteContent } from "@/config/content";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = {
  title: "Medical Disclaimer — HearWell",
};

export default function DisclaimerPage() {
  return (
    <PlaceholderPage
      title="Medical Disclaimer"
      subtitle="Important information about the scope and limitations of this online hearing screening."
      needsFromClient={[
        "Final legal wording of the disclaimer (currently placeholder text)",
        "Explicit statement that this is a screening tool, not a diagnostic test",
        "Recommendation to consult a licensed audiologist or physician",
        "Any regulatory language required in Ireland / UK (HPRA, MHRA)",
        "Any reference to clinical validation, if applicable",
      ]}
    >
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
          Current placeholder wording (used site-wide)
        </p>
        <p className="mt-3 text-[var(--foreground)] leading-relaxed">
          {siteContent.disclaimer}
        </p>
      </div>

      <p className="mt-6 text-[var(--muted)]">
        A short version of this disclaimer appears at the end of every test and
        in the site footer. The full wording will live on this page.
      </p>
    </PlaceholderPage>
  );
}
