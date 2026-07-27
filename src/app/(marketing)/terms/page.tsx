import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = {
  title: "Terms of Use — HearWell",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Use"
      subtitle="The conditions under which visitors may use this site and the hearing screening."
      needsFromClient={[
        "Legal entity name and jurisdiction (Ireland, UK, both?)",
        "Acceptable use — what a visitor may and may not do with the site",
        "Intellectual property notice (site content, logos, trademarks)",
        "Limitation of liability — screening results are informational only",
        "Disclaimer of medical advice (linked to /disclaimer)",
        "Governing law and dispute resolution",
        "Contact for legal notices",
      ]}
    >
      <p className="text-[var(--muted)]">
        These terms govern how visitors interact with the site. The most
        important sections for a medical-adjacent tool are the limitation of
        liability and the explicit disclaimer that results are not a medical
        diagnosis. We strongly recommend legal review before publishing.
      </p>
    </PlaceholderPage>
  );
}
