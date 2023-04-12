import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <article className="w-full mb-4 overflow-hidden transition rounded-lg shadow hover:shadow-lg max-w-96">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="object-cover w-full h-56"
        />

        <div className="p-4 bg-white sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <Link to="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              How to position your furniture for positivity
            </h3>
          </Link>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </>
  );
};

export default Card;
