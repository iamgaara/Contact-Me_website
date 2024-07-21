import React from 'react';
import { Box, Typography } from '@mui/material';

const FAQCarousel = () => {
  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Lower opacity
        backdropFilter: 'blur(10px)', // Glass effect
        textAlign: 'center',
        fontFamily: "'Georgia', serif",
        '@media (max-width:600px)': {
          padding: '15px',
        },
        '@media (max-width:400px)': {
          padding: '10px',
        },
        marginBottom: '20px', // Add space between FAQCarousel and ContactForm
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontStyle: 'italic', color: '#333' }}>
        Frequently Asked Questions
      </Typography>
      {/* Add your carousel items here */}
    </Box>
  );
};

export default FAQCarousel;
