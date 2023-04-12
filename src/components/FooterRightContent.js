import React from "react";
import {
  footerCompanyMenu,
  footerHelpfullLink,
  footerLegalLink,
  footerServiceMenu,
} from "../utils";
import { Link } from "react-router-dom";

const FooterRightContent = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 max-lg:text-left">
      <div>
        <p className="font-medium text-gray-900">Services</p>

        <nav aria-label="Footer Navigation - Services" className="mt-6">
          <ul className="space-y-4 text-sm">
            {footerServiceMenu.map((items, index) => {
              return (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {items}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">Company</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-sm">
            {footerCompanyMenu.map((items, index) => {
              return (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {items}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">Helpful Links</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-sm">
            {footerHelpfullLink.map((items, index) => {
              return (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {items}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">Legal</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            {footerLegalLink.map((items, index) => {
              return (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {items}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FooterRightContent;
