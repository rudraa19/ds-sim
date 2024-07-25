import React from 'react';
import { motion } from 'framer-motion';

const Block = ({ isTapped }) => {
  return (
    <motion.div
      style={{
        width: 200,
        height: 50,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'pink',
        opacity: isTapped ? 0 : 1,
      }}
      animate={{ y: isTapped ? -50 : 0, opacity: isTapped ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default Block;
