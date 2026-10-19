"use client";

import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { galleryRows } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";
import ParallaxRow from "./ParallaxRow";

interface ParallaxRowsGalleryProps {
  className?: string;
}

const SCROLL_SMOOTHING = { stiffness: 140, damping: 30, mass: 0.4 };

export default function ParallaxRowsGallery({ className }: ParallaxRowsGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const smoothedScrollProgress = useSpring(scrollYProgress, SCROLL_SMOOTHING);

  return (
    <div
      ref={galleryRef}
      className={cn("relative flex flex-col gap-gallery overflow-clip py-gallery", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 shadow-(--gallery-vignette-rows)"
      />
      {galleryRows.map((row, rowIndex) => (
        <ParallaxRow key={rowIndex} {...row} scrollProgress={smoothedScrollProgress} />
      ))}
    </div>
  );
}
