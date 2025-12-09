import React from 'react';
import { motion } from 'framer-motion';

const hidden = { opacity: 0, y: 30 };
const visible = (delay = 0) => ({
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
    delay,
  },
});

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden, visible: visible(delay) }}
    >
      {children}
    </motion.div>
  );
}
