import React from "react";
import { Link } from "react-router-dom";
import { FadeInWhenVisible } from "../animation";

const ContentOverlayBg = () => {
  return (
    <FadeInWhenVisible>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <Link
                to="#"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition duration-150 ease-in-out border rounded border-rose-600 bg-rose-600 hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default ContentOverlayBg;
