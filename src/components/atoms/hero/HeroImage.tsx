import styled from '@emotion/styled';

const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                        url(${(props: { src: string }) => props.src});
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

export default HeroImage;