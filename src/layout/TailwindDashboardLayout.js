import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import TailwindMobileMenuItem from "../components/TailwindComponents/TailwindMobileMenuItem";
import TailwindProfileDropDown from "../components/TailwindComponents/TailwindProfileDropDown";
import TailwindMenuBtn from "../components/TailwindComponents/TailwindMenuBtn";
import { userNavigation, navigation, user } from "../utils";
import TailwindTwoColGrid from "../components/TailwindComponents/TailwindTwoColGrid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TailwindDashboardLayout() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="fixed w-full h-16 bg-dark">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link
                        to="#"
                        className="text-3xl font-semibold font-dancing text-sky"
                      >
                        Logo
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-sky"
                                : "text-gray-300 text-white  hover:bg-gray-700",
                              "rounded-md px-3 py-2 text-sm font-medium hover:text-sky"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <button
                        type="button"
                        className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>

                      <TailwindProfileDropDown
                        userNavigation={userNavigation}
                        user={user}
                        classNames={classNames}
                        Fragment={Fragment}
                      />
                    </div>
                  </div>

                  <TailwindMenuBtn open={open} />
                </div>
              </div>

              <TailwindMobileMenuItem
                userNavigation={userNavigation}
                navigation={navigation}
                user={user}
                classNames={classNames}
              />
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Your content */}
            <TailwindTwoColGrid />
          </div>
        </main>
      </div>
    </>
  );
}
