import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import toggleContext from "@/contexts/ToggleContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useContext(toggleContext);
  //lock scoll when mobile menu is active
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [toggle]);

  return (
    <>
      <Navbar />
      <MobileMenu />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
