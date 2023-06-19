import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const x = useMotionValue(0);
  const xRange = [0, 50, 100, 150, 200];
  const opacityRange = [0, 1, 1, 0, 1];
  const opacity = useTransform(x, xRange, opacityRange);

  return (
    <motion.div
      animate={{ x: xRange, opacity: opacityRange, transitionDuration: 1 }}
      className="bg-green-400 w-20 h-20"
    ></motion.div>
  );
}
