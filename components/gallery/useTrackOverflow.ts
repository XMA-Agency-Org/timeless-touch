"use client";

import { RefObject, useEffect, useState } from "react";

interface TrackMeasurements {
  overflowWidth: number;
  visibleWidth: number;
}

const EMPTY_MEASUREMENTS: TrackMeasurements = { overflowWidth: 0, visibleWidth: 0 };

export function useTrackOverflow(trackRef: RefObject<HTMLElement | null>) {
  const [measurements, setMeasurements] = useState(EMPTY_MEASUREMENTS);

  useEffect(() => {
    const track = trackRef.current;
    const visibleArea = track?.parentElement;
    if (!track || !visibleArea) return;

    const measureTrack = () => {
      const visibleWidth = visibleArea.clientWidth;
      const overflowWidth = Math.max(0, track.scrollWidth - visibleWidth);
      setMeasurements((previous) =>
        previous.overflowWidth === overflowWidth && previous.visibleWidth === visibleWidth
          ? previous
          : { overflowWidth, visibleWidth }
      );
    };

    const resizeObserver = new ResizeObserver(measureTrack);
    resizeObserver.observe(track);
    resizeObserver.observe(visibleArea);

    return () => resizeObserver.disconnect();
  }, [trackRef]);

  return measurements;
}
