import ContentPage from "@/components/ContentPage";
import { aboutPageContent } from "@/config/pageContent";
import { siteContent } from "@/config/content";

export const metadata = {
  title: `About Us — ${siteContent.site.brandName}`,
};

export default function AboutPage() {
  return (
    <ContentPage title="About Us" sections={aboutPageContent}>
      <div
        aria-hidden
        className="mt-6 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center text-sm text-[var(--muted)]"
      >
        Office location map — image coming soon
      </div>
    </ContentPage>
  );
}
