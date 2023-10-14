"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useScroll,
  useReducedMotion,
} from "framer-motion";
// import TagCloud from "TagCloud";

import useIsMobile from "@/hooks/useIsMobile";
import TagCloud from "./TagCloud";

const techStack = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "Tailwind",
  "React",
  "Node",
  "Android",
  "Kotlin",
  "SQL",
  "React Native",
  "Git",
  "Github",
];

export default function AboutMe() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [clientWidth, setClientWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xRange = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-clientWidth * 0.5, clientWidth * 0.25]
  );
  const x = useSpring(xRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const onResize = () => {
      setClientWidth(window.innerWidth);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // useEffect(() => {
  //   const container = ".tagcloud";
  //   const options = {
  //     radius: 380,
  //     maxSpeed: "normal",
  //     initSpeed: "normal",
  //     keep: true,
  //   };

  //   TagCloud(container, techStack, options);
  // }, []);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex items-center relative md:pl-16"
    >
      <motion.h2
        className="absolute text-h2 md:text-[7.5rem] md:font-normal font-semibold dark:text-gray-50/30 text-gray-950/20"
        style={{ x: x }}
      >
        About me
      </motion.h2>

      <div className="md:grid md:grid-cols-2 md:ml-4 md:items-center">
        <div className="flex items-center justify-center w-full h-[70vh]">
          {/* <div className={`tagcloud ${isMobile && "w-[100% important]"}`}></div> */}
          <TagCloud />
        </div>
        <div className="md:px-4 py-2 absolute top-0 right-0 bottom-0 left-0 md:relative">
          <p>
            I&lsquo;m a passionate frontend and mobile developer. Armed with a
            Bachelor of Science in Information Technology and hands-on
            experience from internships, I&lsquo;m dedicated to crafting
            captivating web and mobile experiences. With proficiency in
            technologies like HTML & CSS, NextJS (React), Jetpack Compose and
            Android (XML-based), I enjoy turning ideas into interactive reality.
            Let&apos;s collaborate and create exceptional digital solutions
            together.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
