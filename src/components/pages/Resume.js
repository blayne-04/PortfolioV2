import React from 'react';
import resumeFile from '../../assets/Resume.pdf'
export default function Resume() {
  return (
    <div className='d-flex flex-column align-items-center gap-4'>
      <h3>Resume</h3>
      <a
        href={resumeFile}
        download="Resume.pdf"
      >
        Download My Resume
      </a>
      <div>
        <h3>Front-end Proficiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>BootStrap</li>
      </div>
      <div>
        <h3>Back-end Proficiencies</h3>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}
