import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.button variants={buttonVariants} whileHover='hover'>
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
