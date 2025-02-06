import React from 'react';
import { motion } from 'framer-motion';

function MotionComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      
    </motion.div>
  );
}

export default MotionComponent;