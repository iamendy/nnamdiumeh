import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
