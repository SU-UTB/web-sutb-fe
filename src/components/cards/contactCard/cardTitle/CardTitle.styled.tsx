import styled, { css } from 'styled-components';

const Title = styled.h2<{
    bold?: boolean;
    big?: boolean;
    textAlign?: string;
}>(
    ({ bold, big, textAlign }) => css`
    font-size: 1.6em;
    font-weight: normal;
    
    ${bold && css`
        font-weight: bold;
    `}
    ${big && css`
        font-size: 2em;
    `}
    ${textAlign && css`
        text-align: ${textAlign};
    `}
`);

export default Title;