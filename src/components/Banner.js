import React from 'react'

import './Banner.css';

export default function Banner() {
    return (
        <div className='banner-container'>
            {/* Background */}
            <div className="banner-text">
               <div classname="title">
                    <p>Hi, my name is </p>
                    <h1>Natacha Barcala.</h1>
                </div>
                <div className="about">
                    <p> I am a Software Engineer located in Florida and 
                        specializing in building and designing web applications.
                        Come check out some of my projects below!
                    </p>
                </div> 
            </div>
            
        </div>
    )
}
