import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    #banner{
        width: 100%;
        opacity: 0;
        transform: translateY(-160px);
    }

    #icon{
        opacity: 0;
        width: 100px;
        height: 100px;
        margin-top: -50px;
        border-radius: 50%;
        border: 4px solid ${ props => props.theme.colors.white };
        opacity: 0;
        transform: translateY(100px);
    }

    >div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        >div{
            position: absolute;
            right: 20px;
            top: 12px;
            opacity: 0;
            transform: translateX(100px);
        }

        a + a{
            margin-left: 12px;
        }
    }

    #instagram-icon, #x-icon{
        fill: ${ props => props.theme.colors.gray_300 };
        
        &:hover{
            fill: ${ props => props.theme.colors.gray_800 };
            transition: .3s;
        }
    }

    h1{
        font-size: ${ props => props.theme.font.size.large };
        font-weight: ${ props => props.theme.font.weight.semiBold };
        text-transform: uppercase;
        margin-top: 12px;
        opacity: 0;
        transform: translateY(50px);
    }
    
    p{
        font-weight: ${ props => props.theme.font.weight.medium };
        color: ${ props => props.theme.colors.gray_300 };
        opacity: 0; 
        transform: translateY(50px);
    }
`;