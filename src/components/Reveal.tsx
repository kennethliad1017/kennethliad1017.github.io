import { PropsWithChildren } from "react";
import {
  motion,
  VariantLabels,
  AnimationControls,
  TargetAndTransition,
  Target,
  Transition,
  AnimatePresence,
} from "framer-motion";

type SwipeRevealProps = PropsWithChildren & {
  isInView: boolean;
  className?: string;
  swipeClass?: string;
  swipeInitial?: boolean | Target | VariantLabels;
  swipeAnimate?:
    | boolean
    | VariantLabels
    | AnimationControls
    | TargetAndTransition;
  swipeExit?: TargetAndTransition | VariantLabels;
  swipeTransition?: Transition;
  revealTextTransition?: Transition;
};

const Reveal = ({
  className,
  isInView,
  children,
  swipeInitial = { width: "0%", left: "0%" },
  swipeClass = "dark:bg-gray-50 bg-gray-900",
  swipeAnimate = {
    left: ["0%", "0%", "0%", "100%"],
    width: ["0%", "100%", "100%", "0%"],
  },
  swipeExit = {
    width: "0%",
    left: "100%",
  },
  swipeTransition = {
    duration: 1.125,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
  },
  revealTextTransition = {
    duration: 0.5,
    delay: 0.7,
  },
}: SwipeRevealProps) => {
  return (
    <div
      className={`w-full relative overflow-hidden ${
        className ? className : ""
      }`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        className="w-full"
        animate={isInView && "visible"}
        transition={revealTextTransition}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        <motion.div
          className={`absolute top-0 left-0 right-0 bottom-0 ${swipeClass}`}
          style={{
            width: "100%",
          }}
          initial={swipeInitial}
          animate={swipeAnimate}
          exit={swipeExit}
          transition={swipeTransition}
        />
      </AnimatePresence>
    </div>
  );
};

export default Reveal;
