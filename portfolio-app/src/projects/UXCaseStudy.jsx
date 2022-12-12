import React from "react";
import * as Icons from "react-feather";

import Wireflow from "../images/UXCaseStudy/wireflow.png";
import Process from "../images/UXCaseStudy/process.pdf";

function UXCaseStudy() {
    return (
        <>
            <img className="span--3" src={Wireflow} />
            <div className="project-description span--2">
                <h3>
                    UX Case Study: Simplifying the Voter Registration Process
                </h3>

                <p>
                    In this project I investigated ways to streamline the online
                    voter registration. Over the course of four design sprints I
                    worked with a group of other students to develop taskflows
                    and wireflows, create low-fideltiy prototypes and user test
                    them, and finally create high-fidelity prototypes.
                </p>
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

export default UXCaseStudy;
