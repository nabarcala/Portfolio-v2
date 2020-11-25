
import styled from 'styled-components';


export const AboutContainer = styled.div`
    height: 100%;
    padding-bottom: 150px;

    @media screen and (max-width: 960px) {
        height: 100%;
        padding-bottom: 50px;
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