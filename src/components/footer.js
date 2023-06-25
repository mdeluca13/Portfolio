// Adding necessary imports
import React from 'react';
import github from '../assets/images/githubFoot.png';
import linkedIn from '../assets/images/linkedinFoot.png';
import hackerRank from '../assets/images/hackerrankFoot.png';
import './styles/footer.css';

// Adding icons to footer
function Footer () {
  return (
    <ul className='footer list-group list-group-horizontal justify-content-center'>
        <li className='icon-foot'><a href='https://github.com/mdeluca13' className='icon-foot list-group-item'><img src={github} style={{ height: 50 }} className='icon-foot' alt='github icon' /></a></li>
        <li className='icon-foot'><a href='https://www.linkedin.com/in/deluca-megan/' className='icon-foot list-group-item'><img src={linkedIn} style={{ height: 50 }} className='icon-foot' alt='linkedIn icon' /></a></li>
        <li className='icon-foot'><a href='https://www.hackerrank.com/megandeluca27?hr_r=1' className='icon-foot list-group-item hackerrank'><img src={hackerRank} style={{ height: 60}} className='icon-foot' alt='hackerRank icon' /></a></li>
    </ul>
    
  );
}

export default Footer;
