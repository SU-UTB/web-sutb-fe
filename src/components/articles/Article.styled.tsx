import styled, { css } from "styled-components";

export const Wrapper = styled.article<{
    primary?: boolean;
}>(
    ({ primary }) => css`
        display: flex;
        flex-direction: column;
    
        ${primary &&
        css`
      margin: 1rem 3rem;
    `}
`);