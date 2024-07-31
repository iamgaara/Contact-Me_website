import React from 'react';
import { Box, Container } from '@mui/material';
import ContactForm from './ContactUs'; // Correct import for ContactForm
import FAQCarousel from './FAQCarousel';
import backgroundImage from './assets/images/1.jpg'; // Import the image

const ContactAndFAQ = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure it takes full screen height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '64px', // Adjust padding if needed to account for navbar height
        paddingBottom: '64px', // Adjust padding if needed to account for footer height
      }}
    >
      <Container maxWidth="md">
        <FAQCarousel />
        <ContactForm />
      </Container>
    </Box>
  );
};

export default ContactAndFAQ;
