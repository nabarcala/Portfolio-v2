import React from 'react'
import {Link} from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css'

export default function NavBar() {
    return (
        <div>
            <header className='header-area'>
                <nav className='navbar navbar-expand-md navbar-dark sticky-top'>
                    <div>
                        <Link to='' className='navbar-brand border-pink'>NB Portfolio</Link>
                    </div>
                    <div className='nav-menu collapse navbar-collapse' id='nav-menu'>
                        <ul className="navbar-nav ml-auto nav-list">
                            <li className="nav-item active"><Link to='' className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to='' className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to='' className="nav-link">Services</Link></li>
                            <li className="nav-item"><Link to='' className="nav-link">Portfolio</Link></li>
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
