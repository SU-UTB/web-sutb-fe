import styled from 'styled-components'

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    border-radius: 0.25rem;
    border: 1px solid #eaeaea;
    min-width: fit-content;
`;

export const Body = styled.div`
    padding: 1rem 1.5rem;
    text-align: center;
    `;

export const ImgTop = styled.img`
    max-width: 100%;
    height: auto;
    margin: auto;
`;

export const Name = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`;