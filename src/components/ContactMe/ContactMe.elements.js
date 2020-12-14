
import styled from 'styled-components';
import 
{ 
    highlightDark,
    colorWhite,
    backgroundLight,
} from '../../globalStyles';

export const ContactContainer = styled.div`
    height: 100%;
    padding-bottom: 150px;

    @media screen and (max-width: 960px) {
        height: 100%;
        padding-bottom: 50px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* margin-top: 5px; */
    width: 100%;

    @media screen and (max-width: 960px) {
        padding-right: 15px;
    }
`;

export const Input = styled.input`
    margin-top: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${backgroundLight};
    background-color: ${backgroundLight};

    @media screen and (max-width: 960px) {
        
    }
`;

export const TextArea = styled.textarea`
    margin-top: 10px;
    /* margin-bottom: 5px; */
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${backgroundLight};
    background-color: ${backgroundLight};

    @media screen and (max-width: 960px) {
        
    }
`;

export const SentMesage = styled.div`
    /* display: none; */
    width: 340px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 5px;
    font-weight: bold;
    border-radius: 5px;
    background-color: ${colorWhite};
    color: ${highlightDark};
`;

export const BoldSubTitle = styled.li`
    font-weight: 900;
    margin-bottom: -4px;
    text-decoration: none;
    list-style: none;
`;



export const NotSentMesage = styled.div`
    display: none;
`;

