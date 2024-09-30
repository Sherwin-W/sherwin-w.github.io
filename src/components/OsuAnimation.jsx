// src/components/OsuAnimation.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './OsuAnimation.css';

const positions = [
  { x: 50, y: 50 },
  { x: 200, y: 80 },
  { x: 350, y: 50 },
  { x: 500, y: 100 },
];

const OsuAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < positions.length; i++) {
        // Animate circle appearance
        await controls.start((index) =>
          index === i
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }
            : {}
        );

        // Animate line drawing to the next circle
        if (i > 0) {
          await controls.start((index) =>
            index === i
              ? {
                  pathLength: 1,
                  transition: { duration: 0.5 },
                }
              : {}
          );
        }

        // Wait before moving to the next circle
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    sequence();
  }, [controls]);

  return (
    <div className="osu-animation">
      {positions.map((pos, index) => (
        <React.Fragment key={index}>
          {/* Circles */}
          <motion.div
            className="osu-circle"
            custom={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            style={{ top: pos.y, left: pos.x }}
          />

          {/* Lines */}
          {index > 0 && (
            <motion.svg
              className="osu-line"
              custom={index}
              initial={{ pathLength: 0 }}
              animate={controls}
            >
              <motion.line
                x1={positions[index - 1].x + 25}
                y1={positions[index - 1].y + 25}
                x2={pos.x + 25}
                y2={pos.y + 25}
                stroke="#ff66aa"
                strokeWidth="4"
                strokeLinecap="round"
                custom={index}
                initial={{ pathLength: 0 }}
                animate={controls}
              />
            </motion.svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OsuAnimation;
