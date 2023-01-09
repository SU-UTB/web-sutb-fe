import styled from "styled-components";

export const Icon = styled.a`
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
export const Title = styled.h1`
    font-size: 1.6em;
    font-weight: bolder;
    color: #000;
    text-align: top;
`;