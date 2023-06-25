import React from 'react';
import headerImg from '../assets/images/header.jpg';
import './styles/nav.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='background-div' style={{backgroundImage: `url(${headerImg})`}}>
      <div className='container nav-container'>
        <div className='container-two'>
          <h1 className='header'>Megan De Luca Portfolio</h1>
          <ul className='nav nav-pills justify-content-end'>
            <li className='nav-item'>
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Nav;
