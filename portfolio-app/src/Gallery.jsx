import React from "react";
import Header from "./Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Inferno from "./gallery/design/inferno/inferno1.png";

import LayoutSeries1 from "./gallery/design/layout/layout1.png";
import LayoutSeries3 from "./gallery/design/layout/layout3.png";
import LayoutSeries4 from "./gallery/design/layout/layout4.png";
import LayoutSeries5 from "./gallery/design/layout/layout5.png";

import Rodchenko from "./gallery/design/rodchenko/rodchenko.png";

import Skyline from "./gallery/design/skyline/skyline.png";

import BigHero6 from "./gallery/design/BigHero6.png";

function Gallery() {
    const images = [
        Inferno,
        LayoutSeries1,
        BigHero6,
        Rodchenko,
        LayoutSeries3,
        Skyline,
        LayoutSeries4,
        LayoutSeries5,
    ];

    const imageElements = images.map((image, i) => {
        return <img key="i" src={image}></img>;
    });

    return (
        <div id="gallery">
            <Header />

            <div id="content" className="grid">
                <h1 className="span--5">Gallery</h1>

                <ResponsiveMasonry
                    className="span--5"
                    columnsCountBreakPoints={{ 600: 2, 900: 3 }}
                >
                    <Masonry gutter="16px">{imageElements}</Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}

export default Gallery;
