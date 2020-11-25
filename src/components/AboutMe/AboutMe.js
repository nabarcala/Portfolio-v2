import React from 'react';
import { Container, Paragraph, Subtitle, SectionRow, SectionColLeft, SectionColRight } from '../../globalStyles';
import { 
    AboutContainer
} from './AboutMe.elements';

const AboutMe = ({ subtitle, title, paragraphOne, paragraphTwo, paragraphThree }) => {
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
                        <Paragraph> {paragraphThree} </Paragraph>
                    </SectionColRight>

                </SectionRow>
            </Container>
        </AboutContainer>
    )
}

export default AboutMe;
