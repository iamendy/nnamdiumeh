import Menu from "./icons/Menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[24px] h-20">
      <span className="text-base">Nnamdi Umeh</span>
      <Menu />
    </nav>
  );
};
export default Navbar;
