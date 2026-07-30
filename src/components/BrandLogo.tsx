import Image from "next/image";

// Fleming Medical logo — sent by client. Aspect ratio ~ 358/98 = 3.65:1.
// Width is derived from height so callers only need to specify a height.
const LOGO_ASPECT = 358 / 98;

export default function BrandLogo({
  height = 40,
  priority = false,
  className = "",
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const width = Math.round(height * LOGO_ASPECT);
  return (
    <Image
      src="/IMG_8194.png"
      alt="Fleming Medical"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
