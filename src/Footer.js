// src/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterWrapper = styled('footer')({
  backgroundColor: 'black',
  color: 'white',
  padding: '40px 0',
  textAlign: 'center',
  fontSize: '12px',
});

const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const FooterText = styled(Box)({
  marginTop: '5px',
  fontSize: '10px',
});

const Footer = () => {
  return (
    <FooterWrapper>
      <Box>
        <FooterLink href="#">Privacy</FooterLink> |
        <FooterLink href="#">Terms and Conditions</FooterLink> |
        <FooterLink href="#">Cookies</FooterLink>
      </Box>
      <FooterText>
        <Typography variant="body2">© 2024 ANI KART Pvt Ltd</Typography>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
