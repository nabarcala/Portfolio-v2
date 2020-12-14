import React from 'react';
// import { Link } from 'react-router-dom';
// import { Image, Transformation } from 'cloudinary-react';
import project from '../../pages/Home/projects-data';
import { Container, Button, Subtitle, SectionRow, SectionColLeft, SectionColRight, Paragraph,  } from '../../globalStyles';
import { 
    PortfolioContainer,
    ProjectsContainer,
    TopProjects,
    OtherProjects,
    ProjectName,
    ProjectBtns,
    ImgWrapper, 
    ProjectImage, 
    ProjectText, 
    ProjectLink,
    MultiImages
} from './Portfolio.elements';

const Portfolio = ({ title, subtitle, imgStart, start }) => {

    const getTopProjects = project => {
        let topProjects = [];

        for(let i = 0; i < project.length; i++) {
            const item = project[i];

            if(item.top) { 
                topProjects.push(
                    <div key={i}>
                        <MultiImages>
                            <ImgWrapper start={start}>

                                    { item.website !== "" ? (
                                        <a href={item.website}>
                                            <ProjectImage publicId={item.image} cloudName="nbrcl"></ProjectImage>
                                        </a>
                                    ) : (
                                        <a href={item.github}>
                                            <ProjectImage publicId={item.image} cloudName="nbrcl"></ProjectImage>
                                        </a>
                                    )}

                            </ImgWrapper>
                        </MultiImages>
                        <ProjectText>
                            <ProjectName> 
                                {/* <ProjectLink>  */}
                                    
                                    { item.website !== "" ? (
                                        <ProjectLink href={item.website}>
                                            {item.title} 
                                        </ProjectLink>
                                    ) : (
                                        <ProjectLink href={item.github}>
                                            {item.title} 
                                        </ProjectLink>
                                    )}
                                    {/* <ArrowRight></ArrowRight> */}
                                {/* </ArrowLink> */}
                                    
                            </ProjectName>
                            <Paragraph> {item.description} </Paragraph>
                           
                        </ProjectText>


                    </div>
                );
            }
        }
        return topProjects;
    };

    const getOtherProjects = project => {
        let otherProjects = [];

        for(let i = 0; i < project.length; i++) {
            const item = project[i];

            if(item.top === false) { 
                otherProjects.push(
                    <div key={i}>
                        <ProjectName> {item.title} </ProjectName>
                        <Paragraph> {item.description} </Paragraph>
                        
                        <ProjectBtns> 
                            { item.website !== "" && (
                                <a href={item.website}>
                                    <Button small frontSmall primary="false"> Live </Button>
                                </a>
                            )} 
                            { item.github !== "" &&(
                                <a href={item.github}>
                                    <Button small frontSmall primary="false"> GitHub </Button>
                                </a>
                            )
                            }
                        </ProjectBtns> 
                    </div>
                );
            }
        }
        return otherProjects;
    };


    return (
        <PortfolioContainer id='portfolio'> 
            <Container>

                <TopProjects>
                    <SectionRow> 
                        <SectionColLeft> 
                            <Subtitle> {title} </Subtitle>
                        </SectionColLeft>

                        <SectionColRight>
                            <ProjectsContainer>
                                {getTopProjects(project)}
                            </ProjectsContainer>
                        </SectionColRight>
                    </SectionRow>
                </TopProjects>

                <OtherProjects>
                    <SectionRow> 
                        <SectionColLeft> 
                            <Subtitle> {subtitle} </Subtitle>
                        </SectionColLeft>
                        <SectionColRight>
                            <ProjectsContainer>
                                {getOtherProjects(project)}
                            </ProjectsContainer>
                        </SectionColRight>
                        </SectionRow>
                </OtherProjects>

            </Container>

        </PortfolioContainer>
    )
}

export default Portfolio;
