import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Paragraph, Subtitle, SectionRow, SectionColLeft, SectionColRight } from '../../globalStyles';
import { 
    AboutContainer
} from './AboutMe.elements';

const AboutMe = ({ subtitle, title, paragraphOne, paragraphTwo }) => {
    return (
        <AboutContainer>
            <Container>
                <SectionRow> 

                    <SectionColLeft> 
                        <Subtitle> {subtitle} </Subtitle>
                    </SectionColLeft>

                    <SectionColRight>
                        <Paragraph> {paragraphOne} </Paragraph>
                        <Paragraph> {paragraphTwo} </Paragraph>
                    </SectionColRight>

                </SectionRow>
            </Container>
        </AboutContainer>
    )
}

export default AboutMe;
