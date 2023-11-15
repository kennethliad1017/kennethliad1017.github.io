"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Parallax from "./Parallax";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

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
      <motion.div
        ref={ref}
        className="relative w-full h-screen mt-[30vh] md:mt-[40vh] px-0 md:px-4"
      >
        <Parallax
          offset={0.4375}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[136dvh]"
          )}
          src="/images/edit_Todoish.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{ left: "4dvw", scale: 0.5 }}
        />
        <Parallax
          offset={1.65}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[218dvh]"
          )}
          src="/images/home_Todoish.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            left: "-16dvw",
            scale: 0.7,
          }}
        />
        <Parallax
          offset={1.25}
          className={cn(
            "absolute transition-transform duration-200 ease-out top-[196dvh]"
          )}
          src="/images/create_Todoish.svg"
          alt={`${projectTitle} app screen`}
          width={438}
          height={798}
          style={{
            right: "-18dvw",
            scale: 0.62,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-screen mt-[30vh] md:mt-[40vh] px-4"
    >
      <Parallax
        offset={0.875}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[75dvh]"
        )}
        src="/images/edit_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{ left: "5dvw", scale: 0.7 }}
      />
      <Parallax
        offset={3.3}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[90dvh]"
        )}
        src="/images/home_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          left: "0dvw",
          scale: 1,
        }}
      />
      <Parallax
        offset={1.8}
        className={cn(
          "absolute transition-transform duration-200 ease-out top-[45dvh]"
        )}
        src="/images/create_Todoish.svg"
        alt={`${projectTitle} app screen`}
        width={438}
        height={798}
        style={{
          right: "2dvw",
          scale: 0.9,
        }}
      />
    </motion.div>
  );
}

export default TodoishApp;
