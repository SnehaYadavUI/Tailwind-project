import React from "react";
import { itemList, logoIpsmu } from "../utils";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="sticky top-0 left-0 z-20 w-full h-auto bg-dark">
      <div className="flex items-center justify-between max-w-screen-xl py-5 mx-auto text-white px-7 ">
        <Link
          className="text-6xl font-semibold text-rose-600 font-dancing"
          to="/"
        >
          {logoIpsmu}
        </Link>
        <input type="checkbox" className="hidden peer" id="nav-check" />

        <div className="nav-links max-md:hidden max-md:peer-checked:block max-md:fixed max-md:top-[72px] max-md:left-0 max-md:w-full max-md:h-full max-md:bg-dark z-20">
          <ul className="flex items-center h-full max-md:pb-20 max-md:flex-col max-md:justify-center max-md:items-center md:-mr-7">
            {itemList.map((item, index) => {
              return (
                <li className="px-5" key={index}>
                  <Link
                    to={item.url}
                    className="block p-3 text-base font-medium hover:opacity-75"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col justify-center nav-button md:hidden">
          <label htmlFor="nav-check" className="cursor-pointer">
            <span className="block w-8 h-px mb-2 text-white bg-white"></span>
            <span className="block w-8 h-px mb-2 text-white bg-white"></span>
            <span className="block w-8 h-px mb-2 text-white bg-white"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
