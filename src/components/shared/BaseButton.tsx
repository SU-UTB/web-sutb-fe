import styled, { css } from 'styled-components';

const BaseButton = styled.p<{ active?: boolean, }>(
    ({ active }) => css`
        display: flex;
        flex-direction: row;
        padding: 0.2rem 0;
        border-bottom: 1px solid #000;
        cursor: pointer;
        font-weight: bold;

        ${active && css`
            border-bottom: 0px solid #000;
            color: var(--clr-primary);
        `}
`);
export default BaseButton;