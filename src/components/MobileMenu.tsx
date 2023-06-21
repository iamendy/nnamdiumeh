import Link from "next/link";
import { motion } from "framer-motion";
import Arrow from "./icons/Arrow";
import { useContext } from "react";
import toggleContext from "@/contexts/ToggleContext";
import { useRouter } from "next/router";
import { slideMenu, subMenu } from "@/lib/motion";

const MobileMenu = () => {
  const { toggle, setToggle } = useContext(toggleContext);
  const MotionLink = motion(Link);
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      variants={slideMenu}
      animate={toggle ? "visible" : "hidden"}
      className="fixed w-full top-0 left-0 flex flex-col justify-between h-full bg-black backdrop-blur-lg z-40"
    >
      <div className="flex flex-col space-y-7 pt-32 pr-[28px]">
        <MotionLink
          variants={subMenu}
          href="/"
          className={`${
            router?.pathname === "/" ? "text-white" : "text-white/60"
          } text-7xl font-extrabold text-right`}
          onClick={() => setToggle(!toggle)}
        >
          Home
        </MotionLink>

        <MotionLink
          variants={subMenu}
          href="/about"
          className={`${
            router?.pathname === "/about" ? "text-white" : "text-white/60"
          } text-7xl font-extrabold text-right`}
          onClick={() => setToggle(!toggle)}
        >
          About
        </MotionLink>

        <MotionLink
          variants={subMenu}
          href="/works"
          className={`${
            router?.pathname === "/works" ? "text-white" : "text-white/60"
          } text-7xl font-extrabold text-right tracking-tight`}
          onClick={() => setToggle(!toggle)}
        >
          Work
        </MotionLink>
      </div>

      <div className="px-[24px] py-7 flex items-center justify-between lg:space-x-6">
        <motion.a
          variants={subMenu}
          href="https://linkedin.com/in/iamendy"
          target="blank"
          className="flex items-center hover:animate-pulse"
        >
          <span>LinkedIn</span> &nbsp; <Arrow />
        </motion.a>
        <motion.a
          variants={subMenu}
          href="https://twitter.com/nnamdipremium"
          target="blank"
          className="flex items-center hover:animate-pulse"
        >
          <span>Twitter</span> &nbsp; <Arrow />
        </motion.a>
        <motion.a
          variants={subMenu}
          href="https://resume.io/r/nBWabjUEK"
          target="blank"
          className="flex items-center hover:animate-pulse"
        >
          <span>Resume</span> &nbsp; <Arrow />
        </motion.a>
      </div>
    </motion.div>
  );
};
export default MobileMenu;
