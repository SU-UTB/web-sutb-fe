import styled from '@emotion/styled'

const Icon = styled.a`
    font-size: 1.5em;
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
        
    :not(:first-child){
        margin-inline: 1rem;
    };
`;

export default Icon;