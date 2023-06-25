import React from 'react';
import pdf from '../../assets/files/DeLucaResume.pdf';
import download from '../../assets/images/download.png';
import '../styles/resume.css';

export default function Resume() {
    return (
        <div>
            <h1 className='resume-header'>Resume</h1>
            <h5 className='resume-download'>Download Resume <a href={pdf} download><img src={download} style={{ height: 30 }} className='icon-download' alt='download icon' /></a></h5>
            <h2 className='skills-header'>Technical Skills</h2>
            <div className='skills-div'>
                <ul className="list-group">
                    <li className='list-group-item skill'>HTML</li>
                    <li className='list-group-item skill'>CSS</li>
                    <li className='list-group-item skill'>JavaScript</li>
                    <li className='list-group-item skill'>Python</li>
                    <li className='list-group-item skill'>MySQL</li>
                    <li className='list-group-item skill'>NoSQL</li>
                    <li className='list-group-item skill'>APIs</li>
                    <li className='list-group-item skill'>Node.js</li>
                    <li className='list-group-item skill'>OOP</li>
                    <li className='list-group-item skill'>Express.js</li>
                    <li className='list-group-item skill'>ORM</li>
                    <li className='list-group-item skill'>MVC</li>
                    <li className='list-group-item skill'>PWA</li>
                    <li className='list-group-item skill'>React</li>
                    <li className='list-group-item skill'>MERN</li>
                    <li className='list-group-item skill'>State</li>
                    <li className='list-group-item skill'>GraphQL</li>
                    <li className='list-group-item skill'>Bootstrap</li>
                    <li className='list-group-item skill'>Handlebars</li>
                    <li className='list-group-item skill'>NPM</li>
                    <li className='list-group-item skill'>Inquirer</li>
                    <li className='list-group-item skill'>Sequelize</li>
                    <li className='list-group-item skill'>GitHub</li>
                    <li className='list-group-item skill'>Heroku</li>
                    <li className='list-group-item skill'>Visual Studio Code</li>
                    <li className='list-group-item skill'>Microsoft Suite</li>
                    <li className='list-group-item skill'>Google Suite</li>
                </ul>
            </div>     
        </div>
    );
};