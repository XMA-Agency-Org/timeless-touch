import Breadcrumb from "@/components/Breadcrumb";
import CatalogueCard from "@/components/CatalogueCard";

export default function Catalogues() {
  const catalogues = [
    {
      title: "60X120 15mm Full Body Tiles",
      thumbnail:
        "/images/slider-qxbxlb1pnn7lnr37mcfhy1qfctmztsja829dgwhocg.jpg",
      fileUrl: "#",
      fileSize: "2.5 MB",
    },
    {
      title: "60x120cm & 60x60cm Tiles Collection",
      thumbnail: "/images/cottage-tile.jpg",
      fileUrl: "#",
      fileSize: "3.1 MB",
    },
    {
      title: "80x160CM Timeless Touch Catalog",
      thumbnail: "/images/concept-light-gray-.jpg",
      fileUrl: "#",
      fileSize: "4.2 MB",
    },
    {
      title: "120x240 9mm Tiles Collection",
      thumbnail: "/images/slider-lava-blue.jpg",
      fileUrl: "#",
      fileSize: "3.8 MB",
    },
    {
      title: "800X2400MM 15mm Tiles",
      thumbnail:
        "/images/Exotic-Travertine-Ivory-Stripe-qxti2zc4r56gc8v6pnujh77ae4t684kdfhln9no0w0.jpg",
      fileUrl: "#",
      fileSize: "5.1 MB",
    },
    {
      title: "800X3000MM 15mm Thickness",
      thumbnail: "/images/lava-blue.jpg",
      fileUrl: "#",
      fileSize: "5.5 MB",
    },
    {
      title: "1200x3200x12mm Slab Tiles",
      thumbnail: "/images/cottage.jpg",
      fileUrl: "#",
      fileSize: "6.2 MB",
    },
    {
      title: "Sintered Stone Catalogue",
      thumbnail:
        "/images/slider-qxbxlb1pnn7lnr37mcfhy1qfctmztsja829dgwhocg.jpg",
      fileUrl: "#",
      fileSize: "4.8 MB",
    },
    {
      title: "Swimming Pool Tiles - Midnight Splendor",
      thumbnail: "/images/slider-lava-blue.jpg",
      fileUrl: "#",
      fileSize: "3.9 MB",
    },
    {
      title: "Timeless Touch Ceramics Handbook",
      thumbnail: "/images/concept-light-gray-.jpg",
      fileUrl: "#",
      fileSize: "2.1 MB",
    },
  ];

  return (
    <div className="bg-neutral-50">
      <div className="container pt-8">
        <Breadcrumb items={[{ label: "Catalogues" }]} />
      </div>
      <section className="section pt-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="title-section">Product Catalogues</h1>
            <p className="text-body">
              Download our comprehensive product catalogues to explore our full
              range of premium tiles and natural stones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {catalogues.map((catalogue, index) => (
              <CatalogueCard
                key={index}
                title={catalogue.title}
                thumbnail={catalogue.thumbnail}
                fileUrl={catalogue.fileUrl}
                fileSize={catalogue.fileSize}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
