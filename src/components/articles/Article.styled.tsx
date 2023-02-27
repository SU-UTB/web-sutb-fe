import styled, { css } from 'styled-components';

export const Wrapper = styled.article<{
    primary?: boolean;
    isMobile: boolean;
}>(
    ({ primary, isMobile }) => css`
        display: flex;
        flex-direction: column;
        
        ${primary && css`
            margin: 0 20px;
        `}
        
        ${!isMobile && css`
            margin: 0 12%;
        `}
`);