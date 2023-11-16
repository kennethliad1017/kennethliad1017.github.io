"use client";

import React from "react";
import SocialIcons from "./SocialIcons";
import { useScroll, useTransform, motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

function Socials() {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  if (isMobile) {
    return (
      <motion.div
        className="fixed left-0 bottom-0 w-14  my-auto flex flex-col items-center gap-2 ml-2 z-50"
        style={{ y: y }}
      >
        <a
          href="https://www.github.com/kennethliad1017"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:no-underline text-gray-700 dark:text-gray-50"
        >
          <SocialIcons icon="github-logo" size="2.75rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/kenneth-liad-60b095228"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:no-underline text-gray-700 dark:text-gray-50"
        >
          <SocialIcons icon="linkedin-logo" size="2.75rem" />
        </a>
        <div className="w-0.5 h-28 bg-gray-500/30" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed left-0 bottom-0 w-14  my-auto flex flex-col items-center gap-2 ml-2 z-50"
      style={{ y: y }}
    >
      <a
        href="https://www.github.com/kennethliad1017"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:no-underline text-gray-400 dark:hover:text-gray-50 hover:text-gray-700 z-50"
      >
        <SocialIcons icon="github-logo" size="2.75rem" />
      </a>
      <a
        href="https://www.linkedin.com/in/kenneth-liad-60b095228"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:no-underline text-gray-400  dark:hover:text-gray-50 hover:text-gray-700 z-50"
      >
        <SocialIcons icon="linkedin-logo" size="2.75rem" />
      </a>
      <div className="w-0.5 h-28 bg-gray-500/30" />
    </motion.div>
  );
}

export default Socials;
