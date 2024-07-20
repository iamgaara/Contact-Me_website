import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavbarComp'; // Ensure this path is correct
import Home from './Components/Home'; // Ensure this path is correct
import About from './Components/About'; // Ensure this path is correct
import Contact from './Components/Contact'; // Ensure this path is correct
import ContactForm from './ContactUs'; // Ensure this path is correct
import Footer from './Footer'; // Import the Footer component


function App() {
  const appStyle = {
    textAlign: 'center',
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <ContactForm />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
