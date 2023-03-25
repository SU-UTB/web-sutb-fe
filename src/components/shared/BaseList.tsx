import styled, { css } from 'styled-components';

const BaseList = styled.div<{
    row?: boolean;
    marginBlock?: number;
    marginInline?: number;
    gap?: number;
    fontSize?: number;
    decoration?: string;
}>(
    ({ row, marginBlock, marginInline, fontSize, gap, decoration }) => css`
        list-style: none;
        display: flex;
        ${fontSize && css`
            font-size: ${fontSize}em;
        `}
        ${marginBlock && css`
            margin-top: ${marginBlock}rem;
            margin-bottom: ${marginBlock}rem;
        `}
        ${marginInline && css`
            margin-left: ${marginInline}rem;
            margin-right: ${marginInline}rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
                margin-left: ${marginInline * 3}rem;
                margin-right: ${marginInline * 3}rem;
            }
        `}        
        ${row && css`
            flex-direction: row;
            flex-wrap: wrap;
            ${gap && css`
                column-gap: ${gap}rem;
                row-gap: ${gap * 0.5}rem;
            `}
        `}
        ${!row && css`
            flex-direction: column;
            ${gap && css`
                row-gap: ${gap}rem;
            `}
        `}
        ${decoration && css`
            list-style: ${decoration};
        `}
`);
export default BaseList;