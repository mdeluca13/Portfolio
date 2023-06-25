// Adding icons to footer
import React, { useState } from 'react';
import Nav from './nav';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact'
import Resume from './pages/resume';
import headerImg from '../assets/images/header.jpg';
import './styles/nav.css';

function Header () {
    const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <div className='background-div' style={{backgroundImage: `url(${headerImg})`}}>
                <div className='container nav-container'>
                    <div className='container-two'>
                        <h1 className='header'>Megan De Luca Portfolio</h1>
                        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                        
                    </div>
                </div>
            </div>
            {renderPage()}
        </div>
        
        
    );
  }
  
  export default Header;

