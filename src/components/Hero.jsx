import { motion } from "framer-motion";
import { Link } from "react-scroll"; // make sure react-scroll is installed

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-neutral-900 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-purple-700 opacity-30 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bg-blue-700 opacity-30 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, I&apos;m <span className="text-purple-400">Swetasmita 👋</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8"
        >
          Frontend Developer | JavaScript | React | Angular | TypeScript
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex justify-center gap-6"
        >
          {/* View Projects Button */}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 cursor-pointer"
          >
            View Projects
          </Link>

          {/* Contact Me Button */}
          <Link
            to="contact" // Matches the id="contact" in the Contact section
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;