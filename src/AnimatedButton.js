// src/Components/AnimatedButton.js
import React, { useState } from 'react';
import { Box } from '@mui/material';
import './AnimatedButton.css'; // Assuming you want to use CSS for keyframes

const AnimatedButton = ({ onClick, children }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    setIsProcessing(true);
    // Simulate processing state for 2 seconds
    setTimeout(() => {
      setIsProcessing(false);
      if (onClick) onClick();
    }, 2000);
  };

  return (
    <Box
      className={`demo ${isProcessing ? 's--processing' : ''}`}
      onClick={handleClick}
    >
      <svg className="demo__drone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path className="demo__drone-green" d="M4,20 L24,20 L24,40 L4,40 Z"/>
        <path className="demo__drone-arm" d="M12,24 L16,28"/>
        <path className="demo__drone-arm demo__drone-arm--2" d="M12,28 L16,24"/>
      </svg>
      <div className="demo__text-fields">{children}</div>
    </Box>
  );
};

export default AnimatedButton;
