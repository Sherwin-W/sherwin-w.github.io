// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import './App.css'; // Import CSS

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Overlay */}
        {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

        {/* Main Content with Animated Routes */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

// Separate component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
