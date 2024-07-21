import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const carouselItems = [
  { id: 1, question: "What is manga?", answer: "Manga are Japanese comic books or graphic novels." },
  { id: 2, question: "How can I buy manga?", answer: "You can purchase manga directly from our website." },
  { id: 3, question: "Do you offer international shipping?", answer: "Yes, we ship manga worldwide." },
  { id: 4, question: "Can I return a manga?", answer: "Yes, we accept returns within 30 days of purchase." },
];

const FAQCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px', // Adjust maximum width for larger screens
        padding: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        overflow: 'hidden',
        margin: 'auto', // Center align horizontally
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontStyle: 'italic' }}>
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: '100%',
              padding: 2,
              boxSizing: 'border-box',
              textAlign: 'center', // Center text horizontally
            }}
          >
            <Typography variant="h6">{item.question}</Typography>
            <Typography>{item.answer}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FAQCarousel;
