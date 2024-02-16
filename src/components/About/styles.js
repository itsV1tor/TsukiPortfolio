import styled from "styled-components";

export const Container = styled.section`
    #content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px; 
        padding: 0 12px 40px 12px;
    }

    #resume{
        text-align: center;

        p{
            color: ${ props => props.theme.colors.gray_300 };
            font-weight: ${ props => props.theme.font.weight.medium };
        }
    }


    img{
        width: 200px;
        height: 200px;
        border-radius: 12px;
    }

    h3{
        font-size: ${ props => props.theme.font.size.large };
        font-weight: ${ props => props.theme.font.weight.semiBold };
        text-transform: uppercase;
    }

    p{
        color: ${ props => props.theme.colors.gray_300 };
    }

    #text{
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 400px;
    }
`;