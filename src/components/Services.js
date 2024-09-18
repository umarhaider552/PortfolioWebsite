/* 
File Name: FormStyles.css
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React from 'react';
import '../styles/FormStyles.css';  // common CSS file
import service1 from '../assets/web.jpg';
import service2 from '../assets/back.jpg';
import service3 from '../assets/ai.png';

function Services() {
  return (
    <div className="my-container">
      <h1 className="title">My Services</h1>
      <ul className="services-list">
        <li className="service-item">
          <img src={service1} alt="Web Development" className="service-img" />
          <p className="service-description">Web Development</p>
        </li>
        <li className="service-item">
          <img src={service2} alt="Mobile Apps" className="service-img" />
          <p className="service-description">Backend Development</p>
        </li>
        <li className="service-item">
          <img src={service3} alt="Consulting" className="service-img" />
          <p className="service-description">Artificial Intelligence</p>
        </li>
      </ul>
    </div>
  );
}

export default Services;
