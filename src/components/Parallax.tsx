import {
  useState,
  useRef,
  useLayoutEffect,
  ReactNode,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from "react";
import {
  motion,
  useTransform,
  useSpring,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Image, { ImageProps } from "next/image";

type ParallaxProps = ImageProps & {
  offset?: number;
  initialOffset?: number;
};

const Parallax = ({
  offset = 50,
  initialOffset = 0,
  className,
  src,
  alt,
  width,
  height,
  style,
}: ParallaxProps): ReactNode => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  const { scrollY, scrollYProgress } = useScroll();

  const yRange = useTransform(
    scrollYProgress,
    [0, 1],
    [clientHeight * initialOffset, -(clientHeight * offset)]
  );
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current as HTMLElement;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return (
      <Image
        ref={ref}
        className={className}
        src={src!}
        alt={alt || "App Screen Image"}
        width={width ? width : 390}
        height={750 ?? height}
        style={style}
      />
    );
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      <Image
        className={className}
        style={style}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </motion.div>
  );
};

export default Parallax;
