// Adding necessary imports
import React from 'react';
import projects from '../data/projects.js';
import github from '../../assets/images/github.svg';
import '../styles/portfolio.css';

// Adding header and projects to display on portfolio
export default function Portfolio() {
    return (
        <div className='container'>
            <h1 className='portfolio-header'>Portfolio</h1>
            <div className="row">
                {projects.map(project => (
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                        <div className="card">
                            <a href={project.deployed}><img className="card-img-top project-image" src={project.image} alt= {project.title}/></a>
                            <h6 className="card-title">{project.title} <a href={project.github} className='icon'><img src={github} style={{ height: 23, width: 23 }} className='icon' alt='github icon' /></a> </h6>                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};