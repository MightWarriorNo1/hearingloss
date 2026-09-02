import Link from "next/link";
import { siteContent } from "@/config/content";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-muted)] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo height={44} />
          <p className="mt-4 text-sm text-[var(--muted)] max-w-sm">
            {siteContent.site.tagline}
          </p>
          <p className="mt-4 text-xs text-[var(--muted)] leading-relaxed max-w-sm">
            {siteContent.disclaimer}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Site</p>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--foreground)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--foreground)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/test" className="hover:text-[var(--foreground)]">
                Take the test
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Legal</p>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              <Link href="/disclaimer" className="hover:text-[var(--foreground)]">
                Medical Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[var(--foreground)]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[var(--foreground)]">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-[var(--muted)]">
          © {year} {siteContent.site.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
