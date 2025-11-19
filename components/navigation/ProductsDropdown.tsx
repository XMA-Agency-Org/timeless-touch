"use client";

import NavigationDropdown, { Category } from "./NavigationDropdown";

interface ProductsDropdownProps {
  navLinksRef: React.RefObject<HTMLDivElement | null>;
}

const productCategories: Category[] = [
  {
    name: "Marble",
    slug: "marble",
    image:
      "/images/Exotic-Travertine-Ivory-Stripe-qxti2zc4r56gc8v6pnujh77ae4t684kdfhln9no0w0.jpg",
    description: "Timeless elegance and luxury",
  },
  {
    name: "Granite",
    slug: "granite",
    image: "/images/lava-blue.jpg",
    description: "Natural strength and durability",
  },
  {
    name: "Ceramic Tiles",
    slug: "ceramic",
    image: "/images/concept-light-gray-.jpg",
    description: "Versatile beauty for every space",
  },
  {
    name: "Porcelain Tiles",
    slug: "porcelain",
    image: "/images/cottage.jpg",
    description: "Modern sophistication",
  },
];

export default function ProductsDropdown({
  navLinksRef,
}: ProductsDropdownProps) {
  return (
    <NavigationDropdown
      navLinksRef={navLinksRef}
      href="/products"
      label="PRODUCTS"
      categories={productCategories}
      queryParam="categories"
      viewAllText="View All Products →"
    />
  );
}
