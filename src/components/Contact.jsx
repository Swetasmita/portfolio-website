import { motion } from "framer-motion"; // Import framer-motion for animations
import { CONTACT } from "../constants/contact.js";
import { Link } from "react-scroll";
const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      {" "}
      {/* Added id="contact" */}
      <motion.h1
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        whileInView={{ opacity: 1, y: 0 }} // Animation when in view
        transition={{ duration: 0.8 }} // Animation duration
      >
        Get In Touch
      </motion.h1>
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }} // Slight delay for staggered effect
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="hover:no-underline text-white"
          style={{ textDecoration: "none" }}
        >
          {CONTACT.email}
        </a>
      </motion.div>
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="hero" // Ensure the Hero section has id="hero"
          smooth={true}
          duration={500}
          className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 cursor-pointer"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default Contact;
