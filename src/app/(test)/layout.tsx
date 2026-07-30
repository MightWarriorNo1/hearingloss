import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function TestFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center">
            <BrandLogo height={40} priority />
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
