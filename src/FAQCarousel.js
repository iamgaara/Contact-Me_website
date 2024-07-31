import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Paper } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FAQCarousel = () => {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds interval
    cssEase: 'ease-in-out',
  };

  const faqItems = [
    {
      question: "What is your return policy?",
      answer: "You can return any product within 30 days of purchase. Please ensure the product is in its original condition."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you will receive an email with a tracking number. Use this number on the carrier's website to track your order."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to many countries worldwide. Shipping fees and delivery times will vary based on your location."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order within 24 hours of placing it. Please contact our customer service team for assistance."
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0px 8px rgba(0,0,0,0.0)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Lower opacity to match ContactForm
        backdropFilter: 'blur(10px)', // Glass effect
        textAlign: 'center',
        fontFamily: "'Georgia', serif",
        overflow: 'hidden', // Ensure no overflow
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
      <Slider {...settings}>
        {faqItems.map((item, index) => (
          <Paper key={index} sx={{ padding: '0px', backgroundColor: 'rgba(255, 255, 255, 0)', border: 'none' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.2rem', overflowWrap: 'break-word' }}>
              {item.question}
            </Typography>
            <Typography variant="body1" sx={{  fontSize: '0.9rem',overflowWrap: 'break-word' }}>
              {item.answer}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
};

export default FAQCarousel;
