import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import AboutStory from "@/components/AboutStory";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeless Touch Ceramics - Premium Tiles and Natural Stones",
  description:
    "Premium tiles and natural stones for spaces that inspire. Quality craftsmanship since 2023.",
};

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <Navigation />
      <Hero />
      <Collections />
      <AboutStory />
      <CTA />
      <Footer />
    </div>
  );
}
