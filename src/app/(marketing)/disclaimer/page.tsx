import ContentPage from "@/components/ContentPage";
import { disclaimerPageContent } from "@/config/pageContent";
import { siteContent } from "@/config/content";

export const metadata = {
  title: `Medical Disclaimer — ${siteContent.site.brandName}`,
};

export default function DisclaimerPage() {
  return (
    <ContentPage
      title="Medical Disclaimer"
      subtitle="Important information about the scope and limitations of this online hearing screening."
      sections={disclaimerPageContent}
    >
      <p className="mt-10 text-sm text-[var(--muted)] leading-relaxed">
        A short version of this disclaimer appears at the end of every test and
        in the site footer.
      </p>
    </ContentPage>
  );
}
