/* 
File Name: FormStyles.css
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React, { useState } from 'react';
import '../styles/FormStyles.css';  // common CSS file

function ContactMe({ setPage }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Updated handleSubmit with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Log form data to the console (you can process it further as needed)
    console.log(formData); 
    alert("Message sent successfully!");

    // Redirect back to Home page after submission
    setPage('home');
  };

  return (
    <div className="my-container">
      <h1 className="title">Contact Me</h1>

      {/* Contact Information Section */}
      <div className="my-info">
        <h3>Contact Information:</h3>
        <p>Email: <a href="mailto:your.email@example.com">umerhaider096@gmail.com</a></p>
        <p>Phone: 437-967-7865</p>
        <p>Address: 1008- 49 Thorncliffe Park Drive</p>
      </div>

      {/* Contact Form Section */}
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
