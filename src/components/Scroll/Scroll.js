import React, { useState, useEffect } from 'react';
import cn from "classnames";
import { 
    ScrollContainer,
    ScrollArrow,
} from './Scroll.elements';

export const Scroll = () => {

    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 140) {
            setVisibility(true);
        } else if(window.pageYOffset <= 140) {
            setVisibility(false);
        }
    };
    
    window.addEventListener("scroll", toggleVisibility);

    return (
        <>
            <ScrollContainer 
                className="scroll"
                // onScroll={toggleVisibility}
                style={{display: visibility ? 'flex' : 'none'}}
                // ref={scrollBtnRef} 
                to='home'
                id="ScrollLink"
                // activeClass="active"
                smooth={true}
                duration={500} 
                offset={-100}
            >
                    <ScrollArrow></ScrollArrow>
            </ScrollContainer>
        </>
    )
}
