import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavbarComp'; // Ensure this path is correct
import Home from './Components/Home'; // Ensure this path is correct
import About from './Components/About'; // Ensure this path is correct
import ContactAndFAQ from './ContactAndFAQ'; // Ensure this path is correct
import Footer from './Footer'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactAndFAQ />} />
            <Route path="/" element={<contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
