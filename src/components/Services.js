import React from 'react';
import {Link} from 'react-router-dom';

import './Services.css';

export default function Services() {
    return (
        // <!-- Services Offered -->
        <section className="services" id="services">
            <div className="container">
                <div className="text-center">
                    <h5 className="small-header">Services</h5>
                    <h3 className="big-header">What I Can Offer</h3>
                </div>
                <div className="services-main">
                    <div className="single-service">
                        <div className="bg"></div>
                        <div className="services-inner">
                            <span className="service-python"><i className="fab fa-python"></i></span>
                            <h3>Python Developer</h3>
                            <p> I am most experienced with Python. 
                                This website was created using Python and 
                                the Flask framework! </p>
                                <a>More Coming Soon</a>
                        </div>
                    </div>
                    <div className="single-service active">
                        <div className="bg"></div>
                        <div className="services-inner">
                            <span className="service-web"><i className="fas fa-code"></i></span>
                            <h3>Web Developer</h3>
                            <p> Besides Python, I have used HTML, CSS, and jQuery, 
                                along with Bootstrap, the popular CSS Framework.</p>
                                <a>More Coming Soon</a>
                        </div>
                    </div>
                    <div className="single-service">
                        <div className="bg"></div>
                        <div className="services-inner">
                            <span className="service-hobby"><i className="fas fa-palette"></i></span>
                            <h3>Art and Etsy</h3>
                            <p> I enjoy creating artworks in my free time. 
                                This includes traditional and digital artwork. 
                                I have also created simple leather wallets! </p>
                                <a href="https://www.etsy.com/shop/TachasWorkshop">More Coming Soon</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
