import { motion } from "framer-motion";
import todo from "../assets/projects/todoApp.png";
import calculator from "../assets/projects/JS-calculator.png";
import myportfolio from "../assets/projects/myportfolio.png";
import weather from "../assets/projects/weather.png";
import shoppingCart from "../assets/projects/shoppingCart.png";
import metaPortfolio from "../assets/projects/metaPortfolio.png";

const Project = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* 1st Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="https://portfolio-website-delta-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={myportfolio} alt="Portfolio Website" width={400} height={150} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Portfolio Website</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            My portfolio website showcasing summary, projects, skills, work experience, and contact information built in React and Tailwind CSS.
          </p>
        </motion.div>

        {/* 2nd Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Swetasmita/Meta-Advanced-React-portfolio-App" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={metaPortfolio} alt="Meta Advanced React Portfolio App" width={400} height={150} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Meta Advanced React Portfolio App</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            A portfolio application built as part of the Meta Advanced React course. It showcases advanced React concepts such as hooks, context API, and performance optimization. The app is fully responsive and demonstrates best practices in modern React development.
          </p>
        </motion.div>

        {/* 3rd Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Swetasmita/redux-shopping-cart-app" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={shoppingCart} alt="Redux Shopping Cart App" width={400} height={150} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Redux Shopping Cart App</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            A shopping cart application built with React and Redux. It includes features like adding/removing items, updating quantities, and calculating totals. This project demonstrates state management with Redux and dynamic UI updates.
          </p>
        </motion.div>

        {/* 4th Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://todolist-angular-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={todo} alt="Todo List Project" width={400} height={150} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Angular TODO Crud Application</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            This To-Do List application is built in Angular, Bootstrap, CSS3 using a template-driven approach with form control validations. It offers essential CRUD functionalities like adding, editing, deleting, checking, and saving tasks with local storage persistence.
          </p>
        </motion.div>

        {/* 5th Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="https://weather-app-psi-blue-43.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={weather} alt="Weather App" width={200} height={150} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Weather App in JS</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            This app shows current weather and forecasts by fetching real-time data from WeatherAPI based on the user's location. Built with vanilla JavaScript, HTML, and CSS.
          </p>
        </motion.div>

        {/* 6th Project */}
        <motion.div
          className="w-full lg:w-1/4 mb-8 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <a href="https://calculator-java-script-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img className="rounded-2xl" src={calculator} alt="Calculator App" width={200} height={250} />
          </a>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h6 className="mb-2 font-semibold text-center">Calculator App in JS</h6>
          <p className="mb-4 ml-4 text-neutral-400">
            A basic calculator app using JavaScript, HTML, and CSS, demonstrating DOM manipulation, event handling, and basic arithmetic operations like addition, subtraction, multiplication, and division.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;