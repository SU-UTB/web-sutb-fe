import styled, { css } from 'styled-components';

export const BaseLink = styled.a<{
    underline?: boolean;
    hero?: boolean;
    active?: boolean;
}>(
    ({ underline, hero, active }) => css`
        text-decoration: none;
        font-weight: lighter;
        font-size: 1.4rem;
        
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
        ${active && css`
            color: var(--clr-primary);
        `}
`);
export default BaseLink;