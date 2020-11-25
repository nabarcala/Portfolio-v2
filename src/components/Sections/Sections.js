import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Container, Button } from '../../globalStyles';
import { 
    Sect,
    SectionRow,
    SectionCol, 
    TextWrapper,
    Heading,
    Banner,
    Subtitle,
    ImgWrapper,
    Img,
    BannerBtns
} from './Sections.elements';

const Sections = ({ banner, primary, imgStart, resumeButtonLabel, portfolioButtonLabel, description, headline, title, typewriterOptions, start, img, alt }) => {
    return (
        <>
            <Sect banner={banner}>
                <Container>
                    <SectionRow imgStart={imgStart}>

                        <SectionCol>
                            <TextWrapper>

                                <Heading> {headline} </Heading>
                                 
                                <Subtitle> 
                                    <Typewriter
                                        options={{
                                            strings: ["Front End Engineer", "Web Developer", "Software Developer", ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 90,
                                        }}
                                    />
                                 </Subtitle>

                                <Banner> {description} </Banner>

                                <BannerBtns>
                                    <Link to='/portfolio'>
                                        <Button big frontLarge> {portfolioButtonLabel} </Button>
                                    </Link>
                                    <Link to='/resume'>
                                        <Button big frontLarge primary={primary}> {resumeButtonLabel} </Button>
                                    </Link>
                                </BannerBtns>
                                
                            </TextWrapper>
                        </SectionCol>

                        <SectionCol>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </SectionCol>

                    </SectionRow>
                </Container>
            </Sect>
        </>
    )
}

export default Sections
