import React from "react";
import { motion } from "framer-motion";

const TwoCol = () => {
  return (
    <div className="mt-10">
      <motion.h1
        className="text-3xl font-bold"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { rotate: 20 },
        }}
      >
        screw on viewport
      </motion.h1>
      <p className="mt-10 bg-gradient-to-r from-green-400 to-yellow ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
        optio doloremque nulla quam ea, ullam minus eveniet natus, veritatis{" "}
        <motion.span
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: "66s" }}
          variants={{
            visible: { backgroundSize: "100% 100%" },
            hidden: {
              backgroundSize: "0 100%",
              backgroundImage:
                "linear-gradient(to right, #fffd63 0, #fffd63 100%)",
            },
          }}

          //   initial={{ background: 0 }}
          //   animate={{}}
        >
          harum dicta ex nemo aperiam doloribus temporibus deleniti quaerat
          culpa!
        </motion.span>{" "}
        Odit, voluptates quaerat temporibus nostrum libero eius perferendis sed
        tenetur tempore laborum omnis deserunt similique incidunt recusandae
        soluta voluptate repellat.
      </p>
    </div>
  );
};

export default TwoCol;
