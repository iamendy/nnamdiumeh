import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MobileMenu />
      {children}
    </>
  );
};
export default Layout;
