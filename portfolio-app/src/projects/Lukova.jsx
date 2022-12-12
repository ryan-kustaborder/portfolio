import React from "react";
import * as Icons from "react-feather";

import Thumbnail from "../images/lukova/lukova1.png";
import Process from "../images/lukova/lukova-process.pdf";
import Booklet from "../images/lukova/lukova.pdf";

function Lukova() {
    return (
        <>
            <div className="project-description span--2">
                <h3>Museum Booklet: Luba Lukova</h3>
                <p>
                    In this project I created a small museum booklet for a
                    theoretical exhibit featuring the work of Luba Lukova. The
                    challenge was to emulate her style while adding our own
                    personal flair to the design.
                </p>
                <div className="icon-link">
                    <Icons.File />
                    <a href={Booklet} target="_blank">
                        View Final Booklet
                    </a>
                </div>{" "}
                <div className="icon-link">
                    <Icons.File />
                    <a href={Process} target="_blank">
                        View Process Book
                    </a>
                </div>
            </div>
            <img className="span--3" src={Thumbnail} />
        </>
    );
}

export default Lukova;
