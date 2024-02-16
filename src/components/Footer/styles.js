import styled from "styled-components";

export const Container = styled.footer`
    background-color: ${ props => props.theme.colors.black };

    #copy{
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid ${ props => props.theme.colors.gray_300 };
        padding: 20px 0;
        small{
            color: ${ props => props.theme.colors.gray_300 };
        }
    }

    h2{
        color: ${ props => props.theme.colors.white };
    }
`;