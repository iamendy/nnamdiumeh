import Menu from "./icons/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[24px] lg:px-[48px] h-20 lg:h-28 fixed w-full bg-black/95 z-50 backdrop-blur-md">
      <Link href="/" className="lg:text-lg inline-block">
        Nnamdi Umeh
      </Link>
      <div className="hidden lg:flex space-x-8">
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
      </div>
      <Menu />
    </nav>
  );
};
export default Navbar;
