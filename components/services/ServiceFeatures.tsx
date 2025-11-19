"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Wrench,
  Palette,
  Truck,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FeaturesCard from "@/components/FeaturesCard";

export default function ServiceFeatures() {
  const services = [
    {
      icon: Wrench,
      title: "Expert Installation",
      description:
        "Professional installation by certified technicians with years of experience",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description:
        "Tailored design solutions to match your vision and space requirements",
    },
    {
      icon: Truck,
      title: "Delivery & Logistics",
      description:
        "Reliable delivery service ensuring your materials arrive safely and on time",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Comprehensive warranty on all installations and materials",
    },
    {
      icon: Users,
      title: "Consultation Services",
      description:
        "Expert advice from our design team to help you make the right choices",
    },
    {
      icon: CheckCircle2,
      title: "Project Management",
      description:
        "End-to-end project coordination ensuring smooth execution from start to finish",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.58, 1] as const,
      },
    },
  };

  return (
    <section className="section relative" ref={ref}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/blueprint.jpg"
          alt="blueprint"
          fill
          className="object-fit opacity-10"
          sizes="100vw"
        />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-neutral-50) 0%, transparent 15%, transparent 85%, var(--color-neutral-50) 100%)",
          }}
        />
      </div>
      <div className="container md:px-4 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0, 0, 0.58, 1] as const }}
        >
          <h2 className="title-section">Our Services</h2>
          <p className="text-body">
            Comprehensive solutions for all your tile and natural stone needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="h-full">
              <FeaturesCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
