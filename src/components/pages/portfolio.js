import React from 'react';
import projects from '../projects';
import github from '../../assets/images/github.svg';
import '../styles/portfolio.css';

export default function Portfolio() {
    return (
        <div className='container'>
            <div className="row">
                {projects.map(project => (
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4  mt-5">
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