import styled, { css } from 'styled-components';

export const Title = styled.h1<{
    titleSize?: number;
}>(
    ({ titleSize }) => css`
        font-size: ${titleSize}rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
`);