import { Container } from "./styles";
import { Work } from "../Work";
import { About } from "../About";

export function Main(){
    return(
        <Container>
            <Work/>
            <About/>
        </Container>
    );
}