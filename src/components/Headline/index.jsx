import gsap from "gsap";
import { Container } from "./styles";
import { useEffect, useRef } from "react";

export function Headline(props){
    const headlineRef = useRef(null);

    useEffect(() => {
        const box = headlineRef.current;

        gsap.to(box, {
            x: 0,
            opacity: 1,
            delay: 4,
            duration: 2,
            ease: "power4.inOut"
        });
    });

    return(
        <Container ref={ headlineRef }>
            <h2 id={ props.id }>{ props.title }</h2>
            <p>{ props.description }</p>
        </Container>
    )
}