// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../components/NavigationButtons';
import './About.css'; // Import the reverted About page CSS

const pageVariants = {
  initial: {
    opacity: 0,
    x: 300, // Start off-screen to the right
  },
  in: {
    opacity: 1,
    x: 0, // Centered
  },
  out: {
    opacity: 0,
    x: -300, // Move off-screen to the left
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="bento-container">
        <div className="bento-item item1">
          <h2>Background</h2>
          <p>
            I'm Sherwin, a passionate computer science student with interests in cybersecurity and artificial intelligence.
            I enjoy building projects that solve real-world problems and continuously strive to learn new technologies.
          </p>
        </div>
        <div className="bento-item item2">
          <h2>Skills</h2>
          <ul>
            <li>Cybersecurity</li>
            <li>Artificial Intelligence</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div className="bento-item item3">
          <h2>Projects</h2>
          <ul>
            <li>Privacy Preserving Visualization Tool</li>
            <li>HTML Transformer</li>
            <li>Flutter Event Planning App</li>
          </ul>
        </div>
        <div className="bento-item item4">
          <h2>Contact</h2>
          <p>Email: sherwin@example.com</p>
          <p>LinkedIn: linkedin.com/in/sherwin</p>
          <p>GitHub: github.com/sherwin-w</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </motion.div>
  );
};

export default About;
