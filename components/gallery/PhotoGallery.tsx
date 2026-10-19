import ParallaxColumnsGallery from "./ParallaxColumnsGallery";
import ParallaxRowsGallery from "./ParallaxRowsGallery";

export default function PhotoGallery() {
  return (
    <section aria-label="Project gallery" className="relative">
      <ParallaxRowsGallery className="lg:hidden" />
      <ParallaxColumnsGallery className="hidden lg:flex" />
    </section>
  );
}
