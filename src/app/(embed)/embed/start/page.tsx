import TestRunner from "@/components/test/TestRunner";
import { embedTestPaths } from "@/lib/testFlowPaths";

export default function EmbedStartPage() {
  return <TestRunner paths={embedTestPaths} />;
}
