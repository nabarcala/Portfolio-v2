import React from 'react';
// import { Link } from 'react-router-dom';
// import { Image, Transformation } from 'cloudinary-react';
import project from '../../pages/Home/projects-data';
import { Container, Button, Subtitle, SectionRow, SectionColLeft, SectionColRight, Paragraph } from '../../globalStyles';
import { 
    PortfolioContainer,
    ProjectsContainer,
    TopProjects,
    OtherProjects,
    ProjectName,
    ProjectBtns
} from './Portfolio.elements';

const Portfolio = ({ title, subtitle, imgStart }) => {

    const getTopProjects = project => {
        let topProjects = [];

        for(let i = 0; i < project.length; i++) {
            const item = project[i];

            if(item.top) { 
                topProjects.push(
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
        <PortfolioContainer>
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
                                {/* {otherProjects(project)} */}
                                {/* { project.map((project, index, start) => (
                                    <>
                                        <ProjectName> {project.title} </ProjectName>
                                        <Paragraph> {project.description} </Paragraph>
                                        
                                        <ProjectBtns> 
                                            { project.website !== "" && (
                                                <a href={project.website}>
                                                    <Button small frontSmall primary="false"> Live </Button>
                                                </a>
                                                // <a className="border-pink link" href={project.website}>Live</a>
                                            )} 

                                            { project.github !== "" &&(
                                                <a href={project.github}>
                                                    <Button small frontSmall primary="false"> GitHub </Button>
                                                </a>
                                            )
                                                // <a className="border-pink link" href={project.github}>GitHub</a> 
                                            }
                                        </ProjectBtns>
                                    </>
                                )) } */}
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
