import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import Carousel from "../components/Carousel";
import Reserve from "../pages/Reserve";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Carousel">
                <Carousel/>
            </ComponentPreview>
            <ComponentPreview path="/Reserve">
                <Reserve/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews