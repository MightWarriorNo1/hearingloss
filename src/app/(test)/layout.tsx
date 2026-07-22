import Link from "next/link";
import { siteContent } from "@/config/content";
import Logo from "@/components/Logo";

export default function TestFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-lg"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--cta)] text-[var(--cta-foreground)]">
              <Logo size={22} />
            </span>
            <span>{siteContent.site.brandName}</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
