import { siteContent } from "@/config/content";
import { LinkButton } from "@/components/Button";
import Section from "@/components/Section";
import IconBadge, { FreeBadge } from "@/components/IconBadge";
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
} from "@/components/Icons";

const steps = [
  {
    badge: <FreeBadge />,
    title: "Start the Free Test",
    description: "Answer a few quick questions about your hearing.",
  },
  {
    badge: (
      <IconBadge>
        <HeadphonesIcon size={26} />
      </IconBadge>
    ),
    title: "Headphones required",
    description: "Some questions include audio — grab your headphones.",
  },
  {
    badge: (
      <IconBadge>
        <ClipboardCheckIcon size={26} />
      </IconBadge>
    ),
    title: "Get your results",
    description: "See a clear summary of your hearing right away.",
  },
];

export default function Home() {
  const { home } = siteContent;

  return (
    <>
      {/* Hero */}
      <Section className="py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          {home.heroHeadline}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto">
          {home.heroSubheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
          <LinkButton href="/test" size="lg">
            {home.ctaLabel}
            <ArrowRightIcon size={18} />
          </LinkButton>
          <p className="text-sm text-[var(--muted)]">Takes about 3 minutes</p>
        </div>
      </Section>

      {/* How it works */}
      <Section className="py-8 sm:py-12">
        <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-14 shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            How It Works
          </h2>

          <ul className="mt-10 space-y-8 max-w-md mx-auto">
            {steps.map((step) => (
              <li key={step.title} className="flex items-center gap-5">
                {step.badge}
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-[var(--muted)] mt-0.5">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <LinkButton href="/test" size="lg">
              Start Test
              <ArrowRightIcon size={18} />
            </LinkButton>
          </div>

          <p className="mt-8 text-center text-sm italic text-[var(--muted)] max-w-lg mx-auto">
            *This test is a screener designed to give you general information
            about your hearing. It is not a diagnostic test or medical assessment.
          </p>
        </div>
      </Section>
    </>
  );
}
