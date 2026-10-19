"use client";

import { motion, MotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useRef } from "react";
import type { GalleryRowConfig } from "@/lib/types";
import GalleryTile from "./GalleryTile";
import { useTrackOverflow } from "./useTrackOverflow";

interface ParallaxRowProps extends GalleryRowConfig {
  scrollProgress: MotionValue<number>;
}

const SCROLL_PROGRESS_MIDPOINT = 0.5;

export default function ParallaxRow({
  images,
  direction,
  travelShareOfVisibleWidth,
  staggerShareOfVisibleWidth,
  scrollProgress,
}: ParallaxRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { overflowWidth, visibleWidth } = useTrackOverflow(trackRef);
  const prefersReducedMotion = useReducedMotion();
  const directionSign = direction === "left" ? -1 : 1;

  const staggerDistance = visibleWidth * staggerShareOfVisibleWidth;
  const restingOffset = -overflowWidth / 2 + staggerDistance;
  const travelThatKeepsEdgesCovered = Math.max(0, overflowWidth - 2 * Math.abs(staggerDistance));
  const travelDistance = Math.min(
    travelThatKeepsEdgesCovered,
    visibleWidth * travelShareOfVisibleWidth
  );

  const trackOffset = useTransform(scrollProgress, (progress) => {
    if (prefersReducedMotion) return restingOffset;
    const progressFromMidpoint = progress - SCROLL_PROGRESS_MIDPOINT;
    return restingOffset + directionSign * progressFromMidpoint * travelDistance;
  });

  return (
    <motion.div
      ref={trackRef}
      style={{ x: trackOffset }}
      className="flex w-max gap-gallery will-change-transform"
    >
      {images.map((src, tileIndex) => (
        <GalleryTile
          key={`${src}-${tileIndex}`}
          src={src}
          sizes="(min-width: 640px) 25vw, 45vw"
          className="aspect-4/5 h-(--gallery-row-tile-height) shrink-0"
        />
      ))}
    </motion.div>
  );
}
