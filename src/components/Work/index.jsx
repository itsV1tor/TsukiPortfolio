import { Container } from "./styles";
import { Headline } from "../Headline";
import { images } from "../../../public/assets";
import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

export function Work(){
    const imageRef = useRef(null);
    const [ visibleImages, setVisibleImages ] = useState(10);
    const totalImages = Object.keys(images.gallery).length;

    useEffect(() => {
        const box = imageRef.current;

        gsap.to(box, {
            y: 0,
            opacity: 1,
            duration: 3,
            delay: 3,
            ease: "power4.inOut"
        });
    }, []);
    

    const showMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 10);
    }
    return(
        <Container>
            <Headline title="Work" description="Here are some of my artworks!" id="work"/>

            <div className="gallery" ref={ imageRef }>
                {
                    Object.keys(images.gallery).slice(0, visibleImages).map((key) => (
                        <picture key={ key }>
                            <source type="image/webp" />
                            <img role="presentation" decoding="async" fetchpriority="high" key={key} src={ images.gallery[key] } alt={ `Image ${ key }` } />
                        </picture>
                    ))
                }
            </div>
                {
                    visibleImages < totalImages && (
                        <button id="show" onClick={ showMoreImages }>Show More!</button>
                    )
                }
        </Container>
    )
}