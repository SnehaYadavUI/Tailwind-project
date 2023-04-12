import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { menuIcon } from "../utils";
import SideBarContent from "../components/SideBarContent";

const SideBarWithContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 100);
  };
  return (
    <div>
      <div className="flex w-full h-screen bg-sky">
        <div
          className={`relative w-auto w-60 ${
            window.innerWidth > 768
              ? "show ml-0"
              : menuOpen
              ? "show ml-[0] ease-in duration-30000000 "
              : "w-0 hidden ml-[-60]"
          } `}
        >
          <SideBar />
          <div
            onClick={() => {
              handleMenu(false);
            }}
            className="cursor-pointer absolute top-0 left-0 w-[100vw] h-screen overlay bg-[rgba(0,0,0,0.6)] md:hidden"
          ></div>
        </div>
        <div className="w-full p-5 bg md:ml-60">
          <div onClick={handleMenu}>{menuIcon}</div>
          <SideBarContent />
        </div>
      </div>
    </div>
  );
};

export default SideBarWithContent;
