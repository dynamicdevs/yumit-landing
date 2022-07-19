import Head from "next/head";
import GridWrapper from "../GridWrapper";

const Navbar = () => (
  <GridWrapper className="bg-primary-wb-white w-screen fixed">
    <div className="col-span-2 h-26 md:h-32 lg:h-36 flex items-center">
      <img
        src="/logo.png"
        alt="Yumit Logo"
        className="w-[148px] hidden md:block"
      />
      <img
        src="/logo-mini.png"
        alt="Yumit Logo"
        className="w-[148px] md:hidden"
      />
    </div>
  </GridWrapper>
);

export default Navbar;
