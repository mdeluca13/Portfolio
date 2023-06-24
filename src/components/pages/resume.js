import React from 'react';
import pdf from '../../assets/files/DeLucaResume.pdf'

export default function Resume() {
    return (
        <div>
            <a href={pdf} download>Download Resume</a>
            <h2>Technical Skills</h2>
            <ul className="list-group">
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">NoSQL</li>
                <li className="list-group-item">APIs</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">OOP</li>
                <li className="list-group-item">Express.js</li>
                <li className="list-group-item">ORM</li>
                <li className="list-group-item">MVC</li>
                <li className="list-group-item">PWA</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">MERN</li>
                <li className="list-group-item">State</li>
                <li className="list-group-item">GraphQL</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Handlebars</li>
                <li className="list-group-item">NPM</li>
                <li className="list-group-item">Inquirer</li>
                <li className="list-group-item">Sequelize</li>
                <li className="list-group-item">GitHub</li>
                <li className="list-group-item">Heroku</li>
                <li className="list-group-item">Visual Studio Code</li>
                <li className="list-group-item">Microsoft Suite</li>
                <li className="list-group-item">Google Suite</li>
            </ul>
        </div>
    );
};