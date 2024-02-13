import { Container } from "./styles";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";

export function Nav(){
    const navRef =  useRef(null);

    useEffect(() => {
        const box = navRef.current;

        gsap.from(box, {
             y: -50,
             opacity: 0,
             delay: 1
        });

        gsap.to(box, {
            y: 0,
            opacity: 1,
            delay: 2,
            duration: 2,
            ease: "power2.inOut"
        });
    }, [])

    return(
        <Container ref={ navRef }>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#social">Social</a>
        </Container>
    );
}