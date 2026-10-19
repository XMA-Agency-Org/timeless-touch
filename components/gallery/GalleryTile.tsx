import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryTileProps {
  src: string;
  sizes: string;
  className?: string;
}

export default function GalleryTile({ src, sizes, className }: GalleryTileProps) {
  return (
    <div className={cn("relative overflow-hidden bg-neutral-200", className)}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="pointer-events-none object-cover"
      />
    </div>
  );
}
