import Menu from "./icons/Menu";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const MotionLink = motion(Link);

  return (
    <nav className="flex items-center justify-between px-[24px] lg:px-[48px] h-20 lg:h-28 fixed w-full bg-black/95 z-50 backdrop-blur-md">
      <Link href="/" className="lg:text-lg inline-block">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
          }}
        >
          {" "}
          Nnamdi Umeh
        </motion.span>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.2 },
        }}
        className="hidden lg:flex space-x-8"
      >
        <Link
          href="/about"
          className="lg:text-lg hover:animate-pulse active:font-bold active:animate-none"
        >
          About
        </Link>
        <Link
          href="/works"
          className="lg:text-lg hover:animate-pulse active:animate-none"
        >
          Work
        </Link>
        <a
          href="/CV_NnamdiUmeh.pdf"
          target="_blank"
          className="lg:text-lg hover:animate-pulse active:animate-none"
        >
          Resume
        </a>
      </motion.div>
      <Menu />
    </nav>
  );
};
export default Navbar;
