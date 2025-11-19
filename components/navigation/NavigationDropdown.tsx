"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import NavLink from "@/components/NavLink";

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}

interface NavigationDropdownProps {
  navLinksRef: React.RefObject<HTMLDivElement | null>;
  href: string;
  label: string;
  categories: Category[];
  queryParam?: string;
  viewAllText: string;
}

export default function NavigationDropdown({
  navLinksRef,
  href,
  label,
  categories,
  queryParam = "categories",
  viewAllText,
}: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, navLinksRef]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to allow moving to dropdown
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <NavLink
        href={href}
        className="flex items-center gap-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {label}
      </NavLink>

      {isOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[600px] p-6 bg-neutral-50 border border-neutral-300 rounded-md shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200"
        >
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`${href}?${queryParam}=${category.slug}`}
                onClick={() => setIsOpen(false)}
                className="group relative block rounded-lg overflow-hidden border border-neutral-200 transition-all hover:shadow-sm"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="p-4 bg-neutral-50">
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link href={href} onClick={() => setIsOpen(false)} className="">
            <div className="mt-8 p-3 rounded-lg flex justify-center bg-neutral-200/60 hover:bg-neutral-200/80 transition-all duration-200 ease-in-out text-sm font-medium text-neutral-900">
              {viewAllText}
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
