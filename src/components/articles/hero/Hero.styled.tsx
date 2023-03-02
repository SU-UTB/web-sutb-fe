import styled, { css } from 'styled-components';

export const HeroImage = styled.div<{
    src?: string;
    dark?: boolean;
}>(
    ({ src, dark }) => css`
        background-image: url(${src});
        width: 100%;
        aspect-ratio: 16 / 9;
        background-position: center;
        background-repeat: no -repeat;
        background-size: cover;
        position: relative;

        ${dark && css`
            background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${src});
        `}   
`);
export const HeroText = styled.h1`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 3rem;
`;
