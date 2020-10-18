import React from 'react';
import {Link} from 'react-router-dom';

import './Banner.css';
// import '../App.css';

export default function Banner() {
    return (
        <div class="content">
            <div class="flexbox">
                <div class="span-6 about-desc">
                    <div class="inner-desc">
                        <h1>Natacha Barcala </h1>
                        <h3>Software Developer, Web Developer
                        </h3>
                        <p> Computer Science graduate seeking a Software Developer role, located in Florida.
                            I primarily use Python and Flask to create web applications.
                            Come check out some of my other projects below.
                        </p>
                        <div class="">
                            <Link to="" class="button border-pink">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
    
                <div class="span-6 about-img">
                    <img src="./assets/images/remote-work-2.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
