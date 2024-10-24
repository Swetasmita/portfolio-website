import React from "react";
import todo from "../assets/projects/todoApp.png";
import calculator from "../assets/projects/JS-calculator.png";
import myportfolio from "../assets/projects/myportfolio.png";
import portfolio from "../assets/projects/portfolio.png";
import weather from "../assets/projects/weather.png";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Project</h1>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* 1 Project Div */}
        <div className="w-full lg:w-1/4 mb-8 flex justify-center">
          <a
            href="https://portfolio-website-delta-gold.vercel.app/"
            target="_blank"
            rel=""
          >
            <img
              className="rounded-2xl"
              src={myportfolio}
              alt="Todo List Project"
              width={400}
              height={150}
            />
          </a>
        </div>
        {/* 1 Description Div */}
        <div className="w-full lg:w-3/4">
          <h6 className="mb-2 font-semibold text-center">Portfolio Website</h6>
          <p className="mb-4  ml-4 text-neutral-400 justify-center">
            Its my portfolio website showcasing summary, projects, skills, work
            experience and contact information build in React and Tailwind CSS.
          </p>
        </div>
        {/* 1 Project Div */}
        <div className="w-full lg:w-1/4 mb-8 flex justify-center">
          <a href="https://class-repo.vercel.app/" target="_blank" rel="">
            <img
              className="rounded-2xl"
              src={portfolio}
              alt="Todo List Project"
              width={400}
              height={150}
            />
          </a>
        </div>
        {/* 1 Description Div */}
        <div className="w-full lg:w-3/4">
          <h6 className="mb-2 font-semibold text-center">Practice Profile</h6>
          <p className="mb-4  ml-4 text-neutral-400 justify-center">
            Depeloped a practice portfolio website showcasing banner, sumkmary
            in hero section, expertise, skills and contact information build in
            React and CSS3.
          </p>
        </div>

        {/* 2nd Project Div */}
        <div className="w-full lg:w-1/4 mb-8 flex justify-center">
          <a
            href="https://todolist-angular-sigma.vercel.app/"
            target="_blank"
            rel=""
          >
            <img
              className="rounded-2xl"
              src={todo}
              alt="Todo List Project"
              width={400}
              height={150}
            />
          </a>
        </div>
        {/* 2nd Description Div */}
        <div className="w-full lg:w-3/4">
          <h6 className="mb-2 font-semibold text-center">
            Angular TODO Crud Application
          </h6>
          <p className="mb-4 ml-4 text-neutral-400 justify-center">
            This To-Do List application is built in Angular, Bootstrap, CSS3
            using a template-driven approach with form control validations,
            including form.invalid and form.dirty. It offers essential CRUD
            functionalities like adding, editing, deleting, checking, and saving
            tasks. The app stores and retrieves data from the browser’s local
            storage, ensuring persistence across sessions.
          </p>
        </div>
        {/*3rd Project Div */}
        <div className="w-full lg:w-1/4 mb-8 flex justify-center">
          <a
            href="https://weather-app-psi-blue-43.vercel.app/"
            target="_blank"
            rel=""
          >
            <img
              className="rounded-2xl"
              src={weather}
              alt="about"
              width={200}
              height={150}
            />
          </a>
        </div>
        {/* 3rd Description Div */}
        <div className="w-full lg:w-3/4 mb-6">
          <h6 className="mb-2 font-semibold text-center">Weather App in JS</h6>
          <p className="mb-4 ml-4 text-neutral-400 justify-center">
            This application displays current weather conditions and forecasts
            providiing weather information based on the user's entered location,
            retrieving real-time data through a web services WeatherAPI. The app
            typically uses HTML and CSS for the user interface, while JavaScript
            handles the data fetching, processing, and display updates. TIt
            displays how to work with asynchronous programming in fetching JSON
            data and DOM manipulation.
          </p>
        </div>

        {/* 4th project Div */}
        <div className="w-full lg:w-1/4 mb-8 flex justify-center">
          <a
            href="https://calculator-java-script-seven.vercel.app/"
            target="_blank"
            rel=""
          >
            <img
              className="rounded-2xl"
              src={calculator}
              alt="about"
              width={200}
              height={250}
            />
          </a>
        </div>
        {/* 4th Description Div */}
        <div className="w-full lg:w-3/4 mb-6">
          <h6 className="mb-2 font-semibold text-center">
            Calculator App in JS
          </h6>
          <p className="mb-4 ml-4 text-neutral-400 justify-center">
            It typically involves creating a user interface with HTML and CSS
            and incorporating interactive elements with JavaScript to handle
            arithmetic operations like addition, subtraction, multiplication,
            and division. The project is showcasing the basics of DOM
            manipulation, event handling, and data validation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
