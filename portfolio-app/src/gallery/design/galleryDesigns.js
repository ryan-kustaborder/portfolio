import LukovaPDF from "./lukova/lukovaPDF.pdf";
import Lukova1 from "./lukova/lukova1.png";
import Lukova2 from "./lukova/lukova2.png";
import Lukova3 from "./lukova/lukova3.png";
import Lukova4 from "./lukova/lukova4.png";
import Lukova5 from "./lukova/lukova5.png";

import LayoutPDF from "./layout/layoutPDF.pdf";
import Layout1 from "./layout/layout1.png";
import Layout2 from "./layout/layout2.png";
import Layout3 from "./layout/layout3.png";
import Layout4 from "./layout/layout4.png";
import Layout5 from "./layout/layout5.png";

import Rodchenko1 from "./rodchenko/rodchenko.png";

import Inferno1 from "./inferno/inferno1.png";
import Inferno2 from "./inferno/inferno2.png";

import Skyline1 from "./skyline/skyline.png";

let DESIGNS = [];

const Lukova = {
    title: "Luba Lukova",
    desc: "This is a museum pamphlet for and inspired by the amazing designer Luba Lukova.",
    images: [Lukova1, Lukova2, Lukova3, Lukova4, Lukova5],
    alts: ["Front Cover", "Spread 1", "Spread 2", "Spread 3", "Back Cover"],
    external: LukovaPDF,
};

DESIGNS.push(Lukova);

const Layout = {
    title: "Layout Series",
    desc: "This is a magazine layout series where we started very restricted and then slowly added in more complexity.",
    images: [Layout1, Layout2, Layout3, Layout4, Layout5],
    alts: [
        "Black and White Type Only",
        "Adding Color",
        "Adding non-type elements",
        "Adding images",
        "Going off the grid",
    ],
    external: LayoutPDF,
};

DESIGNS.push(Layout);

const Rodchenko = {
    title: "Rodchenko",
    desc: "This is a poster for an art gallery featuring the photography of Alexander Rodchenko.",
    images: [Rodchenko1],
    alts: ["Black and White Type Only"],
    external: Rodchenko1,
};

DESIGNS.push(Rodchenko);

const Inferno = {
    title: "The Divine Comedy",
    desc: "This is a book cover design for Dante Aligiheri's epic poem The Divine Comedy",
    images: [Inferno1, Inferno2],
    alts: ["Book Cover", "Close up of front cover illustration"],
    external: Inferno1,
};

DESIGNS.push(Inferno);

const Skyline = {
    title: "Skyline",
    desc: "This is a magazine cover in the Swiss International Style.",
    images: [Skyline1],
    alts: ["Black and White Type Only"],
    external: Skyline1,
};

DESIGNS.push(Skyline);

export default DESIGNS;
