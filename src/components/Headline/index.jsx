import gsap from "gsap";
import { Container } from "./styles";
import { useEffect, useRef } from "react";

export function Headline(props){
    const headlineRef = useRef(null);

    useEffect(() => {
        const box = headlineRef.current;

        gsap.from(box, {
            x: 50,
            opacity: 0,
            delay: 2
        });

        gsap.to(box, {
            x: 0,
            opacity: 1,
            delay: 2,
            duration: 2,
            ease: "power3.inOut"
        });
    });

    return(
        <Container ref={ headlineRef }>
            <h2 id={ props.id }>{ props.title }</h2>
            <p>{ props.description }</p>
        </Container>
    )
}