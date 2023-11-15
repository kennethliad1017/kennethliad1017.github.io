"use client";
import { useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import useIsMobile from "@/hooks/useIsMobile";
import Parallax from "./Parallax";
import { cn } from "@/lib/utils";

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
  }, [inView]);

  if (isMobile) {
    return (
      <motion.div ref={ref} className="relative w-full h-screen mt-[40dvh]">
        <Parallax
          offset={0.25}
          className={`absolute transition-transform duration-200 ease-out top-[127dvh]`}
          src="/images/budget_PersonalFinance.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            left: "-22vw",
            scale: 0.5,
          }}
        />
        <Parallax
          offset={0.0625}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[109dvh]"
          )}
          src="/images/saving_PersonalFinance.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            right: "-20vw",
            scale: 0.45,
          }}
        />
        <Parallax
          offset={0.81}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[142dvh]"
          )}
          src="/images/home_PersonalFinance.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            left: "-16vw",
            scale: 0.7,
          }}
        />
        <Parallax
          offset={0.6}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[139dvh]"
          )}
          src="/images/analytics_PersonalFinance.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            right: "-20vw",
            scale: 0.62,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref} className="relative w-full h-screen mt-[40dvh]">
      <Parallax
        offset={0.4}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[75dvh]"
        )}
        src="/images/budget_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          left: "5vw",
          scale: 0.7,
        }}
      />
      <Parallax
        offset={0.03125}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[55dvh]"
        )}
        src="/images/saving_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          right: "5vw",
          scale: 0.6,
        }}
      />
      <Parallax
        offset={1.62}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[90dvh]"
        )}
        src="/images/home_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          left: "0vw",
          scale: 1,
        }}
      />
      <Parallax
        offset={0.77}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[45dvh]"
        )}
        src="/images/analytics_PersonalFinance.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          right: "2vw",
          scale: 0.9,
        }}
      />
    </motion.div>
  );
}

export default PersonalFinanceApp;
