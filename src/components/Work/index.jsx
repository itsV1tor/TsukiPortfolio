import { Container } from "./styles";
import { Headline } from "../Headline";
import { images } from "../../../public/assets";
import { useState } from "react";

export function Work(){
    const [ visibleImages, setVisibleImages ] = useState(10);
    const totalImages = Object.keys(images.gallery).length;

    const showMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 10);
    }
    return(
        <Container>
            <Headline title="Work" description="Here are some of my artworks!" id="work"/>

            <div className="gallery">
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