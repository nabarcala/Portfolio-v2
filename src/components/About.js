import React from 'react';
import {Link} from 'react-router-dom';

import './About.css';

export default function About() {
    return (
        <section className="about-me" id='about-me'>
            <div className="container"> 
                <h5 className="small-header">About Me</h5>
                <div className="flex">
                    <div className="span-6 about-me-left">
                        <h2>
                            I am looking to expand my skill set and 
                            provide value to a hard-working team.
                        </h2>
                        <p>
                            I am a motivated individual with a strong work ethic and 
                            ability to work independently. I have strong organizational and 
                            team collaboration skills with experience in improving processes.
                        </p>
        
                    </div>
                    <div className="span-6 about-me-right">
                        <h1 className="big-header">Contact Me</h1>
                        <p><span>Let's Talk</span></p>
                        <h2><a href="mailto:nabarcala@gmail.com" className="footer-link">nabarcala@gmail.com</a></h2> 
                    </div>
                </div>
            </div>
        </section>
    )
}
