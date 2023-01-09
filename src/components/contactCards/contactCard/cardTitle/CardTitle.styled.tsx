import styled, { css } from 'styled-components';

const Title = styled.h2<{
    titleSize?: number;
}>(
    ({ titleSize }) => css`
    font-size: 1.5rem;
    font-weight: 400;
    
    ${titleSize && css`
        font-size: ${titleSize}rem;
    `}
`);

export default Title;