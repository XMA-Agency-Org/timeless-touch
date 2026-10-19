"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { galleryColumns } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";
import ParallaxColumn from "./ParallaxColumn";

interface ParallaxColumnsGalleryProps {
  className?: string;
}

export default function ParallaxColumnsGallery({ className }: ParallaxColumnsGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={galleryRef}
      className={cn(
        "relative box-border h-[175vh] gap-gallery-wide overflow-clip p-gallery-wide",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 shadow-(--gallery-vignette-columns)"
      />
      {galleryColumns.map((column, columnIndex) => (
        <ParallaxColumn key={columnIndex} {...column} scrollProgress={scrollYProgress} />
      ))}
    </div>
  );
}
