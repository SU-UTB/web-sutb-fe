import styled from 'styled-components';

export const Wrapper = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 3rem;
    justify-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;