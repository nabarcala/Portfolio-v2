// import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import styled from 'styled-components';
import 
{ 
    colorWhite
} from '../../globalStyles';

export const FooterContainer = styled.div`
    padding: 8rem 0 4rem 0;
    display: flex;
    justify-content: center;
`;

export const FooterLinks = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const FooterItem = styled.a`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none !important;
    font-size: 1.8rem;
    display: flex;
    align-items: center;

    &:hover {
        color: ${colorWhite};
    }
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
    margin: 0 1rem;
`;

export const GitHubIcon = styled(FaGithub)`
    margin: 0 1rem;
`;

export const CodePenIcon = styled(FaCodepen)` 
    margin: 0 1rem;
`;