import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');

  const handleSave = () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    // Save data to localStorage
    localStorage.setItem('contactForm', JSON.stringify({
      name,
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
      setError('All fields are required.');
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
  };

  const labelStyle = {
    margin: '10px 0 5px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    marginRight: '10px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={formStyle}>
      <label style={labelStyle}>Name</label>
      <input type="text" name="user_name" style={inputStyle} />
      <label style={labelStyle}>Email</label>
      <input type="email" name="user_email" style={inputStyle} />
      <label style={labelStyle}>Message</label>
      <textarea name="message" style={textareaStyle} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={handleSave} style={buttonStyle}>Save</button>
        <button type="submit" style={buttonStyle}>Send</button>
      </div>
      {error && <div style={errorStyle}>{error}</div>}
    </form>
  );
};

export default ContactForm;
