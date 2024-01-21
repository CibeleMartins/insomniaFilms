import React from "react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@chakra-ui/icons";
import styles from './BouncingButton.module.css'
const ballStyle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "black",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};

export default function BouncingButton() {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <motion.span
        className={styles.btn}
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-5%"]
        }}
      >
        <ArrowDownIcon/>
      </motion.span>
    </div>
  );
}