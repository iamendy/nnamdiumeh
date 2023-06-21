import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import { useContext } from "react";
import toggleContext from "@/contexts/ToggleContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useContext(toggleContext);

  return (
    <>
      <Navbar />
      {toggle && <MobileMenu />}
      {children}
      <Footer />
    </>
  );
};
export default Layout;
