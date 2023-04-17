import React from "react";

const UncontroledForm = () => {
  return (
    <div className="max-w-screen-xl py-5 mx-auto my-12 px-7">
      <h2 className="text-3xl font-bold ">Uncontrolled Component</h2>
      <form>
        <input
          className="w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-rose-600 peer"
          type="text"
          placeholder="Name"
          pattern="[a-zA-Z]*"
          required
        />
        <input
          className="w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-rose-600 peer"
          type="number"
          placeholder="Number"
          pattern="[0-9]*"
          min="6000000000"
          max="9999999999"
          required
          id=""
        />
        <input
          className="w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-rose-600 peer"
          type="email"
          placeholder="Email"
          pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
          required
          id=""
        />
        <button
          className="inline-block w-full px-5 py-3 font-medium text-white transition duration-100 ease-in border border-red-600 rounded-lg bg-rose-600 hover:text-rose-600 hover:bg-transparent sm:w-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontroledForm;
