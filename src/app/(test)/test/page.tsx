import TestIntro from "@/components/test/TestIntro";
import { siteTestPaths } from "@/lib/testFlowPaths";

export default function TestPage() {
  return <TestIntro startHref={siteTestPaths.start} backHref="/" />;
}
