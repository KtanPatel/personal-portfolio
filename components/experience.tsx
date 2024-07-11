"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { experiencesData } from "@/lib/data";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <Timeline data={experiencesData} />
    </section>
  );
};

export default Experience;
