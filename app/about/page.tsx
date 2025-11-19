import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Award, Users, Globe, Heart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FeaturesCard from "@/components/FeaturesCard";
import FAQ from "@/components/FAQ";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We source only the finest materials from trusted quarries worldwide.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced professionals guide you through every step of your project.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description:
        "Direct partnerships with manufacturers ensure authenticity and value.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority, from selection to installation.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      event: "Founded Timeless Touch Ceramics with a vision for quality",
    },
    { year: "2024", event: "Expanded to 5 showrooms across the region" },
    { year: "2025", event: "Reached milestone of 10,000 satisfied customers" },
  ];

  const faqItems = [
    {
      question: "What types of materials do you offer?",
      answer:
        "We offer a wide range of premium natural stones including marble, granite, travertine, limestone, and quartzite, as well as high-quality ceramic and porcelain tiles. All materials are sourced directly from trusted quarries and manufacturers worldwide.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Yes, we work with a network of certified installers who specialize in natural stone and tile installation. We can connect you with experienced professionals in your area to ensure your project is completed to the highest standards.",
    },
    {
      question: "Can I visit your showroom to see samples?",
      answer:
        "Absolutely! We have multiple showrooms across the region where you can view our extensive collection of materials in person. Our showrooms feature full-size displays and sample areas to help you visualize your project. Please contact us to schedule a visit.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a flexible return policy on unused materials within 30 days of purchase, provided they are in their original packaging and condition. Custom orders and cut materials are non-returnable. Please contact our customer service team for specific return arrangements.",
    },
    {
      question: "How do I calculate how much material I need?",
      answer:
        "Our team can help you calculate the exact amount of material needed for your project. Simply provide us with your room dimensions and layout, and we'll provide a detailed quote including recommended quantities with a small buffer for cuts and waste. We also offer free consultations for larger projects.",
    },
  ];

  return (
    <div className="bg-neutral-50">
      <div className="container pt-8">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>
      <section className="section-darker">
        <div className="container text-center">
          <h1 className="title-hero text-neutral-950">
            About Timeless Touch Ceramics
          </h1>
          <p className="text-body">
            3 years of excellence in providing premium tiles and natural stones
            for spaces that inspire.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AspectRatio ratio={1} className="relative overflow-hidden">
              <Image
                src="/images/cottage.jpg"
                alt="Our story"
                fill
                className="object-cover"
              />
            </AspectRatio>
            <div>
              <h2 className="title-section">Our Story</h2>
              <p className="text-body">
                Timeless Touch Ceramics was founded in 2023 with a simple
                mission: to bring the world&apos;s finest natural stones and
                tiles to homes and businesses across the country. What started
                as a small showroom has grown into a trusted name in the
                industry.
              </p>
              <p className="text-body">
                We believe that the right materials can transform any space into
                something extraordinary. That&apos;s why we personally visit
                quarries, inspect materials, and build lasting relationships
                with manufacturers worldwide.
              </p>
              <p className="text-body">
                Today, we&apos;re proud to serve thousands of satisfied
                customers, from homeowners creating their dream kitchens to
                architects designing landmark commercial spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-darker">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title-section">Our Values</h2>
            <p className="text-body">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <FeaturesCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                variant="vertical"
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title-section">Our Journey</h2>
            <p className="text-body">Milestones that shaped our story</p>
          </div>

          <div className="flex flex-col gap-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <span className="text-primary-500">{item.year}</span>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <p className="text-body">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
    </div>
  );
}
