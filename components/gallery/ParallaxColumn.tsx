"use client";

import { motion, MotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { GalleryColumnConfig } from "@/lib/types";
import GalleryTile from "./GalleryTile";

interface ParallaxColumnProps extends GalleryColumnConfig {
  scrollProgress: MotionValue<number>;
}

export default function ParallaxColumn({
  images,
  startOffsetPercent,
  travelInViewportHeights,
  scrollProgress,
}: ParallaxColumnProps) {
  const prefersReducedMotion = useReducedMotion();
  const travelInVh = travelInViewportHeights * 100;
  const scrollDrivenOffset = useTransform(scrollProgress, [0, 1], ["0vh", `${travelInVh}vh`]);
  const restingOffset = `${travelInVh / 2}vh`;

  return (
    <motion.div
      style={{
        y: prefersReducedMotion ? restingOffset : scrollDrivenOffset,
        top: `${startOffsetPercent}%`,
      }}
      className="relative flex h-full w-1/4 flex-col gap-gallery-wide will-change-transform"
    >
      {images.map((src) => (
        <GalleryTile key={src} src={src} sizes="25vw" className="h-full w-full" />
      ))}
    </motion.div>
  );
}
