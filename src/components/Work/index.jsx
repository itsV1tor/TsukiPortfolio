import { Container } from "./styles";
import { Headline } from "../Headline";
import { images } from "../../../public/assets";
import { useState } from "react";

export function Work(){
    const [ visibleImages, setVisibleImages ] = useState(10);

    const showMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 10);
    }
    return(
        <Container>
            <Headline title="Work" description="Here are some of my artworks!" id="work"/>

            <div className="gallery">
                {
                    Object.keys(images.gallery).slice(0, visibleImages).map((key) => (
                        <img key={key} src={ images.gallery[key] } alt={ `Image ${ key }` } />
                    ))
                }
            </div>

            <button id="show" onClick={ showMoreImages }>Show More!</button>
        </Container>
    )
}