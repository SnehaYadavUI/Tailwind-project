import React from "react";
import { footerIcon, logoIpsmu } from "../utils";
import { Link } from "react-router-dom";

const FooterLeftContent = () => {
  return (
    <div>
      <div className="text-rose-600">{logoIpsmu}</div>
      <p className="max-w-xs mt-4 text-left text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
        cupiditate quae nam molestias.
      </p>

      <ul className="flex gap-6 mt-8">
        {footerIcon.map((items, index) => {
          return (
            <li key={index}>
              <Link
                to
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">{items.name}</span>

                {items.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLeftContent;
