import styled, { css } from 'styled-components';

const BaseButton = styled.button<{
    active?: boolean,
    style?: boolean,
}>(
    ({ active, style }) => css`
        border: none;
        cursor: pointer;
        font-weight: 700;
        font-size: 1em;
        background: transparent;
        ${style && css`
        border: 1px solid #000;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-align: center;
        `}
        ${active && css`
            border: 1px solid ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primary};
        `}
`);
export default BaseButton;