/* 
File Name: FormStyles.css
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React from 'react';
import '../styles/FormStyles.css';  // common CSS file
import pic from '../assets/pic.jpg';  // Import the logo image
import resume from '../assets/Resume.pdf';

function AboutMe() {
  return (
    <div className="my-container">
      <h1 className="title">About Me</h1>
      <div style={{ textAlign: 'center' }}>
        <img src={pic} alt="MyPic" style={{ width: '200px', display: 'block', margin: '0 auto' }} />
      </div>
      
      <div className="my-info">
        <p>My name is Umer Haider, and I've lived in Toronto all my life. I'm currently studying Software Engineering Technology, with experience in programming languages like HTML, Java, Python, C#, and C++. In my free time, I enjoy traveling and spending quality time with my loved ones. I am passionate about technology and constantly seek new challenges to expand my knowledge in the field.</p>
        <p>I'm currently studying Software Engineering Technology, with experience in programming languages like HTML, Java, Python, C#, and C++. In my free time, I enjoy traveling and spending quality time with my loved ones. I am passionate about technology and constantly seek new challenges to expand my knowledge in the field.</p>
        <p>In my free time, I enjoy traveling and spending quality time with my loved ones. I am passionate about technology and constantly seek new challenges to expand my knowledge in the field.</p>
        <p>I am passionate about technology and constantly seek new challenges to expand my knowledge in the field.</p>
        <a href={resume} download className="resume-link">Download My Resume</a>
      </div>
    </div>
  );
}

export default AboutMe;
