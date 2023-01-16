import styled, { css } from 'styled-components';

const BaseParagraph = styled.p<{
    fontSize?: number;
}>(
    ({ fontSize }) => css`
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    ${fontSize && css`
        font-size: ${fontSize}rem;
    `}
`);
export default BaseParagraph;