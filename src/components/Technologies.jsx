// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import {  motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"> Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div  variants={iconVariants(2.5)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(4)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3 className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(5.5)}  initial="initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(6)}  initial="initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-cyan-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
