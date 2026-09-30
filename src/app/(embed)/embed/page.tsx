import TestIntro from "@/components/test/TestIntro";
import { embedTestPaths } from "@/lib/testFlowPaths";

export default function EmbedIntroPage() {
  return <TestIntro startHref={embedTestPaths.start} />;
}
