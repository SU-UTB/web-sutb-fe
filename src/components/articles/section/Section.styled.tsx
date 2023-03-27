import styled, { css } from 'styled-components';

export const Title = styled.h2<{
    titleSize?: number;
}>(
    ({ titleSize }) => css`
        font-size: ${titleSize}rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
        background-image: linear-gradient( 90deg, #fff 0%, #fff 100%);
`);