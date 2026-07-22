import { LinkButton } from "@/components/Button";
import TestShell from "@/components/TestShell";
import IconBadge, { FreeBadge } from "@/components/IconBadge";
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
} from "@/components/Icons";

const steps = [
  { badge: <FreeBadge />, label: "Start the Free Test and answer a few questions" },
  {
    badge: (
      <IconBadge>
        <HeadphonesIcon size={26} />
      </IconBadge>
    ),
    label: "Headphones required (some questions include audio)",
  },
  {
    badge: (
      <IconBadge>
        <ClipboardCheckIcon size={26} />
      </IconBadge>
    ),
    label: "Get your results right away",
  },
];

export default function TestPage() {
  return (
    <TestShell percent={2} showPill={false}>
      <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          How It Works
        </h1>

        <ul className="mt-10 space-y-8 max-w-md mx-auto">
          {steps.map((step, i) => (
            <li key={i} className="flex items-center gap-5">
              {step.badge}
              <span className="text-base sm:text-lg">{step.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <LinkButton href="/test/start" size="lg">
            Start Test
            <ArrowRightIcon size={18} />
          </LinkButton>
        </div>

        <p className="mt-8 text-center text-sm italic text-[var(--muted)] max-w-lg mx-auto">
          *This test is a screener designed to give you general information about your
          hearing. It is not a diagnostic test or medical assessment.
        </p>
      </div>
    </TestShell>
  );
}
