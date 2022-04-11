import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 8px #fff',
    boxShadow: '0 0 8px #fff',
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      className='home container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to='/base'>
        <motion.button
          variants={buttonVariants}
          animate='visible'
          whileHover='hover'>
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
