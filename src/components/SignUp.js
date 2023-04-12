import React from "react";

const SignUp = () => {
  return (
    <section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 text-gray-700 transition bg-white border-gray-200 rounded-md shadow-sm focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 px-5 py-3 mt-4 text-white transition border rounded-md group bg-rose-600 border-rose-600 hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
