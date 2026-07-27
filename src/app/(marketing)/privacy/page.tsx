import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = {
  title: "Privacy Policy — HearWell",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      subtitle="How visitor data is collected, used, and protected."
      needsFromClient={[
        "Legal entity name and registered address (data controller)",
        "Contact email or DPO address for privacy inquiries",
        "What personal data (if any) is collected — currently the test runs entirely in the browser and stores nothing server-side",
        "If lead-capture is added: what fields, where the data goes, and retention period",
        "Cookies and analytics used (Google Analytics? Fleming Medical portal cookies?)",
        "Legal basis under GDPR (EU/IE) and any UK GDPR wording",
        "How users can request access, correction, or deletion of their data",
      ]}
    >
      <p className="text-[var(--muted)]">
        This policy should cover what is collected, why, who it is shared with,
        how long it is kept, and how a visitor can exercise their rights. Given
        the site targets Ireland and the UK, both GDPR and UK GDPR must be
        addressed. We recommend a solicitor or an online generator (Iubenda,
        Termly) as a starting point, then legal review.
      </p>
    </PlaceholderPage>
  );
}
