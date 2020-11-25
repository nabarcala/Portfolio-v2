import React from 'react';
import {
    FooterContainer,
    FooterLinks,
    FooterItem,
    LinkedInIcon,
    GitHubIcon,
    CodePenIcon
} from './Footer.elements';


const Footer = ({ 
    linkedInLink,
    gitHubLink,
    codePenLink
 }) => {
    return (
        <FooterContainer>
            <FooterLinks>
                <FooterItem href={linkedInLink}>
                    <LinkedInIcon /> 
                </FooterItem>
                <FooterItem href={gitHubLink}>
                    <GitHubIcon />
                </FooterItem>
                <FooterItem href={codePenLink}>
                    <CodePenIcon />
                </FooterItem>
            </FooterLinks>
        </FooterContainer>
    )
}

export default Footer;
