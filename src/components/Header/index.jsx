import { Container } from "./styles";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { images } from "../../../public/assets";

import React, { useEffect, useRef } from 'react';
import gsap from "gsap";

export function Header(){
    const bannerRef = useRef(null);
    const iconRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const socialRef = useRef(null)

    useEffect(() => {
        const box = bannerRef.current;
        
        gsap.to(box, {
            delay: 1,
            duration: 2,
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
        })
    }, []);

    useEffect(() => {
        const box = iconRef.current;

        gsap.to(box, {
            delay: 2,
            opacity: 1,
            duration: 2,
            y: 0,
            ease: "power4.inOut"
        })
    }, []);

    useEffect(() => {
        const box = titleRef.current;

        gsap.to(box, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 3,
            ease: "power2.inOut"
        })
    }, []);

    useEffect(() => {
        const box = descriptionRef.current;

        gsap.to(box, {
            y: 0,
            opacity: 1,
            delay: 3,
            duration: 1.5,
            ease: "power3.inOut"
        });
    }, []);

    useEffect(() => {
        const box = socialRef.current;

        gsap.to(box, {
            x: 0,
            opacity: 1,
            delay: 2,
            duration: 2,
            ease: "elastic.inOut"
        });
    }, []);

    return(
        <Container>
            <img ref={ bannerRef } src= { images.banner } alt="tsuki banner" id="banner"/>
            <div>
                <img ref={ iconRef } src= { images.icon } alt="tsuki icon" id="icon"/>

                <div ref={ socialRef }>
                    <a href="https://www.instagram.com/tsuki_artss" target="_blank"><FaInstagram size={ 20 } id="instagram-icon"/></a>
                    <a href="https://twitter.com/tsuki696" target="_blank"><FaXTwitter size={ 20 } id="x-icon"/></a>
                </div>
            </div>
            <h1 ref={ titleRef }>tsuki</h1>
            <p ref={ descriptionRef }>Illustrator</p>
        </Container>
    );
}