import styled from 'styled-components';

export const Wrapper = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
    justify-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
`;