import ContentPage from "@/components/ContentPage";
import { termsPageContent } from "@/config/pageContent";
import { siteContent } from "@/config/content";

export const metadata = {
  title: `Terms & Conditions — ${siteContent.site.brandName}`,
};

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms & Conditions"
      subtitle="The conditions under which visitors may use this site and the hearing screening."
      sections={termsPageContent}
    />
  );
}
