import React from 'react';
import { Container, Paragraph, Subtitle, SectionRow, SectionColLeft, SectionColRight, ArrowRight, ArrowLink } from '../../globalStyles';
import { 
    AboutContainer
} from './AboutMe.elements';

const AboutMe = ({ subtitle, title, paragraphOne, paragraphTwo, paragraphThree, resumeLink, resumeName }) => {
    return (
        <AboutContainer id="about">
            <Container>
                <SectionRow> 

                    <SectionColLeft> 
                        <Subtitle> {subtitle} </Subtitle>
                    </SectionColLeft>

                    <SectionColRight>
                        <Paragraph> {paragraphOne} </Paragraph>
                        <Paragraph> {paragraphTwo} </Paragraph>
                        <Paragraph> {paragraphThree} </Paragraph>

                        <br></br>

                        <Paragraph> 
                            <ArrowLink href={resumeLink} download={resumeName}>
                                Download my resume <ArrowRight></ArrowRight>
                            </ArrowLink>
                        </Paragraph>
                    </SectionColRight>

                </SectionRow>
            </Container>
        </AboutContainer>
    )
}

export default AboutMe;
