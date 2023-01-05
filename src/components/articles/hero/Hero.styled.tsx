import styled from 'styled-components';

export const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props: { src: string }) => props.src});
    width: 100%;
    height: 20vh;   
    margin-block: 2rem;
    background-position: center;
    background-repeat: no -repeat;
    background-size: cover;
    position: relative;
    @media screen and (min-width: 768px)
    {
        height: 40vh;
    }
    @media screen and (min-width: 1024px)
    {
        height: 60vh;
    }
`;

export const HeroText = styled.h1`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 3em;
`;
