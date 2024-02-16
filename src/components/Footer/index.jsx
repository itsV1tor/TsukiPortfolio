import { Container } from "./styles";
import { Social } from "../Social";

export function Footer(){
    return(
        <Container>
            <Social/>
            <div id="copy">
                <small>
                    © Designed & Coded by Haku - 2024
                </small>
            </div>
        </Container>
    )
}