import type { GalleryColumnConfig, GalleryRowConfig } from "@/lib/types";

export const galleryImages: string[] = [
  "/images/skiper/aalo-lens-XhMzBZrpQT4-unsplash.jpg",
  "/images/skiper/adriana-macias-1TnBLt1KXSg-unsplash.jpg",
  "/images/skiper/alef-morais-l864GKi_dRM-unsplash.jpg",
  "/images/skiper/amira-aboalnaga-O7WjrXiKy_s-unsplash.jpg",
  "/images/skiper/clay-banks-C-FqIffctHI-unsplash.jpg",
  "/images/skiper/ela-de-pure-wK2nvKuHv18-unsplash.jpg",
  "/images/skiper/jean-philippe-delberghe-kpxXdzCbXHw-unsplash.jpg",
  "/images/skiper/jean-philippe-delberghe-yo5hCvbFUJI-unsplash.jpg",
  "/images/skiper/lotus-design-n-print-BrS3Atdfek0-unsplash.jpg",
  "/images/skiper/luigi-estuye-lucreative-uEqlyGxup5I-unsplash.jpg",
  "/images/skiper/peter-muniz-d3lWY5P9sws-unsplash.jpg",
  "/images/skiper/prydumano-design-mqlKz6qnafk-unsplash.jpg",
  "/images/skiper/reisetopia-nxtnUlotYr8-unsplash.jpg",
];

const TILES_PER_ROW = 8;
const ROW_START_STEP = 5;

const buildRowImages = (rowIndex: number) => {
  const rowImages = Array.from(
    { length: TILES_PER_ROW },
    (_, tileIndex) =>
      galleryImages[(rowIndex * ROW_START_STEP + tileIndex) % galleryImages.length]
  );
  const isOddRow = rowIndex % 2 === 1;
  return isOddRow ? rowImages.reverse() : rowImages;
};

export const galleryRows: GalleryRowConfig[] = [
  {
    images: buildRowImages(0),
    direction: "left",
    travelShareOfVisibleWidth: 0.55,
    staggerShareOfVisibleWidth: 0,
  },
  {
    images: buildRowImages(1),
    direction: "right",
    travelShareOfVisibleWidth: 0.4,
    staggerShareOfVisibleWidth: -0.22,
  },
  {
    images: buildRowImages(2),
    direction: "left",
    travelShareOfVisibleWidth: 0.65,
    staggerShareOfVisibleWidth: 0.12,
  },
];

export const galleryColumns: GalleryColumnConfig[] = [
  {
    images: galleryImages.slice(0, 3),
    startOffsetPercent: -45,
    travelInViewportHeights: 2,
  },
  {
    images: galleryImages.slice(3, 6),
    startOffsetPercent: -95,
    travelInViewportHeights: 3.3,
  },
  {
    images: galleryImages.slice(6, 9),
    startOffsetPercent: -45,
    travelInViewportHeights: 1.25,
  },
  {
    images: galleryImages.slice(9, 13),
    startOffsetPercent: -75,
    travelInViewportHeights: 3,
  },
];
