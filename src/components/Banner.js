import React from 'react';
import {Link} from 'react-scroll';

import './Banner.css';
// import '../App.css';

export default function Banner() {
    return (
        <div className="content" id="banner">
            <div className="flexbox">
                <div className="span-6 about-desc">
                    <div className="inner-desc">
                        <h1>Natacha Barcala </h1>
                        <h3>Software Developer, Web Developer</h3>
                        <p> Computer Science graduate seeking a Software Developer role, located in Florida.
                            I primarily use Python and Flask to create web applications.
                            Come check out some of my other projects below.
                        </p>
                        <div className="">
                            <Link 
                            className="button border-pink"
                            to="portfolio" 
                            activeClass="active" 
                            smooth={true}
                            duration={500}>
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
    
                <div className="span-6 about-img">
                    <img src={require("../images/remote-work-2.png")} alt="home page"/>
                </div>
            </div>
        </div>
    )
}
