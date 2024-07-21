import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');

  const handleSave = () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const phone = formData.get('user_phone');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('All fields except phone number are required.');
      return;
    }

    setError('');

    // Save data to localStorage
    localStorage.setItem('contactForm', JSON.stringify({
      name,
      phone,
      email,
      message
    }));

    alert('Form data saved successfully!');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const phone = formData.get('user_phone');
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      setError('All fields except phone number are required.');
      return;
    }

    setError('');

    emailjs.sendForm('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', form.current, 'YOUR_ACTUAL_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
          localStorage.removeItem('contactForm'); // Clear saved data after sending
      }, (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again.');
      });
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center', // Center text horizontally
        fontFamily: "'Georgia', serif" // Apply classical font
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontStyle: 'italic' 
        }}
      >
        Get In Touch
      </Typography>
      <Typography 
        variant="subtitle1" 
        gutterBottom 
        sx={{ 
          fontFamily: "'Times New Roman', serif" // Apply classical font
        }}
      >
        We'd love to hear from you. Please fill out the form below.
      </Typography>
      <TextField
        label="Name"
        name="user_name"
        placeholder="Enter your name"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ fontFamily: "'Times New Roman', serif" }} // Apply classical font
      />
      <TextField
        label="Phone Number (optional)"
        name="user_phone"
        placeholder="Enter your phone number"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ fontFamily: "'Times New Roman', serif" }} // Apply classical font
      />
      <TextField
        label="Email"
        name="user_email"
        placeholder="Enter your email"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ fontFamily: "'Times New Roman', serif" }} // Apply classical font
      />
      <TextField
        label="How may we help you?"
        name="message"
        placeholder="Enter your message"
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={4}
        sx={{ fontFamily: "'Times New Roman', serif" }} // Apply classical font
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
        <Button variant="contained" color="secondary" type="submit">Send</Button>
      </Box>
      {error && <Typography color="error" sx={{ marginTop: '20px', fontFamily: "'Times New Roman', serif" }}>{error}</Typography>}
    </Box>
  );
};

export default ContactForm;
