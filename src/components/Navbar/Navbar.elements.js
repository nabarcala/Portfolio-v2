
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { RiPlantFill } from 'react-icons/ri';
import styled from 'styled-components';
import 
{ 
    Container,
    backgroundColor,
    backgroundDark,
    backgroundWhite,
    highlightColor,
} from '../../globalStyles';

export const Nav = styled.nav`
    background: transparent !important;
    /* background: ${({darkTheme}) => (darkTheme ? backgroundColor : backgroundWhite)}; */
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    // include the container css from global styles
    ${Container}
`;

export const NavLogo = styled(Link)`
    /* color: ${({theme}) => theme.text}; */
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none !important;
    font-size: 1.8rem;
    display: flex;
    align-items: center;

    &:hover {
        color: ${({theme}) => theme.text};
    }
`;

export const NavIcon = styled(RiPlantFill)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: -10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        // If memu is clicked, show the menu
        // otherwise hide it
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all .5s ease;
        background: ${backgroundDark};
    }
`;

export const NavItem = styled.li`
    height: 80px;
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const NavLinks = styled(Link)`
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

export const NavBtn = styled.li`
    padding-top: 10px;
    padding-left: 10px;

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 80%; */
        height: 100%;
        padding: 8px 16px;
        text-decoration: none !important;
        outline: none;
        border: none;
    }
`;