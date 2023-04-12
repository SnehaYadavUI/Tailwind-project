import React from "react";
import { itemList } from "../utils";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed z-10 h-screen p-4 w-60 bg-dark">
      <div className="mb-20 text-6xl font-semibold mt-7 font-dancing text-sky hover:text-gradient-to-r from-cyan-500 to-blue-500">
        <a href="/" className="font-dancing">
          Logo
        </a>
      </div>
      <ul>
        {itemList.map((item, index) => {
          return (
            <li key={index} className="mb-4 text-left text-white">
              <Link to={item.url} className="flex">
                <span className="pr-3">{item.img}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
