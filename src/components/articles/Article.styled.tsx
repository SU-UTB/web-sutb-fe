import styled, { css } from 'styled-components';

export const Wrapper = styled.article<{
    primary?: boolean;
}>(
    ({ primary }) => css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        ${primary && css`
        margin: 0 20px 20px;
        `}
        @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin: 0 12%;
        }
`);