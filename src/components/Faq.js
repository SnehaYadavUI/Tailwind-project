import React from "react";
import { faqContent } from "../utils";
import { motion } from "framer-motion";
import { FadeFromLeft } from "../animation";

const Faq = () => {
  return (
    <>
      <FadeFromLeft>
        <h2 className="text-2xl font-bold sm:text-3xl">FAQS</h2>
      </FadeFromLeft>

      <motion.div
        className="space-y-4 my-14"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.8,
              duration: 0.8,
              timingFunction: "linear",
            },
          },
        }}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="show"
      >
        {faqContent.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <details className="group border-l-4 border-rose-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.summary}
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-left text-gray-700">
                  {item.content}
                </p>
              </details>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Faq;
