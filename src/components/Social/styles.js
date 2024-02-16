import styled from "styled-components";

export const Container = styled.section`
   max-width: 720px;
   display: flex;
   margin: 0 auto;
   flex-direction: column;
   padding: 20px;

    #icons{
        border: 1px solid ${ props => props.theme.colors.white };
        display: flex;
        margin-bottom: 44px;
    }
    a{
        width: 100%;
    }

    button {
        background: none;
        width: 100%;
        border: none;
        padding: 40px;
        cursor: pointer;
        transition: .7s;
        &:hover{
            background-color: ${ props => props.theme.colors.white };

            #i-footer, #x-footer{
                fill: ${ props => props.theme.colors.black };
            }
        }
    }

    #i-footer, #x-footer{
        fill: ${ props => props.theme.colors.white };
    }
`;