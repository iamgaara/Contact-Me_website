// src/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center',
        fontSize: '12px',
        position: 'relative', // Changed from 'fixed' to 'relative'
        width: '100%',
      }}
    >
      <Box>
        <Link
          href="#"
          sx={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Privacy
        </Link>
        {' | '}
        <Link
          href="#"
          sx={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Terms and Conditions
        </Link>
        {' | '}
        <Link
          href="#"
          sx={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 10px',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Cookies
        </Link>
      </Box>
      <Box
        sx={{
          marginTop: '5px',
          fontSize: '10px',
        }}
      >
        <Typography variant="body2">© 2024 ANI KART Pvt Ltd</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
