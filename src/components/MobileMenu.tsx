import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="hidden absolute w-full h-full bg-black/90 backdrop-blur-lg">
      <div className="flex flex-col space-y-7 pt-16">
        <Link
          href="#"
          className="text-white/10 text-7xl font-extrabold text-right pr-[28px]"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-white/10 text-7xl font-extrabold text-right pr-[28px]"
        >
          Works
        </Link>
        <Link
          href="#"
          className="text-white/90 text-7xl font-extrabold text-right pr-[28px]"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
