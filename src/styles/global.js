import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
    }

    body *{
        font-family: ${ props => props.theme.font.family };
        font-size: ${ props => props.theme.font.size.normal };
        color: ${ props => props.theme.colors.gray_800 };
    }
`;