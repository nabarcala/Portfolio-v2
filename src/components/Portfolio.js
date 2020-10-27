import React from 'react';
import {Image} from 'cloudinary-react';

import project from '../projects-data';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">

                <div className="text-center">
                    <h5 className="small-header"> Portfolio </h5>
                    <h3 className="big-header"> Check Out My Projects </h3>
                </div>

                {/* Iterate through all projects */}

                { project.map((project, index) => (
                    <div className="portfolio-container" key={index}>
                        <Image publicId={project.image} cloudName="nbrcl"></Image> 
                        <div className="project">
                            <div className="project-i">
                                <h3>{project.title}</h3>
                                <ul className="links-project">

                                    { project.website !== "" &&
                                        <a className="border-pink link" href={project.website}>Live</a> 
                                    } 

                                    { project.github !== "" &&
                                        <a className="border-pink link" href={project.github}>GitHub</a> 
                                    }

                                </ul>
                            </div>
                            <div className="project-d">
                                <p> {project.description} </p> 
                                <ul className="project-tools">
                                    {/* Iterate through all the techs used in project */}
                                    { project.tech.map((skill, i) => (
                                        <span className="grey-pill" key={i}>{skill}</span>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </section>
    )
}
