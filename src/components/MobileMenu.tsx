import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="absolute w-full h-full bg-black/90 backdrop-blur-lg z-40">
      <div className="flex flex-col space-y-7 pt-32">
        <Link
          href="#"
          className="text-white/10 text-7xl font-extrabold text-right pr-[28px]"
        >
          About
        </Link>
        <Link
          href="/works"
          className="text-white/10 text-7xl font-extrabold text-right pr-[28px]"
        >
          Works
        </Link>
        <Link
          href=""
          className="text-white/90 text-7xl font-extrabold text-right pr-[28px]"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
