import { Container } from "./styles"

export function Headline(props){
    return(
        <Container>
            <h2 id={ props.id }>{ props.title }</h2>
            <p>{ props.description }</p>
        </Container>
    )
}