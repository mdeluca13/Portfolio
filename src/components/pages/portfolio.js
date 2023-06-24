import React from 'react';
import projects from '../projects';

export default function Portfolio(props) {
    return (
        <ul className='list-group'>
            {projects.map(project => (
                <li className='list-group-item' key={project.id}>{project.title}</li>
            )
            )}
        </ul>
    );
};