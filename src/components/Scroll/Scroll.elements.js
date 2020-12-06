
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import styled from 'styled-components';
import 
{ 
    highlightColor,
    highlightDark,
} from '../../globalStyles';

export const ScrollArrow = styled(FiArrowUp)`
    background-color: transparent;
    font-size: 20px;
    margin: 10px;
`;

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
    }

    &:hover {
        background-color: ${highlightDark};
        transition: ease-in-out 0.5s;
    }
`;


