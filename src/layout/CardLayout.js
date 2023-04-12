import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { FadeOneAfterOne } from "../animation";

const CardLayout = () => {
  const fadeInChildren = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <FadeOneAfterOne>
      <div className="grid grid-cols-1 gap-8 my-14 md:grid-cols-2 lg:grid-cols-3">
        <motion.div variants={fadeInChildren}>
          <Card />
        </motion.div>

        <motion.div variants={fadeInChildren}>
          <Card />
        </motion.div>

        <motion.div variants={fadeInChildren}>
          <Card />
        </motion.div>

        <motion.div variants={fadeInChildren}>
          <Card />
        </motion.div>

        <motion.div variants={fadeInChildren}>
          <Card />
        </motion.div>
      </div>
    </FadeOneAfterOne>
  );
};

export default CardLayout;
