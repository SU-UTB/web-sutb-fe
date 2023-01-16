import styled from 'styled-components'

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 250px;
    font-size: small;
    overflow-wrap: break-word;
`;
export const Header = styled.div`
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
`;
export const Body = styled.div`
    text-align: center;
`;
export const Img = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;
`;
export const Name = styled.h3`
    font-size: 1.5em;
    font-weight: 600;
`;