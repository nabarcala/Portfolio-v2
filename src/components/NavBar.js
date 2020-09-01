import React from 'react'
import {Link} from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css'

export default function NavBar() {
    return (
        <div>
            <nav className='navbar'>
                <Link to='' className='navbar-logo'>NB</Link>
                <ul className="nav-menu">
                    <li className="nav-item"><Link to=''>Home</Link></li>
                    <li className="nav-item"><Link to=''>Portfolio</Link></li>
                    <li className="nav-item"><Link to=''>Skills</Link></li>
                </ul>
                <Button linkTo='/contact' className='btns' buttonSize='btn--medium' buttonStyle='btn--outline'>Contact</Button>
            </nav>
        </div>
    )
}
