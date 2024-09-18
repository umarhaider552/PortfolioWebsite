/* 
File Name: FormStyles.css
Student Name: Umar Haider
Student ID: 301350936
Date: 18-Sep-2024
*/

import React from 'react';
import '../styles/FormStyles.css';  // common CSS file
import proj1 from '../assets/proj 1.PNG';
import proj2 from '../assets/proj 2.PNG';
import proj3 from '../assets/proj 3.PNG';


function Projects() {
  return (
    <div className="my-container">
      <h1 className="title">My Projects</h1>
      <div className="project-item">
        <img src={proj1} alt="Project 1" className="project-img" />
        <h3 className="project-title">Ontario's Premiers</h3>
        <p className="project-description">The application provides the detail of the famous personalities. My role was the C# Developer. Outcome was successful delivery of the project.</p>
      </div>
      <div className="project-item">
        <img src={proj2} alt="Project 2" className="project-img" />
        <h3 className="project-title">Bugmasher</h3>
        <p className="project-description">This is the game based in HTML. In this game the person has to crush the bug and get the score on each crush. My role was the HTML Developer. Outcome was successful delivery of the project.</p>
      </div>
      <div className="project-item">
        <img src={proj3} alt="Project 3" className="project-img" />
        <h3 className="project-title">Stop Watch</h3>
        <p className="project-description">A stop watch based on web. You can start or pause the stop watch on button click. Outcome was successful delivery of the project.</p>
      </div>
    </div>
  );
}

export default Projects;
