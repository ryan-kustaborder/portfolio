import React from "react";
import * as Icons from "react-feather";

import Landing from "../images/ModularInfographic.png";
import Full from "../images/ModularInfographicFull.pdf";
import Process from "../images/ModularInfographicProcess.pdf";

function ModularInfographic() {
    return (
        <>
            <div className="project-description span--2">
                <h3>Modular Infographic</h3>

                <p>
                    An infographic that can be broken into modules for sharing
                    on social media.
                </p>
                <div className="icon-link">
                    <Icons.File />
                    <a href={Full} target="_blank">
                        View the Full Infographic
                    </a>
                </div>
                <div className="icon-link">
                    <Icons.File />
                    <a href={Process} target="_blank">
                        View Process Book
                    </a>
                </div>
            </div>
            <img className="span--3" src={Landing} />
        </>
    );
}

export default ModularInfographic;
