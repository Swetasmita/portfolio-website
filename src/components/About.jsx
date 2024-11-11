import React from "react";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-400">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center w-90">
            <motion.img 
            whileInView={{ x:0, opacity: 1 }} 
            initial={{ x: -100, opacity: 0 }}             
              transition={{ duration: 1 }}
            className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p className="my-2 max-w-2xl py-6" whileInView ={{ x: 0, opacity: 1 }} 
            initial={{ x: 100, opacity: 0 }}             
              transition={{ duration: 1 }}>
              I am a dedicated and versatile software developer with 4+ years of
              professional experience specializing in UI development. My
              expertise lies in creating efficient, user-friendly web
              applications using a diverse set of technologies, including
              Angular, React, TypeScript, JavaScript, CSS3, HTML5, Bootstrap,
              Material UI, and RESTful APIs. Additionally, I have familiarity
              with backend technologies such as Node.js and PL/SQL databases. I
              am passionate about technology and continuously seek opportunities
              to grow professionally, especially in fast-paced, dynamic
              environments. My web development journey began with a deep
              curiosity for how things work, evolving into a career where I
              strive to learn, adapt, and solve complex problems. I thrive in
              collaborative settings and enjoy crafting high-quality solutions
              to meet both user and business needs.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
