import styled, { css } from 'styled-components';

export const Wrapper = styled.article<{
    primary?: boolean;
}>(
    ({ primary }) => css`
        display: flex;
        flex-direction: column;
        ${primary && css`
            margin: 0 20px;
        `}
        @media only screen and (min-width: 768px) {
            margin: 0 12%;
        }
`);