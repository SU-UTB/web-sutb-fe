import styled from '@emotion/styled';

const Title = styled.h1`
    font-size: ${(props: { titleSize: string }) => props.titleSize + "rem"};
    font-weight : 700;
    color: rgb(238, 119, 17);
`;

export default Title;