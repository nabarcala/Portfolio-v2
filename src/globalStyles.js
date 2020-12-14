import styled, { createGlobalStyle } from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';
// All global styles in this file

export const backgroundColor = '#222831';
export const backgroundDark = '#1c2027';
export const backgroundWhite = '#fbfbfb';
export const backgroundLight = '#333b47';
export const highlightColor = '#dc789d'; 
export const highlightDark = '#bd4a74';
export const colorWhite = '#fff'
export const colorLightGray = '#f6f6f7';
export const colorDark = '#222831';

export const lightTheme = {
    text: "#222831",
    background: '#fcfbfb', 
    highlight: '#bd4a74'
};

export const darkTheme = {
    text: "#fbfbfb",
    background: '#222831',
    highlight: '#dc789d'
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    * {
        background: ${props =>
            props.theme.mode === 'dark' ? darkTheme.background : lightTheme.background
        };
        
        color: ${props =>
            props.theme.mode === 'dark' ? darkTheme.text : lightTheme.text
        };
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 960px) {
        padding-right: 35px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ?  'transparent' : highlightColor) };
    border: 2px solid ${highlightColor} !important;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '3px 13px')};
    margin: ${({big}) => (big ? '20px 0' : '5px 0')};
    margin-left: 10px;
    /* color: ${({theme}) => theme.text}; */
    font-size: ${({fontLarge}) => (fontLarge ? '20px' : '14px')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:nth-of-type(1) {
        margin-left: 0;
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        border: 2px solid transparent !important; 
        background: ${highlightDark};
    }
    @media screen and (max-width: 960px) {
        width: 100%;    
        width: ${({big}) => (big ? '100%' : 'auto')}; 
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 15px;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    line-height: 1.1;
    /* color: ${({darkTheme}) => (darkTheme ? colorWhite : colorDark)}; */
    margin-bottom: 16px;
`;

export const Subtitle = styled.div`
    color: ${highlightColor};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 24px;
    margin: 10px 10px 10px 0;
`;

export const Paragraph = styled.p`
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    margin: 10px 0;
    max-width: 80%;
    /* max-width: 500px; */

    @media screen and (max-width: 768px) {
        /* padding-bottom: 65px; */
    }
`;

export const SectionRow = styled.div`
    color: ${colorWhite};
    display: flex;
    margin: 0 -15px -15px;
    flex-wrap: wrap;
    /* align-items: center; */
    // Change the side the image appears
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const SectionCol = styled.div`
    /* background-color: wheat; */
    flex: 1;
    max-width: 45%;
    flex-basis: 50%;
    text-align: left;
    margin-left: 15px;
    /* margin-top: 15px; */

    @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const SectionColLeft = styled.div`
    /* background-color: wheat; */
    flex: 1;
    max-width: 25%;
    flex-basis: 50%;
    text-align: right;
    margin-right: 20px;
    margin-top: 5px;

    @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
    }
`;

export const SectionColRight = styled.div`
    /* background-color: gray; */
    flex: 1;
    max-width: 75%;
    flex-basis: 50%;
    justify-content: left;
    margin-left: 20px;

    @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const ArrowRight = styled(BsArrowRightShort)`
    font-size: 40px;
    margin-bottom: -15px;
    margin-left: 5px;
    color: ${highlightColor} !important; 
    cursor: pointer;
    transition: .4s ease-in-out;
`;

export const ArrowLink = styled.a`
    text-decoration: none !important;
    cursor: pointer;

    &:hover ${ArrowRight} {
        color: ${highlightColor};margin-left: 15px;
    }
`;

export const MyLink = styled.a`
    text-decoration: none;

    &:hover {
        color: ${highlightColor}; 
    }
`;

export default GlobalStyle;