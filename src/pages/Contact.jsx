// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../components/NavigationButtons';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: -100,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      // Swiped right, navigate to Projects
      navigate('/projects');
    }
    // No need to handle swipe left on Contact page as it's the last page
  };

  return (
    <motion.div
      className="contact-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me through the following channels:
      </p>
      <ul>
        <li>Email: sherwin@example.com</li>
        <li>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/sherwin" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sherwin
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a href="https://github.com/sherwin-w" target="_blank" rel="noopener noreferrer">
            github.com/sherwin-w
          </a>
        </li>
      </ul>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </motion.div>
  );
};

export default Contact;
