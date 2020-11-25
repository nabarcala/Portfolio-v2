
import styled from 'styled-components';
import 
{ 
    backgroundColor
} from '../../globalStyles';

export const ServicesContainer = styled.div`
    background: ${backgroundColor};
`;

export const TextWrapper = styled.div`
    padding-top: 54px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;