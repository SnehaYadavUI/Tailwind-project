import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const TailwindMobileMenuItem = (props) => {
  return (
    <div>
      <Disclosure.Panel className="fixed left-0 z-10 w-full h-full md:hidden top-16 bg-dark">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {props.navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={props.classNames(
                item.current
                  ? "bg-gray-900 text-sky"
                  : "hover:bg-gray-700 text-white hover:text-sky",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>

        {/* user details */}
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src={props.user.imageUrl}
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {props.user.name}
              </div>
              <div className="text-sm font-medium leading-none text-sky">
                {props.user.email}
              </div>
            </div>
            <button
              type="button"
              className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="px-2 mt-3 space-y-1">
            {props.userNavigation.map((item) => (
              <Link
                key={item.name}
                as="a"
                to={item.to}
                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700 hover:text-sky"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Disclosure.Panel>
    </div>
  );
};

export default TailwindMobileMenuItem;
