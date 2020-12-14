import styled from 'styled-components';
import 
{ 
    backgroundColor,
    highlightDark,
    colorWhite
} from '../../globalStyles';

export const Sect = styled.div`
    /* color: ${colorWhite}; */ 
    padding: 160px 0;
    /* background: ${backgroundColor};  */
    /* height: 100vh; */
    height: ${({banner}) => (banner ? 'calc(100vh - 80px)' : '100%')};

    @media screen and (max-width: 960px) {
        padding-top: 80px;
        height: 100%;
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

export const SectionCol = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
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

export const Heading = styled.h1`
    font-size: 38px;
    line-height: 1.1;
    /* color: ${colorWhite}; */
    margin-bottom: 16px;
`;

export const Subtitle = styled.div`
    color: ${highlightDark} !important;
    font-size: 28px;
    line-height: 16px;
    letter-spacing: 1.4px;
    /* line-height: 40px; */
    flex-wrap: wrap;
    margin: 20px 0;
    /* margin: 30px 10px 55px 0; */

    @media screen and (max-width: 1060px) {
        /* font-size: 30px; */
    }
`;

export const Banner = styled.p`
    font-size: 20px;
    line-height: 24px;
    /* color: ${colorWhite}; */
    margin-bottom: 35px;
    margin-top: 34px; 
    max-width: 500px;

    @media screen and (max-width: 768px) {
        margin-bottom: 35px;
    }
`;

export const BannerBtns = styled.div`
    margin-top: 65px;
    margin-left: 20px;

    @media screen and (max-width: 960px) {
        margin-top: 35px;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
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

