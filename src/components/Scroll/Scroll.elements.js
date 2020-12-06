
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import styled from 'styled-components';
import 
{ 
    Container,
    backgroundColor,
    backgroundDark,
    backgroundWhite,
    highlightColor,
} from '../../globalStyles';

export const ScrollContainer = styled(Link)`
    background-color: ${highlightColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25); 
    position: fixed;
    width: 40px;
    height: 40px;
    z-index: 1000; 
    right: 15px;
    bottom: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .4s;
    animation: fadeIn 0.5s;

    @media screen and (max-width: 960px) {
        display: none;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0%;
            bottom: -10px;
        }
        /* 50% {
            opacity: 40%;
            bottom: 10px;
        } */
        /* 100% {
            opacity: 50%;
        } */
    }

    &:visited {
        animation: fadeOut 0.5s;
        animation-delay: .5s;
        
        @keyframes fadeOut {
        100% {
            opacity: 0%;
            bottom: -10px;
        }
    }
    }

    
`;

export const ScrollArrow = styled(FiArrowUp)`
    background-color: transparent;
    font-size: 20px;
    margin: 10px;

    &:
`;

export const ScrollToTop = styled(Link)`
    /* color: ${({theme}) => theme.background}; */
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 3rem 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: ${highlightColor} !important; 
    }
    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        text-decoration: none;

        &:hover {
            color: ${highlightColor} !important; 
            transition: all 0.3s ease;
            text-decoration: none;
        }
    }
`;