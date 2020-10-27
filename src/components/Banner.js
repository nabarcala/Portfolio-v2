import React from 'react';
import {Link} from 'react-scroll';
import Typewriter from 'typewriter-effect';

import './Banner.css';
// import '../App.css';

export default function Banner() {
    return (

        <div className="content" id="banner">
            <div className="flexbox">
                <div className="about-desc">
                    <div className="inner-desc">
                        <h2>Hi, I am</h2>
                        <h1>Natacha Barcala </h1>

                        <h3><Typewriter
                            options={{
                                strings: ["Web Developer", "Software Engineer", "Front-End Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 90
                            }}
                        /></h3>

                        {/* <p> Computer Science graduate seeking a Software Developer role, located in Florida.
                            I primarily use Python and Flask to create web applications.
                            Come check out some of my other projects below.
                        </p> */}
                        <div className="banner-button">
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
            </div>
        </div>
    )
}
