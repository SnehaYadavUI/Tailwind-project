import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormWithContent = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleEmailValidation = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleNumberValidation = (e) => {
    setNameValue(e.target.value);
  };
  console.log();
  const checkEmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkNumberValidation =
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="p-8 bg-white rounded-lg shadow-lg lg:col-span-3 lg:p-12">
          <form>
            <div>
              <input
                className={`w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 ${
                  nameValue.length > 0
                    ? "focus:ring-green-600"
                    : "focus:ring-rose-600 peer"
                }`}
                placeholder="Name"
                type="text"
                id="name"
                pattern="[a-zA-Z]*"
                required
              />
              <label
                className="hidden w-full mt-2 text-sm text-left text-pink-600 peer-invalid:block"
                htmlFor="name"
              >
                Enter your name
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  className={`w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 ${
                    emailAddress.match(checkEmailValidation) &&
                    emailAddress.length > 0
                      ? "focus:ring-green-600"
                      : "focus:ring-rose-600 peer"
                  }`}
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={emailAddress}
                  onChange={(e) => {
                    handleEmailValidation(e);
                  }}
                />
                <label
                  className="hidden w-full mt-2 text-left text-pink-600 t ext-sm peer-invalid:block"
                  htmlFor="email"
                >
                  Please enter a valid email
                </label>
              </div>

              <div>
                <input
                  className={`w-full p-3 my-3 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 ${
                    nameValue.match(checkNumberValidation)
                      ? "focus:ring-green-600 valid"
                      : "focus:ring-rose-600 peer"
                  }`}
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  inputMode="numeric"
                  value={nameValue}
                  onChange={(e) => {
                    handleNumberValidation(e);
                  }}
                />
                <label
                  className={`hidden w-full mt-2 text-sm text-left text-pink-600 peer-invalid:block`}
                  htmlFor="phone"
                >
                  Please Enter a valid number
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  className="sr-only peer"
                  id="option1"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option1"
                  className="block w-full p-3 my-3 border border-gray-200 rounded-lg hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Option 1 </span>
                </label>
              </div>

              <div>
                <input
                  className="sr-only peer"
                  id="option2"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option2"
                  className="block w-full p-3 my-3 border border-gray-200 rounded-lg hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Option 2 </span>
                </label>
              </div>

              <div>
                <input
                  className="sr-only peer"
                  id="option3"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option3"
                  className="block w-full p-3 my-3 border border-gray-200 rounded-lg hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Option 3 </span>
                </label>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full p-3 my-3 text-sm border border-gray-200 rounded-lg resize-none"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full px-5 py-3 font-medium text-white transition duration-100 ease-in border border-red-600 rounded-lg bg-rose-600 hover:text-rose-600 hover:bg-transparent sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormWithContent;
