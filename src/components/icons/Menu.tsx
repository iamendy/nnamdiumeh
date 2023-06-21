import { useContext } from "react";
import toggleContext from "@/contexts/ToggleContext";

const Menu = () => {
  const { toggle, setToggle } = useContext(toggleContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6 font-bold md:hidden"
      onClick={() => setToggle(!toggle)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  );
};
export default Menu;
