"use client";

import { motion, useInView } from "framer-motion";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Reveal from "./Reveal";
import { Environment, Lightformer, Stage } from "@react-three/drei";
import { useTheme } from "next-themes";

import ComputerSetup from "@/components/ComputerSetup";
import GamingChairTop from "@/components/GamingChairTop";
import MacScreen from "@/components/MacScreen";
import PcScreen from "@/components/PcScreen";
import SteamdeckScreen from "@/components/Steamdeck_screen";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const [copied, setCopied] = useState(false);
  const inView = useInView(containerRef, {
    once: true,
  });

  const handleClick = () => {
    setIsPressed(true);
    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText("kennethnungay.liad+portfolio@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setIsPressed(false);
    }, 150);
    setTimeout(() => {
      setCopied(false);
    }, 1000 * 2);
  };

  return (
    <div className="md:grid md:grid-cols-2 flex flex-col px-4 w-full h-screen relative">
      <motion.div
        ref={containerRef}
        className="md:h-screen w-full flex justify-center md:pl-32 items-center z-20"
        style={{ opacity: inView ? 1 : 0 }}
      >
        <div>
          <Reveal
            className="mb-1"
            swipeClass="dark:bg-blue-400 bg-blue-600"
            isInView={inView}
            swipeAnimate={{
              left: ["0%", "0%", "100%"],
              width: ["0%", "100%", "0%"],
            }}
            revealTextTransition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <p className="text-body1 md:text-subtitle2 text-blue-500">
              Hi, my name is
            </p>
          </Reveal>
          <Reveal
            className="mb-1"
            swipeClass="dark:bg-blue-400 bg-blue-600"
            isInView={inView}
            swipeAnimate={{
              left: ["0%", "0%", "100%"],
              width: ["0%", "100%", "0%"],
            }}
            revealTextTransition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <h1 className="text-h4 md:text-h3">Kenneth</h1>
          </Reveal>
          <Reveal
            className="mb-1"
            isInView={inView}
            swipeClass="dark:bg-blue-400 bg-blue-600"
            swipeAnimate={{
              left: ["0%", "0%", "100%"],
              width: ["0%", "100%", "0%"],
            }}
            revealTextTransition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <h2 className="text-subtitle2 md:text-h5">
              I&apos;m a{" "}
              <span className="text-blue-500">
                Frontend Web and Mobile Developer
              </span>
            </h2>
          </Reveal>
          <Reveal
            className="mb-1"
            isInView={inView}
            swipeClass="dark:bg-blue-400 bg-blue-600"
            swipeAnimate={{
              left: ["0%", "0%", "100%"],
              width: ["0%", "100%", "0%"],
            }}
            revealTextTransition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <p className="text-body2 md:text-subtitle1">
              A Frontend Web and Mobile Developer based in Philippines. I
              specialize in creating exceptional digital experiences.
            </p>
          </Reveal>
          <div className="relative w-fit">
            {copied && (
              <div className="absolute -top-[120%] left-1/4 z-10 inline-block px-3 py-2 text-sm font-medium text-white duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
                Copied!
                <div className="tooltip-arrow absolute -bottom-1 left-0 border-gray-900 dark:border-gray-700" />
              </div>
            )}
            <Reveal
              className="mt-10"
              isInView={inView}
              swipeClass="dark:bg-blue-400 bg-blue-600"
              swipeAnimate={{
                left: ["0%", "0%", "100%"],
                width: ["0%", "100%", "0%"],
              }}
              revealTextTransition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <button
                type="button"
                aria-pressed={isPressed}
                onClick={handleClick}
                className="px-4 py-2 bg-blue-600 dark:bg-blue-400 dark:text-gray-900 text-gray-50 rounded-md aria-pressed:bg-gray-700"
              >
                Contact Me
              </button>
            </Reveal>
          </div>
        </div>
      </motion.div>

      {/* <Canvas
        dpr={2}
        camera={{
          position: [1, 0.66, 1.25],
          fov: 50,
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Stage>
            <ambientLight />
            <Environment>
              <Lightformer
                form="rect" // circle | ring | rect (optional, default = rect)
                intensity={1} // power level (optional = 1)
                color="white" // (optional = white)
                scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
                target={[0, 0, 0]} // Target position (optional = undefined)
              />
            </Environment>
            <ComputerSetup />
            <GamingChairTop />
            <PcScreen />
            <MacScreen />
            <SteamdeckScreen />
          </Stage>
        </Suspense>
      </Canvas> */}
    </div>
  );
}
