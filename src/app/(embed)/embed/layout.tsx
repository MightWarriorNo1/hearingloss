import EmbedResize from "@/components/embed/EmbedResize";

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EmbedResize />
      <main className="flex-1">{children}</main>
    </>
  );
}
