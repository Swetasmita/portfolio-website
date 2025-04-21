import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/skill.js";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="w-full lg:w-1/2">
              <p className="mb-2 text-sm text-neutral-200">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                className="font-semibold"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-400">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                className="mb-2 text-neutral-300"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 p-1 rounded bg-cyan-600 text-sm font-extrabold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
