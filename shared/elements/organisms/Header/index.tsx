import { useState } from "react";
import { Menu } from "../../molecules";
import { GridWrapper } from "../GridWrapper";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <GridWrapper className="fixed w-screen bg-dark-88 h-14">
      <div className="flex items-center col-span-2 h-14">
        <img src="/logo.png" alt="Yumit Logo" />
      </div>
      <div className="flex items-center justify-end col-span-2">
        <span onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.14 1.42L12.73 0L7.07 5.66L1.41 0L0 1.42L5.66 7.07L0 12.73L1.41 14.14L7.07 8.49L12.73 14.14L14.14 12.73L8.48 7.07L14.14 1.42Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.7872 0H5.46722V2H18.7872V0Z" fill="white" />
              <path
                d="M18.7872 15.0601H5.46722V17.0601H18.7872V15.0601Z"
                fill="white"
              />
              <path
                d="M18.7972 7.53003H0.657227V9.53003H18.7972V7.53003Z"
                fill="white"
              />
            </svg>
          )}
        </span>
      </div>
      {openMenu && <Menu onClose={() => setOpenMenu(false)} />}
    </GridWrapper>
  );
};
