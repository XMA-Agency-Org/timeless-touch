"use client";

import NavigationDropdown, { Category } from "./NavigationDropdown";

interface CataloguesDropdownProps {
  navLinksRef: React.RefObject<HTMLDivElement | null>;
}

const catalogueCategories: Category[] = [
  {
    name: "Large Format Tiles",
    slug: "large-format",
    image: "/images/slider-qxbxlb1pnn7lnr37mcfhy1qfctmztsja829dgwhocg.jpg",
    description: "120x240, 800x2400, 1200x3200mm",
  },
  {
    name: "Standard Tiles",
    slug: "standard",
    image: "/images/cottage-tile.jpg",
    description: "60x120, 60x60cm collections",
  },
  {
    name: "Premium Collections",
    slug: "premium",
    image: "/images/concept-light-gray-.jpg",
    description: "Sintered stone & specialty tiles",
  },
  {
    name: "Swimming Pool Tiles",
    slug: "pool",
    image: "/images/slider-lava-blue.jpg",
    description: "Specialized pool tile collections",
  },
];

export default function CataloguesDropdown({
  navLinksRef,
}: CataloguesDropdownProps) {
  return (
    <NavigationDropdown
      navLinksRef={navLinksRef}
      href="/catalogues"
      label="CATALOGUES"
      categories={catalogueCategories}
      queryParam="category"
      viewAllText="View All Catalogues →"
    />
  );
}

