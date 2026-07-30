import Link from "next/link";
import { LinkButton } from "./Button";
import BrandLogo from "./BrandLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color-mix(in_srgb,var(--background)_85%,transparent)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <BrandLogo height={40} priority />
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            About
          </Link>
          <Link href="/test" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            Take the test
          </Link>
        </nav>
        <LinkButton href="/test" size="sm">
          Start free test
        </LinkButton>
      </div>
    </header>
  );
}
