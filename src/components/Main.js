/* 
File Name: Main.js
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React, { useState } from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import ContactMe from './ContactMe';
import '../styles/FormStyles.css';  // common CSS file
import logo from '../assets/logo.jpg';  // Import the logo image

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="my-container">
      {/* Navigation bar */}
      <nav className="nav-bar">
        <img src={logo} alt="Logo" className="logo" />
        <button className="nav-btn" onClick={() => setPage('home')}>Home</button>
        <button className="nav-btn" onClick={() => setPage('about')}>About Me</button>
        <button className="nav-btn" onClick={() => setPage('projects')}>Projects</button>
        <button className="nav-btn" onClick={() => setPage('services')}>Services</button>
        <button className="nav-btn" onClick={() => setPage('contact')}>Contact Me</button>
      </nav>

      {/* Page rendering based on the 'page' state */}
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <AboutMe setPage={setPage} />}
      {page === 'projects' && <Projects />}
      {page === 'services' && <Services />}
      {page === 'contact' && <ContactMe setPage={setPage} />}
    </div>
  );
}

export default App;
