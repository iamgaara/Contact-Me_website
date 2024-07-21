import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavbarComp'; // Ensure this path is correct
import Home from './Components/Home'; // Ensure this path is correct
import About from './Components/About'; // Ensure this path is correct
import Contact from './Components/Contact'; // Ensure this path is correct
import ContactForm from './ContactUs'; // Ensure this path is correct
import FAQCarousel from './FAQCarousel'; // Ensure this path is correct
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, marginTop: '64px', display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 100%', padding: '20px', maxWidth: '100%', boxSizing: 'border-box' }}>
            <FAQCarousel /> {/* Carousel on the left half */}
          </div>
          <div style={{ flex: '1 1 100%', padding: '20px', maxWidth: '100%', boxSizing: 'border-box' }}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
