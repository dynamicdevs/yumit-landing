import Footer from "../Footer";
import Navbar from "../Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
