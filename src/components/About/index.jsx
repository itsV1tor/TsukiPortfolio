import { Container } from "./styles";
import { Headline } from "../Headline";
import { images } from "../../../public/assets";

export function About(){
    return(
        <Container>
            <Headline title="About" description="A little bit about me." id="about"/>

            <div id="content">
                <img src={ images.icon } alt="Tsuki image"/>
                <div id="resume">
                    <h3>Tsuki</h3>
                    <p>Illustrator</p>
                </div>
                <div id="text">
                    <p>My name is Tsuki, and art is my passion. Ever since I was a child, I have always been enchanted by the beauty of the natural world and art's ability to express feelings and ideas.</p>
                    <p>For me, creating is like breathing. It's the way I find to connect with the world and give meaning to my life. In each work, I put a little piece of my soul, my worldview and my dreams.</p>
                </div>
            </div>
        </Container>
    )
}