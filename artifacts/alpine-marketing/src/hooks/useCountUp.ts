import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, end, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [end, duration, motionValue]);

  return count;
}
