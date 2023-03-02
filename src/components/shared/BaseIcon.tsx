import styled, { css } from 'styled-components';

const BaseIcon = styled.div<{
    size: number;
    circle?: boolean;
}>(
    ({ size, circle }) => css`
        display:flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        color: #000;

        ${size && css`
            font-size: ${size}rem;
        `}
        ${circle && css`
            border-radius: 50%;
            border: 1px solid #000;
        `}
`);
export default BaseIcon;