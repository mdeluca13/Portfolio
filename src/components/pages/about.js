// Adding necessary imports
import React from 'react';
import meganImg from '../../assets/images/Megan.jpg';
import '../styles/about.css';

// Adding header, image and description to about page
export default function About() {
    return (
        <div className='about-div'>
            <h1 className='about-header'>About Me</h1>
            <div className='image-div'>
                <img className='profile' src={meganImg} alt='Megan'/>
            </div>
            <p className='description'>
            I am a Full Stack Web Developer with a Bachelors in Business and Psychology. I am currently earning a Certificate in Full Stack Web Development from Carleton University where I have developed skills in JavaScript, Python, Node.js, React, Express.js, MySQL, NoSQL, APIs, and more.
            I have a strong passion for problem-solving and developing creative solutions. I worked on Cruise Ships with Park West Gallery for many years which allowed me to develop strong skills working in fast paced environments and with diverse teams.
            I am able to utilize my vast experience to tackle any project handed to me with eagerness and determination.
            </p>
        </div>
    );
};