"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Parallax from "./Parallax";
import useIsMobile from "@/hooks/useIsMobile";

type TodoishScreenProps = {
  index: number;
  projectTitle: string;
  onViewChanged: (value: boolean, index: number) => void;
};

function TodoishApp({
  index,
  projectTitle,
  onViewChanged,
}: TodoishScreenProps) {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: isMobile ? 0.25 : 0.33,
    once: false,
  });

  const onChangedHandler = (inView: boolean, selectedIndex: number) => {
    onViewChanged(inView, selectedIndex);
  };

  useEffect(() => {
    if (inView) {
      onChangedHandler(inView, index);
    } else {
      onChangedHandler(inView, -1);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-screen mt-[30vh] md:mt-[40vh] px-4"
    >
      <Parallax
        offset={0.875}
        className={`absolute transition-transform duration-200 ease-out ${
          isMobile ? "-bottom-[110vh]" : "top-[75dvh]"
        }`}
        src="/images/edit_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{ left: "5dvw", scale: isMobile ? 0.5 : 0.7 }}
      />
      <Parallax
        offset={3.3}
        className={`absolute transition-transform duration-200 ease-out ${
          isMobile ? "-bottom-[110vh]" : "top-[90dvh]"
        }`}
        src="/images/home_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          left: isMobile ? "-8dvw" : "0dvw",
          scale: isMobile ? 0.7 : 1,
        }}
      />
      <Parallax
        offset={1.8}
        className={`absolute transition-transform duration-200 ease-out top-[45dvh] ${
          isMobile ? "-bottom-[125vh]" : ""
        }`}
        src="/images/create_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          right: "2dvw",
          scale: isMobile ? 0.62 : 0.9,
        }}
      />
    </motion.div>
  );
}

export default TodoishApp;
