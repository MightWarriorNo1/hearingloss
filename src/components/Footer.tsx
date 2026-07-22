import Link from "next/link";
import { siteContent } from "@/config/content";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-muted)] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-semibold text-lg">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--cta)] text-[var(--cta-foreground)]">
              <Logo size={22} />
            </span>
            <span>{siteContent.site.brandName}</span>
          </div>
          <p className="mt-3 text-sm text-[var(--muted)] max-w-xs">
            {siteContent.site.tagline}
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
              <Link href="/test" className="hover:text-[var(--foreground)]">
                Take the test
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Disclaimer</p>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {siteContent.disclaimer}
          </p>
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
