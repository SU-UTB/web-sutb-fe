import styled, { css } from 'styled-components';

export const LinkTo = styled.a<{
    underline?: boolean;
    hero?: boolean;
}>(
    ({ underline, hero }) => css`
        text-decoration: none;
        font-weight: lighter;
        font-size: 1.4em;
        color: #000;
        ${underline && css`
            text-decoration: underline;
        `}
        ${hero && css`
            text-decoration: none;
            color: #fff;
            font-size: 1em;
            font-weight: normal;
        `}
`);
export default LinkTo;