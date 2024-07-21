import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRedditAlien, FaDiscord } from 'react-icons/fa';

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
        position: 'relative',
        width: '100%',
        '@media (max-width: 600px)': {
          padding: '20px 0',
        },
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
          '@media (max-width: 600px)': {
            fontSize: '8px',
          },
        }}
      >
        <Typography variant="body2">© 2024 ANI KART Pvt Ltd</Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          '@media (max-width: 600px)': {
            bottom: '5px',
            right: '5px',
          },
        }}
      >
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaFacebookF />
        </Link>
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaTwitter />
        </Link>
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaInstagram />
        </Link>
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaLinkedinIn />
        </Link>
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaRedditAlien />
        </Link>
        <Link href="#" sx={{ color: 'white', fontSize: { xs: '16px', sm: '20px' } }}>
          <FaDiscord />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
