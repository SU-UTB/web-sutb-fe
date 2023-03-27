import styled, { css } from 'styled-components';

import BaseLink from '../../../shared/BaseLink';
import BaseList from '../../../shared/BaseList';

export const Wrapper = styled(BaseList)<{
    isOpen: boolean;
}>(
    ({ isOpen }) => css`
        font-weight: bold;
        text-align: center;
        display: none;
        visibility: hidden;
        ${isOpen && css`
            visibility: visible;
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 59px;
            left: 0;
            background-color: #fff;
            z-index: 100;
            width: 100%;
            border-bottom: 1px solid black;
            transition: all 0.5s ease;
        `}
        @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
            visibility: visible;
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
`);

export const NavLink = styled(BaseLink)<{
    active: boolean;
}>(
    ({ active }) => css`
        :hover {
            text-decoration: underline;
        }
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
        ${active && css`
            color: ${({ theme }) => theme.colors.primary};
        `}
`);
