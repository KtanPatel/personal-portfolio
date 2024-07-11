"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a postgraduate degree in{" "}
        <span className="font-medium">Computer Science</span>, Upon graduation,
        I embarked on a journey to become a{" "}
        <span className="font-medium">full-stack web developer</span>. What
        drives me most is the thrill of untangling a complex problem and
        crafting an effective solution. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, and React Native
        </span>{" "}
        allowing me to build dynamic and engaging applications across the{" "}
        <span className="italic">web and mobile platforms</span>. I am also
        familiar with{" "}
        <span className="font-medium">
          TypeScript, electronJS, Python, Flask and fastapi
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and anime series, or taking walks for a
        breath of fresh air.
      </p>
    </motion.section>
  );
}
