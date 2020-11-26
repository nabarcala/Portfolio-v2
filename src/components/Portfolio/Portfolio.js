import React from 'react';
// import { Link } from 'react-router-dom';
// import { Image, Transformation } from 'cloudinary-react';
import project from '../../pages/Home/projects-data';
import { Container, Button, Subtitle, SectionRow, SectionColLeft, SectionColRight, Paragraph, ArrowRight, ArrowLink } from '../../globalStyles';
import { 
    PortfolioContainer,
    ProjectsContainer,
    TopProjects,
    OtherProjects,
    ProjectName,
    ProjectBtns,
    SectionColImg,
    ImgWrapper, 
    ProjectImage, 
    ProjectText, 
    SectionCol,
    Description,
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
                        {/* { project.map((project, index, start) => (
                    

                        <SectionColImg>
                            <ImgWrapper start={start}>
                                <ProjectImage publicId={project.image} cloudName="nbrcl"></ProjectImage>
                            </ImgWrapper>
                        </SectionColImg>

                        <SectionCol>
                            <ProjectText>
                                <ProjectName> {project.title} </ProjectName>
                                <Description> {project.description} </Description>
                                <ProjectBtns> 
                                    { project.website !== "" && (
                                        <a href={project.website}>
                                            <Button small frontSmall primary="false"> Live </Button>
                                        </a>
                                    )} 

                                    { project.github !== "" &&(
                                        <a href={project.github}>
                                            <Button small frontSmall primary="false"> GitHub </Button>
                                        </a>
                                    )
                                        // <a className="border-pink link" href={project.github}>GitHub</a> 
                                    }
                                </ProjectBtns>
                            </ProjectText>
                        </SectionCol>
                    </SectionRow>
                )) } */}

                        <MultiImages>
                            <ImgWrapper start={start}>
                                <ProjectImage publicId={item.image} cloudName="nbrcl"></ProjectImage>
                            </ImgWrapper>
                        </MultiImages>
                        <ProjectText>
                            <ProjectName> 
                                <ArrowLink>
                                    {item.title} <ArrowRight></ArrowRight>
                                </ArrowLink>
                                    
                            </ProjectName>
                            <Paragraph> {item.description} </Paragraph>
                            
                            {/* <ProjectBtns> 
                                { item.website !== "" && (
                                    <a href={item.website}>
                                        <Button small frontSmall primary="false"> Live </Button>
                                    </a>
                                    // <a className="border-pink link" href={item.website}>Live</a>
                                )} 

                                { item.github !== "" &&(
                                    <a href={item.github}>
                                        <Button small frontSmall primary="false"> GitHub </Button>
                                    </a>
                                )
                                    // <a className="border-pink link" href={project.github}>GitHub</a> 
                                }
                            </ProjectBtns> */}
                        </ProjectText>


                        {/* <SectionRow imgStart={imgStart}>
                            <SectionColImg>
                                <ImgWrapper start={start}>
                                    <ProjectImage publicId={item.image} cloudName="nbrcl"></ProjectImage>
                                </ImgWrapper>
                            </SectionColImg>
                            <SectionCol>
                                <ProjectText>
                                    <ProjectName> {item.title} </ProjectName>
                                    <Paragraph> {item.description} </Paragraph>
                                    
                                    <ProjectBtns> 
                                        { item.website !== "" && (
                                            <a href={item.website}>
                                                <Button small frontSmall primary="false"> Live </Button>
                                            </a>
                                            // <a className="border-pink link" href={item.website}>Live</a>
                                        )} 

                                        { item.github !== "" &&(
                                            <a href={item.github}>
                                                <Button small frontSmall primary="false"> GitHub </Button>
                                            </a>
                                        )
                                            // <a className="border-pink link" href={project.github}>GitHub</a> 
                                        }
                                    </ProjectBtns>
                                </ProjectText>
                            </SectionCol>
                        </SectionRow> */}


                        {/* <ProjectName> {item.title} </ProjectName>
                        <Paragraph> {item.description} </Paragraph>
                        
                        <ProjectBtns> 
                            { item.website !== "" && (
                                <a href={item.website}>
                                    <Button small frontSmall primary="false"> Live </Button>
                                </a>
                                // <a className="border-pink link" href={item.website}>Live</a>
                            )} 

                            { item.github !== "" &&(
                                <a href={item.github}>
                                    <Button small frontSmall primary="false"> GitHub </Button>
                                </a>
                            )
                                // <a className="border-pink link" href={project.github}>GitHub</a> 
                            }
                        </ProjectBtns>  */}
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
                                // <a className="border-pink link" href={item.website}>Live</a>
                            )} 
    
                            { item.github !== "" &&(
                                <a href={item.github}>
                                    <Button small frontSmall primary="false"> GitHub </Button>
                                </a>
                            )
                                // <a className="border-pink link" href={project.github}>GitHub</a> 
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

        
                {/* { project.map((project, index, start) => (
                    <SectionRow imgStart={imgStart}>

                        <SectionColImg>
                            <ImgWrapper start={start}>
                                <ProjectImage publicId={project.image} cloudName="nbrcl"></ProjectImage>
                            </ImgWrapper>
                        </SectionColImg>

                        <SectionCol>
                            <ProjectText>
                                <ProjectName> {project.title} </ProjectName>
                                <Description> {project.description} </Description>
                                <ProjectBtns> 
                                    { project.website !== "" && (
                                        <a href={project.website}>
                                            <Button small frontSmall primary="false"> Live </Button>
                                        </a>
                                    )} 

                                    { project.github !== "" &&(
                                        <a href={project.github}>
                                            <Button small frontSmall primary="false"> GitHub </Button>
                                        </a>
                                    )
                                        // <a className="border-pink link" href={project.github}>GitHub</a> 
                                    }
                                </ProjectBtns>
                            </ProjectText>
                        </SectionCol>
                    </SectionRow>
                )) } */}

        </PortfolioContainer>
    )
}

export default Portfolio;
