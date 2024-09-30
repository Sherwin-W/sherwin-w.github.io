// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../components/NavigationButtons';
import OsuAnimation from '../components/OsuAnimation';
import './Projects.css';

const Projects = () => {
  const title = "My Projects";

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="projects-page">
      <div className="title-container">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="title-letter"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Osu!-style animation */}
      <div className="osu-animation-container">
        <OsuAnimation />
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </div>
  );
};

export default Projects;
