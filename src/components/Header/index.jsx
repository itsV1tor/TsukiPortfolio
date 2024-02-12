import { Container } from "./styles";
import { Nav } from "../Nav";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { images } from "../../assets";

export function Header(){
    return(
        <Container>
            <img src= { images.banner } alt="tsuki banner" id="banner"/>
            <div>
                <img src= { images.icon } alt="tsuki icon" id="icon"/>

                <div>
                    <a href="" target="_blank"><FaInstagram size={ 20 } id="instagram-icon"/></a>
                    <a href="https://twitter.com/tsuki696" target="_blank"><FaXTwitter size={ 20 } id="x-icon"/></a>
                </div>
            </div>
            <h1>tsuki</h1>
            <p>Illustrator</p>
        </Container>
    );
}