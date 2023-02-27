import styled, { css } from 'styled-components';

import BaseList from '../../../shared/BaseList';

export const Wrapper = styled(BaseList)<{
    isMobile: boolean;
    isOpen: boolean;
}>(
    ({ isMobile, isOpen }) => css`
        font-weight: bold;
        text-align: center;
        ${!isMobile && css`
            display: flex;
            flex-direction: row;
            gap: 1rem;
        `}
        ${isMobile && css`
            visibility: hidden;
            position: absolute;

            display: flex;
            flex-direction: column;
            top: 59px;
            left: 0;
            background-color: #fff;
            z-index: 100;
            width: 100%;
            border-bottom: 1px solid black;
            
            ${isOpen && css`
                visibility: visible;
                transition: all 0.5s ease;
            `}
        `}
`);
