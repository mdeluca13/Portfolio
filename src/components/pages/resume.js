// Adding necessary imports
import React from 'react';
import pdf from '../../assets/files/DeLucaResume.pdf';
import download from '../../assets/images/download.png';
import '../styles/resume.css';
import skills from '../data/skills';

// Adding header, downloadable resume and skills list
export default function Resume() {
    return (
        <div>
            <h1 className='resume-header'>Resume</h1>
            <h5 className='resume-download'>Download Resume <a href={pdf} download><img src={download} style={{ height: 30 }} className='icon-download' alt='download icon' /></a></h5>
            <a className='resume-link' href='https://docs.google.com/document/d/1JXLJOqDEAl6_WNlHDyT9Hnsy6avC1K9PW6oI34ZEWSc/edit?usp=sharing'>Visit Resume</a>
            <h2 className='skills-header'>Technical Skills</h2>
            <div className='skills-div'>
                <ul className="list-group">
                    {skills.map(skill => (
                        <li className='list-group-item skill'>{skill.skill}</li>
                    ))}
                </ul>
            </div>     
        </div>
    );
};