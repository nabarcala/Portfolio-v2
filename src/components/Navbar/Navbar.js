// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements';

const Navbar = () => {
    const [click, setCick] = useState(false);
    // const [button, setButton] = useState(true);
    
    const handleClick = () => setCick(!click);

    // const showButton = () => 
    // {
    //     // Set to false if in mobile mode
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // }

    // Active and remove active menu
    // const navLink = document.querySelectorAll('#NavLinks');

    // const linkAction = () => {
    //     // Active link
    //     navLink.forEach(n => n.classList.remove('active'));
    //     this.classList.add('active');
    // };

    // navLink.forEach(n => n.addEventListener('click', linkAction));

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#994141' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            N. Barcala
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        {/* NavMenu */}
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks 
                                    onClick={handleClick}
                                    to='home'
                                    id="NavLinks"
                                    activeClass="active"
                                    smooth={true}
                                    duration={500} >
                                        Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    onClick={handleClick}
                                    to='about'
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-100} >
                                        About Me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    onClick={handleClick}
                                    to='portfolio'
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-30} >
                                        Portfolio
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    onClick={handleClick}
                                    to='contact'
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-100} >
                                        Contact Me
                                </NavLinks>
                            </NavItem>

                            {/* <NavBtn>
                                {button ? (
                                    <NavBtnLink to='about'
                                        activeClass="active"
                                        smooth={true}
                                        duration={500}
                                        offset={-100}>
                                        <Button primary>RESUME</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='about'
                                        activeClass="active"
                                        smooth={true}
                                        duration={500}
                                        offset={-100}>
                                            <Button fontBig primary>RESUME</Button> 
                                    </NavBtnLink>
                                )}
                                
                            </NavBtn> */}
                            {/* End NavMenu */}

                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

