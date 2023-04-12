import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const TailwindMenuBtn = (props) => {
  return (
    <div className="flex -mr-2 md:hidden">
      {/* Mobile menu button */}
      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none ">
        <span className="sr-only">Open main menu</span>
        {props.open ? (
          <XMarkIcon className="block w-6 h-6 text-white" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block w-6 h-6 text-white" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
};

export default TailwindMenuBtn;
