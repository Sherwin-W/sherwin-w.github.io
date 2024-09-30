// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NavigationButtons from '../components/NavigationButtons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
    if (info.offset.x < -100) {
      // Swiped left, navigate to About Me
      navigate('/about');
    }
    // No need to handle swipe right on Home page as it's the first page
  };

  return (
    <motion.div
      className="main-page"
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
      <h1>Welcome to My Personal Website</h1>
      <p>Explore more about me and my projects!</p>

      {/* Navigation Buttons */}
      <NavigationButtons />
    </motion.div>
  );
};

export default Home;
