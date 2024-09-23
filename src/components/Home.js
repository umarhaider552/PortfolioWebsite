/* 
File Name: Home.js
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React from 'react';
import '../styles/FormStyles.css';  // common CSS file

function Home({ setPage }) {
  return (
    <div className="my-container">
      <h1 className="title">Welcome to My Portfolio</h1>
      <p className="my-info">
        This site showcases my skills and projects.
      </p>
      <button className="submit-btn" onClick={() => setPage('about')}>Learn More About Me</button>
    </div>
  );
}

export default Home;
