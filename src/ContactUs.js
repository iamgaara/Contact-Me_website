import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the style for phone number input

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');
  const [phone, setPhone] = useState(''); // State for phone number

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    // Phone validation is handled by react-phone-number-input, but you can add more checks if needed
    return phone && phone.length >= 10; // Simple check, adjust as necessary
  };

  const handleSave = () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('All fields except phone number are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number.');
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
    const email = formData.get('user_email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      setError('All fields except phone number are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    setError('');

    emailjs.sendForm('service_k40u48q', 'template_lpiv0lo', form.current, '25SMKJ0EEp2J7g8o-')
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
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontStyle: 'italic', color: '#333' }}>
        Get In Touch
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: '#555' }}>
        We'd love to hear from you. Please fill out the form below.
      </Typography>
      <TextField
        label="Name"
        name="user_name"
        placeholder="Enter your name"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ fontFamily: "'Times New Roman', serif", '& .MuiInputLabel-root': { color: '#666' } }}
      />
      <Box
        sx={{
          margin: 'normal',
          width: '100%',
          '.PhoneInput': {
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
            height: '56px', // Match height with TextField
            fontFamily: "'Times New Roman', serif",
            padding: '10px',
            boxSizing: 'border-box',
          },
        }}
      >
        <PhoneInput
          international
          defaultCountry="US"
          value={phone}
          onChange={setPhone}
          placeholder="Enter phone number"
          style={{ width: '100%' }} // Ensures full width
        />
      </Box>
      <TextField
        label="Email"
        name="user_email"
        placeholder="Enter your email"
        variant="outlined"
        margin="normal"
        fullWidth
        sx={{ fontFamily: "'Times New Roman', serif", '& .MuiInputLabel-root': { color: '#666' } }}
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
        sx={{ fontFamily: "'Times New Roman', serif", '& .MuiInputLabel-root': { color: '#666' } }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          sx={{ 
            backgroundColor: '#007bff', // Blue color
            '&:hover': {
              backgroundColor: '#0056b3', // Darker blue on hover
            },
            borderRadius: '20px',
            padding: '10px 20px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Save
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          sx={{ 
            backgroundColor: '#007bff', // Blue color
            '&:hover': {
              backgroundColor: '#0056b3', // Darker blue on hover
            },
            borderRadius: '20px',
            padding: '10px 20px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Send
        </Button>
      </Box>
      {error && <Typography color="error" sx={{ marginTop: '20px', color: '#f44336' }}>{error}</Typography>}
    </Box>
  );
};

export default ContactForm;
