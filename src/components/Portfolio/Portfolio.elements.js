import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import 
{ 
    Container,
    backgroundColor,
    backgroundDark,
    backgroundLight,
    highlightColor,
    highlightDark,
    colorWhite
} from '../../globalStyles';

export const PortfolioContainer = styled.div`
    padding: 70px 0; 
    height: 100%;
    
    @media screen and (max-width: 960px) {
        padding-top: 60px;
    }
`;

export const SectionRow = styled.div`
    display: flex;
    margin: 0 -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    // Change the side the image appears
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const SectionColImg = styled.div`
    /* background-color: blue; */
    margin: auto;
    flex: 1;
    max-width: 70%;
    flex-basis: 70%;

    @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const SectionCol = styled.div`
    /* background-color: red; */
    /* margin: auto; */

    flex: 1;
    max-width: 30%;
    flex-basis: 30%;

    @media screen and (max-width: 960px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: left;
    }
`;

export const TextWrapper = styled.div`
    /* max-width: 540px; */
    padding-top: 54px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`; 

export const ProjectsContainer = styled.div`
    margin: 15px 0;
    width: 100%;
    display: block;
    overflow: hidden;

    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    overflow: hidden; */
`;

export const TopProjects = styled.div`
    height: 100%;
    padding-bottom: 150px;

    @media screen and (max-width: 960px) {
        height: 100%;
        padding-bottom: 50px;
    }
`;

export const OtherProjects = styled.div`
    height: 100%;
    padding-bottom: 150px;

    @media screen and (max-width: 960px) {
        height: 100%;
        padding-bottom: 50px;
    }
`;

export const ProjectCard = styled.div`
    background-color: blue;
    margin-bottom: 50px;
    max-height: 360px;
    width: 100%;
    overflow: hidden;
`;

export const ProjectImage = styled(Image)`
    /* display: block;
    object-fit: cover;
    object-position: 50% 50%;
    width: 90%;
    height: 100%; */
    margin: auto;
    padding-right: 0;
    border: 0;
    max-width: 100%;
    display: inline-block;
    vertical-align: middle;
    max-height: 500px;
    padding-bottom: 40px;

    /* display: block;
    width: 100%;
    object-fit: contain; 
    overflow: hidden;
    background-color: ${backgroundDark};
    margin: auto;
    object-position: 50% 50%;  */
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
`;

export const ProjectName = styled.div`
    font-size: 17px;
    font-weight: 700;
    /* margin-bottom: 30px; */

    /* @media screen and (max-width: 768px) {
        margin-top: 0px;
    } */
`;

export const Description = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: ${colorWhite};
    margin-bottom: 35px;
    /* max-width: 500px; */

    @media screen and (max-width: 768px) {
        /* padding-bottom: 65px; */
    }
`;


export const ProjectBtns = styled.div`
    margin: auto;
    margin-bottom: 50px;

    @media screen and (max-width: 960px) {
        justify-content: center;
    }
`;


export const ImgWrapper = styled.div`
    max-width: 855px;
    display: flex;
    // Start the image of the edge of the container
    justify-content:  ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;


export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    display: inline-block;
    vertical-align: middle;
    max-height: 500px;
    padding-bottom: 40px;
`;