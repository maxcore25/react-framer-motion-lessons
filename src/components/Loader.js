import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate='animationOne'
        className='loader'>
        Enter
      </motion.div>
    </>
  );
};

export default Loader;
