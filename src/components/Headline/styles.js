import styled from "styled-components";

export const Container = styled.div`
    margin-block: 40px;

    h2{
        font-size: ${ props => props.theme.font.size.normal };
        font-weight: ${ props => props.theme.font.weight.medium };
    }

    p{
        font-size: ${ props => props.theme.font.size.small };
        color: ${ props => props.theme.colors.gray_300 };
    }
`;