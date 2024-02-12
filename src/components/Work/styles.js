import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;

    .gallery{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;

        gap: 12px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    .none{
        display: none;
    }

    #show{
        font-weight: ${ props => props.theme.font.weight.medium };
        padding: 12px 20px;
        margin-block: 20px;
        border: 1px solid ${ props => props.theme.colors.gray_100 };
        border-radius: 12px;
        background: transparent;
        cursor: pointer;
        align-self: center;
        transition: .3s;
        &:hover{
            transform: scale(1.05);
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
;
        }
    ;

    }

    .small-card{

    }

    .medium-card{

    }

    .large-card{

    }
`;