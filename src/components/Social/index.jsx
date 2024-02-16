import { Container } from "./styles";
import { Headline } from "../Headline";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export function Social(){
    return(
        <Container>
            <Headline title="Social" description="Contact me Here!" id="social"/>
            <div id="icons">
                <a href="https://www.instagram.com/tsuki_artss" target="_blank"><button><FaInstagram id="i-footer"/></button></a>
                <a href="https://twitter.com/tsuki696" target="_blank"><button><FaXTwitter id="x-footer"/></button></a>
            </div>
        </Container>
    )
}