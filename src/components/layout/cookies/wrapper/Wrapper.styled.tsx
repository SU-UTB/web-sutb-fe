import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    padding:0 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border-top: 1px solid #000;
`;