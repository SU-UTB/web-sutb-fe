import styled, { css } from "styled-components";

export const Wrapper = styled.article<{
    primary?: boolean;
}>(
    ({ primary }) => css`
        display: flex;
        flex-direction: column;
        ${primary && css`
            margin: 1rem 2rem;
        `}
        
        @media screen and (min-width: 768px) {
            ${primary && css`
                margin: 1rem 5rem;
            `}
        }

        @media screen and (min-width: 1024px) {
            ${primary && css`
                margin: 1rem 15rem;
            `}
        }
`);