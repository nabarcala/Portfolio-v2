import React from 'react';
import { Container, Button, Title, Subtitle } from '../../globalStyles';
import { 
    ServicesContainer,
    TextWrapper
} from './Services.elements';

const Services = ({ title, subtitle }) => {
    return (
        <ServicesContainer>
            <TextWrapper>
                <Subtitle> {subtitle} </Subtitle>
                <Title> {title} </Title>
            </TextWrapper>
            {/* <ServicesCards>
                <ServiceCard></ServiceCard>
            </ServicesCards> */}
        </ServicesContainer>
    )
}

export default Services;
