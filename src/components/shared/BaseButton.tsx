import styled, { css } from 'styled-components';

const BaseButton = styled.button<{
    active?: boolean,
    style?: boolean,
}>(
    ({ active, style }) => css`
        padding: 0.2rem 0;
        border-bottom: 1px solid #000;
        cursor: pointer;
        font-weight: bold;

        ${active && css`
            border-bottom: 0px solid #000;
            color: ${({ theme }) => theme.colors.primary};
        `}
        
        ${style && css`
            border: 1px solid #000;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            text-align: center;
        `}
`);
export default BaseButton;