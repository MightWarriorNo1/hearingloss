import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = {
  title: "About Us — HearWell",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      subtitle="A short introduction to the company and the mission behind this hearing screening."
      needsFromClient={[
        "Company name, background, and mission statement",
        "Team bio or founder story (optional)",
        "Any relevant medical credentials or partnerships",
        "Photos of the team, office, or facility (optional)",
        "A short paragraph explaining why the free hearing screening exists",
      ]}
    >
      <p className="text-[var(--muted)]">
        This page will introduce the company behind the hearing screening,
        explain the motivation for offering it for free, and build trust with
        visitors before they take the test.
      </p>
    </PlaceholderPage>
  );
}
