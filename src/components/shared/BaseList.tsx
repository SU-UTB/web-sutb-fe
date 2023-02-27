import styled, { css } from 'styled-components';

const BaseList = styled.ul<{
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
            @media screen and (min-width: 768px) {
                margin-left: ${marginInline * 3}rem;
                margin-right: ${marginInline * 3}rem;
            }
            @media screen and (min-width: 1024px) {
                margin-left: ${marginInline * 4}rem;
                margin-right: ${marginInline * 4}rem;
            }
        `}        
        ${row && css`
            flex-direction: row;
            flex-wrap: wrap;
            ${gap && css`
                column-gap: ${gap}rem;
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