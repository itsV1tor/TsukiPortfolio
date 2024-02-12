import styled from "styled-components";

export const Container = styled.nav`
    text-align: center;
    width: 100%;
    background-color: ${ props => props.theme.colors.white };
    border-bottom: 1px solid ${ props => props.theme.colors.gray_100 };
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;

    a{
        font-weight: ${ props => props.theme.font.weight.medium };
        color: ${ props => props.theme.colors.gray_300 };
        text-decoration: none;

        &:hover {
            color: ${ props => props.theme.colors.gray_800 };
            transition: .3s;
        } 

        + a{
            margin-left: 20px;
        }
    }

`;