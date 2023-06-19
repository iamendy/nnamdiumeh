import Menu from "./icons/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[24px] lg:px-[48px] h-20">
      <Link href="/" className="lg:text-lg inline-block">
        Nnamdi Umeh
      </Link>
      <div className="hidden lg:flex space-x-8">
        <Link href="/about" className="lg:text-lg">
          About
        </Link>
        <Link href="/work" className="lg:text-lg">
          Work
        </Link>
        <a href="#" target="_blank" className="lg:text-lg">
          Resume
        </a>
      </div>
      <Menu />
    </nav>
  );
};
export default Navbar;
