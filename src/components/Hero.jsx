import React from "react";
import profilepic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Swetasmita Chinaray
            </motion.h1>
            <motion.span
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend developer
            </motion.span>
            <motion.p
              variants={container(2.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate frontend developer with a knack for crafting
              robust and scalable web applications that prioritize both
              performance and user experience. With over 4 years of experience, I have
              honed my skills in front-end technologies such as Angular, React
              and JavaScript, along with back-end technologies like Node.js,
              PL/SQL. My goal is to leverage my expertise to create innovative
              solutions that drive business growth and deliver exceptional user
              experiences. I am committed to staying up-to-date with the latest
              web technologies and constantly enhancing my skills to deliver the
              best possible results for both users and clients.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1, delay:2.1 }}
              src={profilepic}
              alt="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
