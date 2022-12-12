import React from "react";
import * as Icons from "react-feather";

import Landing from "../images/accmat.png";
import Process from "../images/accmat-process.pdf";

function AccessibilityMatters() {
    return (
        <>
            <img className="span--3" src={Landing} />
            <div className="project-description span--2">
                <h3>Accessibility Matters.</h3>

                <p>
                    Accessibility Matters. is a resource aimed at developers to
                    teach them some key points about accessibility on the web.
                    It contains both informational content as well as
                    simulations to allow the user to better understand the
                    obstacles that some users face when on the internet.
                </p>
                <div className="icon-link">
                    <Icons.Link />
                    <a
                        href="https://eecs.csuohio.edu/~rykustab/project1/"
                        target="_blank"
                    >
                        Visit the Site
                    </a>
                </div>
                <div className="icon-link">
                    <Icons.File />
                    <a href={Process} target="_blank">
                        View Process Book
                    </a>
                </div>
            </div>
        </>
    );
}

export default AccessibilityMatters;
