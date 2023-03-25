import styled, { css } from 'styled-components';

import BaseButton from '../../shared/BaseButton';

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
export const Logo = styled.img<{
    desktop?: boolean;
}>(
    ({ desktop }) => css`  
        ${!desktop && css`
            aspect-ratio: 1/1;    
            display: block;  
            @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
                display: none;
            }
        `}
        ${desktop && css`
            aspect-ratio: 799/116;
            display: block;
            @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                display: none;
            }
        `}
`);
export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 400;
    color: #000;
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;
export const MenuButton = styled(BaseButton)`
    width: 40px;
    height: 40px;
    color: #000;
    font-size: 40px;
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;