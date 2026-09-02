import ContentPage from "@/components/ContentPage";
import { privacyPageContent } from "@/config/pageContent";
import { siteContent } from "@/config/content";

export const metadata = {
  title: `Privacy Policy — ${siteContent.site.brandName}`,
};

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      subtitle="How visitor data is collected, used, and protected."
      sections={privacyPageContent}
    />
  );
}
