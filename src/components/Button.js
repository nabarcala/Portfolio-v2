import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

// CSS button classes (styles and sizes)
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// 
export const Button = ({
    children, 
    type,
    linkTo, 
    // onClick, 
    buttonStyle, 
    buttonSize
}) => {
    // If the button does not have a class listed above, automatically apply the first class 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    // 
    return (
        <Link to={linkTo} className="btn-mobile">
            <button 
            // Add the button style and size
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                // onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};