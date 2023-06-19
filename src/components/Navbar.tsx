import Menu from "./icons/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[24px] lg:px-[48px] h-20">
      <span className="lg:text-lg inline-block">Nnamdi Umeh</span>
      <div className="hidden lg:flex space-x-16">
        <Link href="#" className="lg:text-lg">
          Work
        </Link>
        <Link href="#" className="lg:text-lg">
          About
        </Link>
      </div>
      <Menu />
    </nav>
  );
};
export default Navbar;
