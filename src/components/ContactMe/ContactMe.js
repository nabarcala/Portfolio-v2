import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import { Container, Button, Subtitle, SectionRow, SectionCol, SectionColLeft, SectionColRight, Paragraph, MyLink,  } from '../../globalStyles';
import { 
    ContactContainer,
    Form, 
    Input,
    TextArea,
    SentMesage,
    NotSentMesage, 
    BoldSubTitle,
} from './ContactMe.elements';

export const ContactMe = ({ title }) => {

    // const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, isSent] = useState(false);

    // Submit handler
    const formSubmit = (e) => {
        e.preventDefault();

        // Gather all the data for the email message
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            isSent(true);
            resetForm();
        }, (error) => {
            console.log(error.text);
        });
    };

    // Rest the form after sending
    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');

        setTimeout(() => {
            isSent(false);
        }, 3000);
    };

    return (
        <ContactContainer id="contact">
            <Container>
                <SectionRow> 

                    <SectionColLeft> 
                        <Subtitle> {title} </Subtitle>
                    </SectionColLeft>

                    <SectionColRight>
                        <SectionRow>
                            <SectionCol>
                                <Paragraph>
                                    Do you have any questions or are interested in connecting? Send me a message!
                                </Paragraph>
                                <Paragraph>
                                    <BoldSubTitle>Email</BoldSubTitle>
                                    <MyLink href="mailto: nabarcala@gmail.com"> nabarcala@gmail.com </MyLink>
                                </Paragraph>
                                <Paragraph> 
                                    <BoldSubTitle>LinkedIn</BoldSubTitle>
                                    <MyLink href="https://www.linkedin.com/in/natacha-barcala"> linkedin.com/in/natacha-barcala </MyLink> 
                                </Paragraph>
                            </SectionCol>
                            <SectionCol>
                                <Form onSubmit={formSubmit} name="contact" action="/contact" method="post" netlify netlify-honeypot="bot-field" hidden>
                                    <Input 
                                        required 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name *" 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <Input 
                                        required 
                                        type="text" 
                                        name="email" 
                                        placeholder="Email *"  
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <Input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject"  
                                        value={subject}
                                        onChange={e => setSubject(e.target.value)}
                                    />
                                    <TextArea 
                                        required 
                                        name="message" 
                                        cols="30" 
                                        rows="15" 
                                        placeholder="Type your message here *"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        /> 
                                    { sent === true ? (
                                        <SentMesage 
                                        className="msg" > Message has been sent!</SentMesage>
                                    ): (
                                        <NotSentMesage 
                                        className="msg" > Message has been sent!</NotSentMesage>
                                    )}
                                    <Button big frontLarge primary="true" type="submit"> Send a Message </Button>
                                </Form>
                            </SectionCol>

                        </SectionRow>
                    </SectionColRight>
                </SectionRow>
            </Container>
        </ContactContainer>
    )
}
