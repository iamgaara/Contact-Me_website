// src/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          ANIKART
        </Typography>
        <Button color="inherit" component={Link} to="/home" sx={{ color: 'white' }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about" sx={{ color: 'white' }}>
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact" sx={{ color: 'white' }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
