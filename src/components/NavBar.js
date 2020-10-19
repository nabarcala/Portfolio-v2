import React, {Component} from 'react'
// import {Link} from 'react-router-dom';
import {Link} from 'react-scroll';

import { Button } from './Button';
import './Navbar.css'

export default class NavBar extends Component {

    state = {};

    render(){
        return (
            <div>
                <header className='header-area'>
                    <nav className='navbar navbar-expand-md navbar-dark sticky-top'>
                        <div>
                            <Link to='' className='navbar-brand border-pink'>NB Portfolio</Link>
                        </div>
                        <div className='nav-menu collapse navbar-collapse' id='nav-menu'>
                            <ul className="navbar-nav ml-auto nav-list">
                                <li className="nav-item active">
                                    <Link 
                                    to="banner" 
                                    className="nav-link" 
                                    activeClass="active" 
                                    spy="" 
                                    smooth={true}
                                    duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                    to="about-me" 
                                    className="nav-link" 
                                    activeClass="active" 
                                    spy="" 
                                    smooth={true} 
                                    duration={500}>
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                    to="services" 
                                    className="nav-link" 
                                    activeClass="active" 
                                    spy="" 
                                    smooth={true}
                                    duration={500}>
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                    to="portfolio" 
                                    className="nav-link" 
                                    activeClass="active" 
                                    spy="" 
                                    smooth={true}
                                    duration={600}>
                                        Portfolio
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* <Button linkTo='/contact' className='btns' buttonSize='btn--medium' buttonStyle='btn--outline'>Contact</Button> */}

                        <div className="nav-toggle" id="nav-toggle">
                            <i className='bx bx-menu menu'></i> 
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
