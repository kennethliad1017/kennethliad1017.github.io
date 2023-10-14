"use client";
import { useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import useIsMobile from "@/hooks/useIsMobile";
import Parallax from "./Parallax";

type PersonalFinanceScreenProps = {
  index: number;
  projectTitle: string;
  onViewChanged: (value: boolean, index: number) => void;
};

function PersonalFinanceApp({
  index,
  projectTitle,
  onViewChanged,
}: PersonalFinanceScreenProps) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount: 0.33,
    once: false,
  });

  const onChangedHandler = (inView: boolean, selectedIndex: number) => {
    onViewChanged(inView, selectedIndex);
  };

  useLayoutEffect(() => {
    if (inView) {
      onChangedHandler(inView, index);
    } else {
      onChangedHandler(inView, -1);
    }
  }, [inView, index]);

  return (
    <motion.div ref={ref} className="relative w-full h-screen mt-[40dvh]">
      <Parallax
        offset={0.4}
        className={`absolute transition-transform duration-200 ease-out ${
          isMobile ? "-bottom-[110vh]" : "top-[75dvh]"
        }`}
        src="/images/budget_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{ left: "5dvw", scale: isMobile ? 0.5 : 0.7 }}
      />
      <Parallax
        offset={0.03125}
        className={`absolute transition-transform duration-200 ease-out ${
          isMobile ? "-bottom-[105vh]" : "top-[55dvh]"
        }`}
        src="/images/saving_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{ right: "5dvw", scale: isMobile ? 0.45 : 0.6 }}
      />
      <Parallax
        offset={1.62}
        className={`absolute transition-transform duration-200 ease-out ${
          isMobile ? "-bottom-[110vh]" : "top-[90dvh]"
        }`}
        src="/images/home_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          left: isMobile ? "-8dvw" : "0dvw",
          scale: isMobile ? 0.7 : 1,
        }}
      />
      <Parallax
        offset={0.77}
        className={`absolute transition-transform duration-200 ease-out top-[45dvh] ${
          isMobile ? "-bottom-[125vh]" : ""
        }`}
        src="/images/analytics_PersonalFinance.svg"
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

export default PersonalFinanceApp;
