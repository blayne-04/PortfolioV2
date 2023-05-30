import React from 'react';

function Navigation({ currentPage, handleNavClick }) {
  return (
    <div className = 'fullBar row'>
      <h1 className = 'col-md-3 p-4 col-sm-12 d-flex justify-content-center align-items-center'> Blayne Fuller </h1>
      <ul className="navibar col-sm-12 col-md-8 d-flex justify-content-end gap-5 align-items-center">
          <a
            href="#aboutMe"
            onClick={() => handleNavClick('aboutMe')}
            className={currentPage === 'aboutMe' ? 'navActive' : 'navLink'}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            onClick={() => handleNavClick('portfolio')}
            className={currentPage === 'portfolio' ? 'navActive' : 'navLink'}
          >
            Portfolio
          </a>
          <a
            href="#contactMe"
            onClick={() => handleNavClick('contactMe')}
            className={currentPage === 'contactMe' ? 'navActive' : 'navLink'}
          >
            Contact Me
          </a>
          <a
            href="#resume"
            onClick={() => handleNavClick('resume')}
            className={currentPage === 'resume' ? 'navActive' : 'navLink'}
          >
            Resume
          </a>
      </ul>
    </div>
  );
}

export default Navigation;
