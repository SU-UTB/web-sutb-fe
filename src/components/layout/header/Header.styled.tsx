import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 1rem;
    position: relative;
`;
export const LogoText = styled.img<{
    size: number
}>(
    ({ size }) => css`
        width: ${size}px;
        height: auto;
        display: none;  
        @media only screen and (min-width: 768px) {
            display:block;
        }
`);
export const LogoSVG = styled.img<{
    size: number
}>(
    ({ size }) => css`
        width: ${size}px;
        height: auto;
        border-radius: 50%;
        @media only screen and (min-width: 768px) {
            display: none;
        }
`);
export const Title = styled.h1<{
    color?: string;
}>(
    ({ color }) => css`
        font-size: 1.5em;
        font-weight: 400;
        color: #000;
        
        ${color && css`
            color: ${color};
        `}
        @media only screen and (min-width: 768px) {
            display: none;
        }
`);
export const MenuButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    color: #000;
    font-size: 40px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;