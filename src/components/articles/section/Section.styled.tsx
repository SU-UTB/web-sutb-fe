import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${(props: { titleSize: string }) => props.titleSize + "rem"};
    font-weight : 700;
    color: rgb(238, 119, 17);
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    margin-block: 1.2rem 0;
    line-height: 1.5;
`;