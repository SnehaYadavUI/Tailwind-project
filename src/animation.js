import { motion } from "framer-motion";

export function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            duration: 0.4,
            timingFunction: "linear",
          },
        },
      }}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeFromLeft({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: {
          opacity: 0,
          translateX: -50,
          transitionTimingFunction: "linear",
        },
        visible: { opacity: 1, translateX: 0 },
      }}
    >
      {" "}
      {children}
    </motion.div>
  );
}

export function FadeOneAfterOne({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.6,
            duration: 0.6,
            timingFunction: "linear",
          },
        },
      }}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show"
    >
      {children}
    </motion.div>
  );
}

export function fadeInChildren(children) {
  <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
    {children}
  </motion.div>;
}
