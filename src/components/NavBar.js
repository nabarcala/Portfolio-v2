import React, {useRef} from 'react';
import {Link} from 'react-scroll';

import './Navbar.css'

export default function NavBar() {

    const toggleRef = useRef(null);
    const navRef = useRef(null);

    // Menu Show
    const showMenu = () => {
        navRef.current.classList.toggle('show');
    };

    // Active and remove active menu
    const navLink = document.querySelectorAll('.nav-link');

    function linkAction() {
        // Active link
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')

        // remove menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    };

    navLink.forEach(n => n.addEventListener('click', linkAction))

    return (
        <div>
            <header className='header-area'>
                <nav className='navbar navbar-expand-md navbar-dark sticky-top'>
                    <div>
                        <Link 
                        to="banner" 
                        activeClass="active" 
                        smooth={true}
                        offset={-500} 
                        duration={0}
                        className='navbar-brand border-pink'>
                            NB Portfolio
                        </Link>
                    </div>
                    <div className='nav-menu collapse navbar-collapse' id='nav-menu' ref={navRef}>
                        <ul className="navbar-nav ml-auto nav-list">
                            <li className="nav-exit mobile-menu-only">
                                <span onClick={showMenu}>
                                    <i className='bx bx-x'></i>
                                </span>
                            </li>
                            <li className="nav-item mobile-menu-only">
                                <Link 
                                to="banner" 
                                className="nav-link" 
                                activeClass="active"
                                smooth={true} 
                                duration={500}
                                onClick={showMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                to="about-me" 
                                className="nav-link" 
                                activeClass="active"
                                smooth={true} 
                                duration={500}
                                onClick={showMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                to="services" 
                                className="nav-link" 
                                activeClass="active"
                                smooth={true}
                                duration={500}
                                onClick={showMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                to="portfolio" 
                                className="nav-link" 
                                activeClass="active"
                                smooth={true}
                                duration={600}
                                onClick={showMenu}>
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* <Button linkTo='/contact' className='btns' buttonSize='btn--medium' buttonStyle='btn--outline'>Contact</Button> */}

                    <div className="nav-toggle" id="nav-toggle" ref={toggleRef} onClick={showMenu}>
                        <i className='bx bx-menu menu'></i> 
                    </div>
                </nav>
            </header>
        </div>
    )
}
